import mysql from 'mysql'

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  database: process.env.MYSQL_DATABASE,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  connectionLimit: 5,
});

export default async function executeQuery({ query, values = []}: { query: string, values?: any[] }) {
  try {
    console.log(`Executing query: ${query}`);
    const results = await new Promise((resolve, reject) => {
      pool.query(query, values, (error: any, results: any) => {
        if (error) {
          return reject(error);
        }
        return resolve(results);
      });
    });
    console.log(`Query executed successfully`);
    return results;
  } catch (error) {
    console.log(`
      Error in query: ${error}.
      Query: ${query}.
    `);
    throw error;
  }
}