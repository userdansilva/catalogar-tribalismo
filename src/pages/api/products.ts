import { NextApiRequest, NextApiResponse } from 'next'
import { protectAPI } from '../../middleware/protectAPI'
import execQuery from '../../services/mysql'

interface Product {
  id: number
  name: string
}

const Products = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const clientId = process.env.CLIENT_ID

    const query = `Select id, name from products where user_id = ${clientId} AND archived = 'N'`

    const result = (await execQuery(query)) as Product[]

    res.json(result)
  } catch {
    res.status(500)
  }
}

export default protectAPI(Products)
