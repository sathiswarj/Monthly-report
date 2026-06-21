import React from 'react'
 import {API_BASE_URL} from '../Service/apiEndPoint'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const navigate = useNavigate()

   const handleSubmit = async (e) => {
          e.preventDefault();
          try {
              const response = await fetch(`${API_BASE_URL}/auth/login`, {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                       email: email,
                      password: password
                  })
              })
              const data = await response.json()
              if(response.status === 200){
                   navigate('/table')
                    if(data.token){
                localStorage.setItem('tokens1', data.token)
              }
              }
            
          } catch (error) {
              console.error('Error signing up:', error);
          }
      }
  return (
    <>
        <div style={{border:'1px solid black', width:'400px', height:'auto', margin:'auto', marginTop:'100px'}}>
        <h1 style={{color:'blue', textAlign:'center'}}>Welcome to the Home Page</h1>
            <form style={{display:'flex', flexDirection:'column', alignItems:'center', marginTop:'20px'}} onSubmit={handleSubmit}>
                <input 
                  type="text" 
                  placeholder='Enter your email' 
                  style={{marginTop:'10px'}} 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                  type="password" 
                  placeholder='Enter your password' 
                  style={{marginTop:'10px'}} 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" style={{marginTop:'10px', width:'100px', height:'30px', backgroundColor:'blue', color:'white', marginBottom:'10px'}}>
                    Login
                </button>
            </form>
            <a href="/signup" style={{textDecoration:'none', color:'blue', marginLeft:'10px'}}>Go to Signup</a>
        </div>
    </>
  )
}

export default Home