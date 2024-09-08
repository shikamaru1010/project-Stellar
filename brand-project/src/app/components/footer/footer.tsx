import { Link, NavLink } from 'react-router-dom'
import './footer.css'
import ScrollUp from '../scrollToTop'
export default function Footer() {
  return (
    <div className='footer'>
      <div><img src='/logo.png' alt='logo'/>
      <p className='logo-text'>We empower individuals to express their unique identities boldly.</p>
      </div>
      <div className='footer-list'>
        <div className='contact'><img src="/maps-and-flags.png" />
        <p>Gusinjska 2, Beograd 11000</p></div>
        <div className='contact'><img src="/phone-call.png" />
        <p>0645771771</p></div>
        <div className='contact'><img src="/email.png" />
        <p>interstellar@gmail.com</p></div>
      </div>
      <div className='footer-links'>
        <p><Link to='/'>home</Link></p>
        <p><Link to='/home'>men</Link></p>
        <p><Link to='/home'>women</Link></p>
        <p><Link to='/home'>kids</Link></p>
        <p><Link to='/contact'>contact</Link></p>
      </div>
    </div>
  )
}
