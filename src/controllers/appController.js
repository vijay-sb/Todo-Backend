// hardcoded tasks and id;

let todos = [];
let cuurrentId = 1;

export const createTodo = (res,req) =>
{
  const {title} = req.body;
  if(!title)
{
   return res.status(400).json({error : 'tile is required'});
}
  const newTodo = {
    id:cuurrentId++;
    title,
    completed:false
  }

  todos.push(newTodo);
  res.status(201).json(newTodo)
};


