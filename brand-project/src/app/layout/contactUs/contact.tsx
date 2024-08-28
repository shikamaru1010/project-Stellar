import NavBar from '../../components/nav/navBar';
import { GoogleMap,LoadScript,Marker } from '@react-google-maps/api';
import "./contact.css";

const containerStyle = {
    width: '100%',
    height: '83vh',
};
const location = {
    lat: 44.786325,
    lng: 20.516553 
};
export default function contact() {
  return (
    <div>
      <NavBar />
      <h1>Location</h1>
      <LoadScript googleMapsApiKey='AIzaSyBBFPB_Zov7vCYe_r9ycO8IuQtPt33IQfQ'>
        <GoogleMap mapContainerStyle={containerStyle}
        center={location}
        zoom={15} >
        
        <Marker position={location} />
        </GoogleMap>
      </LoadScript>
    </div>
  )
}
