import Hero from "./app/layout/hero";
import ProductList from "./app/components/product/productList";
import NavBar from "./app/components/nav/navBar";
import CategoryList from "./app/layout/category/categoryList"
import About from '../src/app/layout/about/about';
import Footer from './app/components/footer/footer';
import { productData } from "./app/api/sampleData";
import { categoryProduct } from "./app/api/sampleData1";
import { useEffect, useState } from "react";
import { AppProduct } from "./app/types/product";
import Hero2 from './app/layout/hero2';
import ProductsDashboard from "../src/app/components/dashboard/productsDashboard";
import Contact from "./app/layout/contactUs/contact";
import UserInfo from "./app/layout/userinfo/userInfo";
import { productsData } from "./app/types/products";
import { Outlet, useLocation } from "react-router-dom";
function App() {
  // sjebo Props types
  const[products,setProducts] = useState<AppProduct[]>([])

  useEffect(() => {
    setProducts(productData);
  },[])

  const location = useLocation();
  const isHomeRoute = location.pathname === '/';
  return (
    
    <>
    {isHomeRoute && <NavBar/>}
    {isHomeRoute && <Hero />}
    <Outlet />
    </>
  )
}

export default App
