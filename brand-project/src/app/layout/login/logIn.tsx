import NavBar from '../../components/nav/navBar'
import './login.css'
export default function LogIn() {
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
            <a href="/home" className='login-btn'>
              Log in
            </a>
            <p style={{textDecoration: 'underline'}}>Don't have an account? <a  href="/Signup" className='login-btn' style={{marginLeft: '2rem',padding: '0.2rem 1.5rem'}}>Sign up</a></p>
      </div> 
    </div>
    </>
  )
}
