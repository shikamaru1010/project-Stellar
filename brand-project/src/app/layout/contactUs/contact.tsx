import NavBar from '../../components/nav/navBar';
import { GoogleMap,LoadScript,Marker } from '@react-google-maps/api';
import "./contact.css";
import { Button, Form, Header, Segment } from 'semantic-ui-react';
import Footer from '../../components/footer/footer';

const containerStyle = {
    width: '100%',
    height: '500px',
    margin: '0 auto',
    border: '2px solid',
    borderRadius: '5px'
};
const location = {
    lat: 44.786325,
    lng: 20.516553 
};
export default function contact() {
  return (
    <div  style={{backgroundColor: 'black'}}>
      <NavBar />
      <div className='ui container'>

        <h1 style={{marginLeft: '',fontSize: '4.6rem',color: 'white'}}>Location</h1>
        <LoadScript googleMapsApiKey='AIzaSyBBFPB_Zov7vCYe_r9ycO8IuQtPt33IQfQ'>
          <GoogleMap mapContainerStyle={containerStyle}
          center={location}
          zoom={15} >
          
          <Marker position={location} />
          </GoogleMap>
        </LoadScript>
        <h2 style={{textAlign: 'center',color: 'white',marginBottom: '8rem'}}>Gusinjska 2, Belgrade</h2>
        <h1 style={{color: 'white',marginBottom: '4rem',marginTop: '0'}}>Contact Us</h1>
        <h3 style={{color: 'white',marginTop: '0',marginBottom: '8rem'}}>In order to provide you with the best user experience, we are available for all your questions by phone, live chat or email - by filling out an online form.
        </h3>
        <h2 style={{color:'white',marginTop: '0',marginBottom: '4rem'}}>Phone number</h2>
        <h3 style={{color: 'white',marginTop: '0',marginBottom:'8rem'}}>066424579</h3>
        <Segment style={{backgroundColor: 'black'}}>
          <Header content="Online Form" style={{color: 'white'}} />
          <Form>
            <Form.Field>
              <input type="text" placeholder='First and Last Name'/>
            </Form.Field>
            <Form.Field>
              <input type="text" placeholder='E-mail'/>
            </Form.Field>
            <Form.Field>
              <input type="text" placeholder='Phone Number'/>
            </Form.Field>
            <Form.Field>
              <input type="text" placeholder='Street'/>
            </Form.Field>
            <textarea id='description' name='description' rows={6}
            placeholder='Enter a detailed description here...'>
          
            </textarea>

            <Button type="submit"  positive content='Send' style={{marginTop: '4rem',marginBottom: '8rem'}} />
          </Form>
        </Segment>
        <div className='drustvene-mreze' style={{backgroundColor: 'black'}}>
            <div className='drustvene-mreze-elementi'>
              <img src='/instagram.png'></img>
              <h3>stellarwear</h3>
            </div>
            <div className='drustvene-mreze-elementi'>
              <img src='/tik-tok.png'></img>
              <h3>stellarwear</h3>
            </div>
            <div className='drustvene-mreze-elementi'>
              <img src='/twitter.png'></img>
              <h3>stellarwear</h3>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
