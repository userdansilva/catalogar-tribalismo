import { NextApiRequest, NextApiResponse } from 'next'
import execQuery from '../../services/mysql'

interface Product {
  id: number
  name: string
}

const Products = async (req: NextApiRequest, res: NextApiResponse) => {
  // Disable API
  return res.status(500).json({ message: 'Not implemented' })

  try {
    const clientId = process.env.CLIENT_ID

    const query = `Select id, name from products where user_id = ${clientId} AND archived = 'N'`

    const result = (await execQuery(query)) as Product[]

    res.json(result)
  } catch {
    res.status(500)
  }
}

export default Products
