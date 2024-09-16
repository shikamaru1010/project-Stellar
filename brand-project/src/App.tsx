import { Outlet, useLocation } from "react-router-dom";
import HomePage from "./app/pages/homePage";
import ScrollUp from "./app/components/scrollToTop";

import SignUp from "./app/layout/signUp/signUp";
import UserInfo from "./app/layout/userinfo/userInfo";
import { User } from "./app/types/user";
// da li sam u linijama 30-37 uradio dve iste funkcionalnosti

/* {location.pathname === "/" ? <HomePage /> : (
      <>  
      <Outlet />
      </>
    )}
    <ScrollUp />*/
    const user: User = {
      firstName: 'Ratko',
      lastName: 'Sisovic',
      email: 'ralesisko@gmail.com',
      adress: {
        street: 'Sisovici 7',
        city: 'Cajetina',
        country: 'Serbia',
      }
    };
function App() {


  const location = useLocation();
  return (
    <>
   <UserInfo  user={user}/>
    
    </>
  )
}

export default App
