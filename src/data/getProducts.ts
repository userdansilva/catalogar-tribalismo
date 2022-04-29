import execQuery from '../services/mysql'
import { Product } from '../types/Product'

export const getProducts = async () => {
  const clientId = process.env.CLIENT_ID

  const query = `Select id, name from products where user_id = ${clientId} AND archived = 'N'`

  const result = (await execQuery(query)) as Product[]

  return JSON.parse(JSON.stringify(result))
}
