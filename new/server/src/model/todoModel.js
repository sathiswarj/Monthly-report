const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    task: {     
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    priority: {
        type: String,
        enum: ['high', 'medium', 'low'],
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Todo', todoSchema);
