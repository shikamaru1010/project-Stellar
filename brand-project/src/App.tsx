import { Outlet, useLocation } from "react-router-dom";
import HomePage from "./app/pages/homePage";
import ScrollUp from "./app/components/scrollToTop";


// da li sam u linijama 30-37 uradio dve iste funkcionalnosti

/* 

*/
   
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
