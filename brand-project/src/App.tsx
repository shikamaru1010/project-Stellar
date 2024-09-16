import { Outlet, useLocation } from "react-router-dom";
import HomePage from "./app/pages/homePage";
import ScrollUp from "./app/components/scrollToTop";

import SignUp from "./app/layout/signUp/signUp";
import UserInfo from "./app/layout/userinfo/userInfo";
import { User } from "./app/types/user";
// da li sam u linijama 30-37 uradio dve iste funkcionalnosti

/* */
   
function App() {


  const location = useLocation();
  return (
    <>
    {location.pathname === "/" ? <HomePage /> : (
      <>  
      <Outlet />
      </>
    )}
    <ScrollUp />    
    </>
  )
}

export default App
