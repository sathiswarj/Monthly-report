import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { API_BASE_URL } from '../Service/apiEndPoint'
const Signup = () => {
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    // const [status, setStatus] = React.useState('low');
    // const [completed, setCompleted] = useState(false)
    // const [notCompleted, setNotCompleted] = useState(false)
    // const [priority, setPriority] = React.useState('low')
    // const handleCheckbox = (e) => {
    //     const { name, checked } = e.target
    //     if (name === "Completed") {
    //         setCompleted(checked)
    //         if (checked) setNotCompleted(false)
    //     }
    //     else if (name === "Not Completed") {
    //         setNotCompleted(checked)
    //         if (checked) setCompleted(false)
    //     }
    // }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${API_BASE_URL}/auth/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    email: email,
                    password: password
                })
            })
            const data = await response.json()
            if (response.status === 200) {
                alert(data.message)
            }

        } catch (error) {
            console.error('Error signing up:', error);
        }
    }

    return (
        <>
            <div style={{ border: '1px solid black', width: '400px', height: 'auto', margin: 'auto', marginTop: '100px' }}>
                <h1 style={{ color: 'blue', textAlign: 'center' }}>Welcome to the Home Page</h1>
                <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }} onSubmit={handleSubmit}>
                    <input type="text" placeholder='Enter your username' value={username} onChange={(e) => setUsername(e.target.value)} style={{ marginTop: '10px' }}></input>
                    <input type="email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} style={{ marginTop: '10px' }}></input>
                    <input type="password" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} style={{ marginTop: '10px' }}></input>
                    <button type="submit" style={{ marginTop: '10px', width: '100px', height: '30px', backgroundColor: 'blue', color: 'white', marginBottom: '10px' }}>Signup</button>
                    {/* <input type='radio' name="status" value="high" checked={status === "high"} onChange={(e) => setStatus(e.target.value)} /> high
                    <input type="checkbox" name="Completed" checked={completed} onChange={handleCheckbox} /> Completed
                    <input type="checkbox" name="Not Completed" checked={notCompleted} onChange={handleCheckbox} /> Not completed

                    <select name="Priority" id="Priority" onChange={(e) => setPriority(e.target.value)}>
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select> */}

                </form>
                <Link to="/" style={{ textDecoration: 'none', color: 'blue', marginLeft: '10px' }}>Go to Login</Link>
            </div>
        </>
    )
}

export default Signup