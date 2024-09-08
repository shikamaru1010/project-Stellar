
import { NavLink, useNavigate } from "react-router-dom"
import "./pages.css"

export default function homePage() {
    const navigate = useNavigate();
  return (
    <div className='spa-div-content'>
        <div className='spa-elements'>
            <div className="spa-element">
                <h1>Step into the Stellar Universe</h1>
                <h2>Redefine Your Style with Exclusive Streetwear</h2>
                <button onClick={() => navigate('/home')}>
                <p>Get started &#x27A1;</p>
                </button>
            </div>
            <div className="spa-element">
                <img src='/images/night.png' alt='model pozira' />
            </div>
        
        </div>
    </div>
  )
}
