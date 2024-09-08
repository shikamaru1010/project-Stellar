import { productData } from "./app/api/sampleData";

import { useEffect, useState } from "react";
import { AppProduct } from "./app/types/product";

import { Outlet, useLocation } from "react-router-dom";
import HomePage from "./app/pages/homePage";
import ScrollUp from "./app/components/scrollToTop";
// da li sam u linijama 30-37 uradio dve iste funkcionalnosti
function App() {

  const[products,setProducts] = useState<AppProduct[]>([])

  useEffect(() => {
    setProducts(productData);
  },[])

  const location = useLocation();
  return (
    <>
    <ScrollUp />
    {location.pathname === "/" ? <HomePage /> : (
      <>  
      <Outlet />
      </>
    )}
    </>
  )
}

export default App
