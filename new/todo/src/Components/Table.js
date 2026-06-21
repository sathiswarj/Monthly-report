import React, { useState } from 'react'
import Popup from './Popup'
import { API_BASE_URL } from '../Service/apiEndPoint'
import { useNavigate } from 'react-router-dom'

const Table = () => {
    const [isPopupOpen, setIsPopupOpen] = React.useState(false)
    const [data, setData] = React.useState([])
    const [editItem, setEditItem] = useState(null)

    const navigate = useNavigate()
    const handleFetch = async () => {
        try {
            const token = localStorage.getItem('tokens1');
            const response = await fetch(`${API_BASE_URL}/todo`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            const result = await response.json();
            if (Array.isArray(result)) {
                setData(result);
            } else {
                console.error("Failed to fetch todos:", result);
            }
        } catch (error) {
            console.error('Error fetching todos:', error);
        }
    }
    React.useEffect(() => {
        handleFetch();
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('tokens1');
        navigate('/')
    }

    const handleEdit = (item) => {
        setEditItem(item)
        setIsPopupOpen(true)
    }
    return (
        <>
            <h1>Table Component</h1>
            <table>
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Description</th>
                        <th>Priority</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item) => (
                            <tr key={item._id}>
                                <td>{item.task}</td>
                                <td>{item.description}</td>
                                <td>{item.priority}</td>
                                <td>{item.completed ? 'Completed' : 'Not Completed'}</td>
                                <td>
                                    <button onClick={() => handleEdit(item)}>Edit</button>
                                    <button  >Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <button style={{ marginTop: '20px', width: '100px', height: '30px', backgroundColor: 'blue', color: 'white' }} onClick={() => setIsPopupOpen(true)}>Open Popup</button>
            <Popup isOpen={isPopupOpen} onClose={() => {

                setEditItem(null)
                setIsPopupOpen(false)
            }
            } onEdit={handleEdit} editItem={editItem} />

            <button onClick={handleLogout}>Logout</button>
        </>
    )
}

export default Table