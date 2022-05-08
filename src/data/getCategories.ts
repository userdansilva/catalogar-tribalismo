import execQuery from '../lib/mysql'

import { Category } from '../types/Category'

export const getCategories = async () => {
  const clientId = process.env.CLIENT_ID

  const query = `Select id, name, favorite from categories where user_id = ${clientId} AND archived = 'N'`
  const result = (await execQuery(query)) as Category[]

  return JSON.parse(JSON.stringify(result))
}
