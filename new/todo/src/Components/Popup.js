import React from 'react'
import { API_BASE_URL } from '../Service/apiEndPoint'
const Popup = ({ isOpen, onClose }) => {
    const [task, setTask] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [priority, setPriority] = React.useState('')
    const [completed, setCompleted] = React.useState(false)
    const [notCompleted, setNotCompleted] = React.useState(false);

    const handleRadioChange = (e) => {
        setPriority(e.target.value)
    }

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target
        if (name === 'completed') {
            setCompleted(checked)
            if (checked) setNotCompleted(false)
        } else if (name === 'notCompleted') {
            setNotCompleted(checked)
            if (checked) setCompleted(false)
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = {
            task: task,
            description: description,
            priority: priority,
            completed: completed,
            notCompleted: notCompleted
        }
        try {
            const token = localStorage.getItem('tokens1');
            const response = await fetch(`${API_BASE_URL}/todo`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(data)
            })
            const result = await response.json()
            console.log('Todo submitted successfully:', result)
        } catch (error) {
            console.error('Error submitting todo:', error)
        }
    }
    if (!isOpen) return null
    return (
        <>
            <div style={{ position: 'fixed', inset: 0, zIndex: 50, display: 'flex', backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: 'center', alignItems: 'center' }} onSubmit={handleSubmit}>
                <div style={{ width: '300px', height: '500px', backgroundColor: 'white', border: '1px solid black', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <input type="text" placeholder='Enter your task' style={{ marginTop: '10px' }} value={task} onChange={(e) => setTask(e.target.value)}></input>
                        <textarea placeholder='Enter your description' style={{ marginTop: '10px' }} value={description} onChange={(e) => setDescription(e.target.value)}></textarea>

                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <input
                                type="radio"
                                name="priority"
                                value="high"
                                checked={priority === 'high'}
                                onChange={handleRadioChange}
                                style={{ marginTop: '10px' }}
                            />
                            High
                            <input
                                type="radio"
                                name="priority"
                                value="medium"
                                checked={priority === 'medium'}
                                onChange={handleRadioChange}
                                style={{ marginTop: '10px' }}
                            />
                            Medium
                            <input type="radio" name="priority" value="low" checked={priority === 'low'} onChange={handleRadioChange} style={{ marginTop: '10px' }} /> Low

                        </div>
                        <input
                            type="checkbox"
                            name='completed'
                            checked={completed}
                            onChange={handleCheckboxChange}
                        />
                        <label>Completed</label>

                        <input
                            type="checkbox"
                            name='notCompleted'
                            checked={notCompleted}
                            onChange={handleCheckboxChange}
                        />
                        <label>Not Completed</label>

                        <button type="submit" style={{ marginTop: '10px', width: '100px', height: '30px', backgroundColor: 'blue', color: 'white', marginBottom: '10px' }}>Submit</button>
                    </form>
                    <button onClick={onClose} style={{ width: '100px', height: '30px', backgroundColor: 'red', color: 'white' }}>Close</button>
                </div>
            </div>

        </>
    )
}

export default Popup