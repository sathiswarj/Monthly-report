import React, { useState, useEffect } from "react"
import Count from "./count"

const Todo = () => {
    const [name, setName] = useState('')
    const [details, setDetails] = useState('')
    const [todos, setTodos] = useState([])
    const [currentId, setCurrentId] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name || !details) return
        if (currentId) {
            const updatedTodos = todos.map((todo) => todo.id === currentId ? { ...todo, name, details } : todo)
            setTodos(updatedTodos)
            localStorage.setItem('todos', JSON.stringify(updatedTodos))
            setCurrentId(null);

        }
        else {
            const newTask = { id: Date.now(), name, details }
            setTodos([...todos, newTask])
            localStorage.setItem('todos', JSON.stringify([...todos, newTask]))

        }
        setName('')
        setDetails('')
    }

    const handleEditDetails = (todo) => {
        setCurrentId(todo.id);
        setName(todo.name)
        setDetails(todo.details)
    }

    const handleDelete = (id) => {
        const filteredTodos = todos.filter((todo) => todo.id !== id)
        setTodos(filteredTodos)
        localStorage.setItem('todos', JSON.stringify(filteredTodos));
    }



    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem('todos'))
        if (storedTodos) {
            setTodos(storedTodos)
        }
    }, [])
    return (
        <>
            <form style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '10px' }} onSubmit={handleSubmit}>
                <input type="text" placeholder="Add a new task" value={name} onChange={(e) => setName(e.target.value)} />
                <textarea placeholder="Task details" value={details} onChange={(e) => setDetails(e.target.value)}></textarea>
                <button type="submit">{currentId ? 'Update' : 'Add'}</button>
            </form>

            <div>
                <ul>
                    {todos.map((todo, index) => (
                        <>
                            <li key={todo.id}>
                                <p>{todo.name}</p>
                                <p>{todo.details}</p>
                                <button onClick={() => { handleEditDetails(todo) }}>Edit</button>
                                <button onClick={() => handleDelete(todo.id)}>Delete</button>
                            </li>
                        </>
                    ))}
                </ul>
            </div>

            <Count />
        </>
    )
}

export default Todo