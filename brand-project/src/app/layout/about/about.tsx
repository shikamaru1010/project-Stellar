import './about.css';
export default function about() {
  return (
    <div>
      <h1 style={{display:'block',marginBottom:'6rem',textAlign:'center',color: 'white'}}>About us</h1>
      <div className="about">
        <div>

          <img className='about-photo' src='/hotstuff1.jpg'   alt="about-photo"/>
          
        </div>
        <div className='about-elements'>

          <p className='paragraphs'>
          Welcome to <span>Stellar Streetwear</span> , a brand born out of passion, creativity, and friendship.
          </p>
          <p className='paragraphs'>
          At <span>Stellar</span>, we believe that clothing is more than just fabric - it's a form of self-expression, a statement, and a way to connect with like-minded individuals.
          </p>
          <p className='paragraphs'>
          Our designs are inspired by the vibrant culture of the streets, the energy of urban life, and the individuality of those who wear our pieces.
          </p >
          <p className='paragraphs'>
          Our brand is not just about fashion; it's about community. We aim to build a network of individuals who share our vision and values, fostering a sense of belonging and mutual support. 
          </p>
          <p className='paragraphs'>
          We invite you to join us on this exciting journey, to be part of a movement that celebrates authenticity, creativity, and the spirit of the streets.
          </p>
          <p className='paragraphs'>
          Thank you for being a part of <span>Stellar</span>. Together, let's make a statement and redefine streetwear.
          </p>
        </div>
      </div>
    </div>
  )
}
