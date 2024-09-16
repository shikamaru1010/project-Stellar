
import { useNavigate } from "react-router-dom"
import "./pages.css"

export default function HomePage() {
    const navigate = useNavigate();
  return (
    <div className='spa-div-content'>
        <div className='spa-elements'>
            <div className="spa-element">
                <h1>Step into the <span>Stellarwear</span> Universe</h1>
                <h2>redefine your style with exclusive streetwear</h2>
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
