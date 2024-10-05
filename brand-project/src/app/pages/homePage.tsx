
import { NavLink} from "react-router-dom"
import "./pages.css"
import { Button } from "semantic-ui-react"

export default function HomePage() {
  return (
    <div className='spa-div-content'>
        <div className='spa-elements'>
            <div className="spa-element">
                <h1>Step into the <span>Stellarwear</span> Universe</h1>
                <h2 style={{color: 'white'}}>redefine your style with exclusive streetwear</h2>
                <Button className='btn-getstarted' style={{backgroundColor: 'white'}} as={NavLink} to='/home'>
                <p>Get started &#x27A1;</p>
                </Button>
            </div>
            <div className="spa-element">
                <img src='/images/night.png' alt='model pozira' />
            </div>
        
        </div>
    </div>
  )
}
