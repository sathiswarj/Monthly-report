const todoController = require('../controllers/todoController');
const authMiddleware = require('../middleware/authMiddleware');
const express = require('express');
const router = express.Router();

router.get('/', authMiddleware, todoController.getTodos);
router.post('/', authMiddleware, todoController.createTodo);
router.put('/:id', authMiddleware, todoController.updateTodo);
router.delete('/:id', authMiddleware, todoController.deleteTodo);

module.exports = router;