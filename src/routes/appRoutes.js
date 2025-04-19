import express from express
import {createTodo,getTodo,updateTodo,deleteTodo} from "../controllers/appController.js"


const router = exppres.Router();
router.get('/',getTodo);
router.post('/',createTodo);
router.put('/:id',updateTodo);
router.delete('/:id'deleteTodo);

export default router;
