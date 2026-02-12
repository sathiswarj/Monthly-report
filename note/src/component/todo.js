import React, { useState } from "react"

const Todo = () => {
    const [name, setName] = useState('')
    const [details, setDetails] = useState('')
    const [todos, setTodos] = useState([])
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name || !details) return
        try {
            const newTask = { id: Date.now(), name: name, details: details }
            setTodos([...todos, newTask])
            setName('')
            setDetails('')
        } catch (error) {

        }
    }

    const handleDelete = (id) => {
        const filteredTodos = todos.filter((todo) => todo.id !== id)
        setTodos(filteredTodos)
    }
    return (
        <>
            <form style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '10px' }} onSubmit={handleSubmit}>
                <input type="text" placeholder="Add a new task" value={name} onChange={(e) => setName(e.target.value)} />
                <textarea placeholder="Task details" value={details} onChange={(e) => setDetails(e.target.value)}></textarea>
                <button type="submit">Add</button>
            </form>

            <div>
                <ul>
                    {todos.map((todo, index) => (
                        <>
                            <li key={todo.id}>
                                <p>{todo.name}</p>
                                <p>{todo.details}</p>
                                <button onClick={() => handleDelete(todo.id)}>Delete</button>
                            </li>
                        </>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Todo