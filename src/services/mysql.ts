import mysql from 'serverless-mysql'

const config: mysql.Config = {
  config: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT as number | undefined,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
  }
}

const db = mysql(config)

const execQuery = async (query: string) => {
  try {
    const results = await db.query(query)
    await db.end()
    return results
  } catch (err) {
    return err
  }
}

export default execQuery
