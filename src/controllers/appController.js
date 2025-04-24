import pool from "../db/index.js"

export const getTodo = async(res, req) =>
{
  const { rows }  = await pool.query('SELECT * FROM todos ORDER by id');
  res.json(rows);

}


