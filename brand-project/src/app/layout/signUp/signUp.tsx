import { Button } from 'semantic-ui-react'
import NavBar from '../../components/nav/navBar'
import '../login/login.css'
import { NavLink } from 'react-router-dom'
export default function SignUp() {
  return (
    <>
    <NavBar />
    <div style={{height: '90vh',backgroundColor: 'black'}}>
      <div className='login-elements'>
        <div className='login-header'>

        <h1 style={{marginTop: '4rem'}}>Sign up</h1>
        <h3 style={{marginTop: '2rem',marginBottom: '1rem'}}>Enter your credentials<br></br>
        <span style={{fontSize: '1.2rem'}}>Remember username and password!</span>
        </h3>
        
        </div>

        <div className='login-inputs' style={{display: 'flex',flexDirection: 'column',margin: 'auto',marginBottom: '2rem'}}>
            
            <input type="name" placeholder="First Name"/>
            <input type="surname" placeholder="Last Name"/>
            <input type="username" placeholder="Username"/>
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder=" new Password"/>
            <input type="password" placeholder="re-type Password"/>
        
        
            
        </div>
            <a href="/home" className='login-btn'>
              Create account
            </a>
            <p style={{textDecoration: 'underline'}}>Already have an account? <Button as={NavLink} to='/Login' className='login-btn' style={{marginLeft: '2rem',padding: '0.2rem 1.5rem'}}>Log in</Button></p>
      </div> 
    </div>
    </>
  )
}
