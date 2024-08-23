import './footer.css'
export default function footer() {
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
        <p><a>Home</a></p>
        <p><a>Man</a></p>
        <p><a>Woman</a></p>
        <p><a>Kids</a></p>
        <p><a>Contact</a></p>
      </div>
    </div>
  )
}
