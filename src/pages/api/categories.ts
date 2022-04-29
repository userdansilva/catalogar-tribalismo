import { NextApiRequest, NextApiResponse } from 'next'
import execQuery from '../../services/mysql'
import { Category } from '../../types/Category'

const Categories = async (req: NextApiRequest, res: NextApiResponse) => {
  // Disable API
  return res.status(500).json({ message: 'Not implemented' })

  try {
    const clientId = process.env.CLIENT_ID

    const query = `Select id, name, favorite from categories where user_id = ${clientId} AND archived = 'N'`

    const result = (await execQuery(query)) as Category[]

    res.json(result)
  } catch {
    res.status(500)
  }
}

export default Categories
