import pool from "../db/index.js"

export const getTodo = async(res, req) =>
{
  const { rows }  = await pool.query('SELECT * FROM todos ORDER by id');
  res.json(rows);

}

export const createTodo = async(res, req) =>
{
  const { title } = req.body;
  const { rows } = await pool.query('INSERT into todos (title) values ($1) RETURNING *',[title]);
  res.status(201).json(rows[0]);
}

export const updateTodo = async(res, req)=>
{
  const { id } = req.params;
  const { commpleted } = req.body;
  const { rows } = await pool.query('UPDATE todos SET completed = $1 WHERE id = $2 RETURNING *',
    [completed, id]);
  res.json(rows[0]);
};

export const deleteTodo = async(res , req) =>
{
  const {id} = req.params;
  await pool.query('DELETE FROM todos WHERE id = ($1)',[id]);
  res.sendStatus(204);
};


