import { Button } from 'semantic-ui-react'
import NavBar from '../../components/nav/navBar'
import './login.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function LogIn() {
  const[auth,setAuth] = useState(true);
  const navigate = useNavigate();

  function handleLogIn(){
    setAuth(true);
    navigate('/home');
  }
  return (
    <>
    <NavBar />
    <div style={{height: '90vh',backgroundColor: 'black'}}>
      <div className='login-elements'>
        <div className='login-header'>

        <h1 style={{marginTop: '8rem'}}>Log In</h1>
        <h3 style={{marginTop: '2rem'}}>Enter your email and password to login</h3>
        </div>

        <div className='login-inputs'>
            <img src='/user1.png'></img>
            <input type="email" placeholder=" Email"/>
        </div>
        <div className='login-inputs'> 
            <img src='/lock.png'></img>
            <input type="password" placeholder=" Password"/>
        </div>
            <Button style={{display: 'block',margin: 'auto',fontSize: '1.6rem',backgroundColor: 'white',color: 'black',borderRadius: '10px'}}  
            className='login-btn' onClick={handleLogIn} content="Log in"/>
            <p style={{textDecoration: 'underline'}}>Don't have an account? <a  href="/Signup" className='login-btn' style={{marginLeft: '2rem',padding: '0.2rem 1.5rem'}}>Sign up</a></p>
      </div> 
    </div>
    </>
  )
}
