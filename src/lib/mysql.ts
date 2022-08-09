import mysql from "mysql2/promise";

const execQuery = async (query: string, values: (string | number)[] = []) => {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT as number | undefined,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  });

  connection.connect();

  try {
    const [data] = await connection.execute(query, values);
    connection.end();

    return data;
  } catch (err) {
    return err;
  }
};

export default execQuery;
