const Todo = require("../model/todoModel")

exports.getTodos = async (req, res) => {
    try {
        const todos = await Todo.find({ userId: req.user.userId });
        res.json(todos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createTodo = async (req, res) => {
    try {
        const todo = new Todo({ ...req.body, userId: req.user.userId });
        await todo.save();
        res.status(201).json(todo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateTodo = async (req, res) => {
    try {
        const todo = await Todo.findOneAndUpdate(
            { _id: req.params.id, userId: req.user.userId },
            req.body,
            { new: true }
        );
        res.json(todo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteTodo = async (req, res) => {
    try {
        await Todo.findOneAndDelete({ _id: req.params.id, userId: req.user.userId });
        res.json({ message: 'Todo deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
