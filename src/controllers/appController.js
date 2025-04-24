import pool from "../db/index.js";

// Get all todos
export const getTodo = async (req, res) => {
  const { rows } = await pool.query('SELECT * FROM todos ORDER BY id');
  res.json(rows);
};

export const createTodo = async (req, res) => {
  const { title } = req.body;
  const { rows } = await pool.query('INSERT INTO todos (title) VALUES ($1) RETURNING *', [title]);
  res.status(201).json(rows[0]);
};

export const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;
  const { rows } = await pool.query('UPDATE todos SET completed = $1 WHERE id = $2 RETURNING *', [completed, id]);
  res.json(rows[0]);
};
export const deleteTodo = async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM todos WHERE id = $1', [id]);
  res.sendStatus(204);
};

