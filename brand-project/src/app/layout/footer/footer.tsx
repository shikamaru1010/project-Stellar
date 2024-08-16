import './footer.css'
export default function footer() {
  return (
    <div className='footer'>
      <div><img src='/logo.png' alt='logo'/>
      <p>We empower individuals to express their unique identities boldly.</p>
      </div>
      <div className='footer-list'>
        <div className='contact'><img src="/maps-and-flags.png" />
        <p>Gusinjska 2, Beograd 11000</p></div>
        <div className='contact'><img src="/phone-call.png" />
        <p>0645771771</p></div>
        <div className='contact'><img src="/envelope.png" />
        <p>interstellar@gmail.com</p></div>
      </div>
      <div className='footer-links'>
        
        <table>
        <tr><p><a>home</a></p></tr>
        <tr><p><a>man</a></p></tr>
        <tr><p><a>women</a></p></tr>
        <tr><p><a>kids</a></p></tr>
        <tr><p><a>contact</a></p></tr>
        </table>
      </div>
    </div>
  )
}
