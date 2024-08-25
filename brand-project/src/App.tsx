import Hero from "./features/hero";
import ProductList from "./app/components/product/productList";
import NavBar from "./app/components/nav/navBar";
import CategoryList from "./app/layout/category/categoryList"
import About from './app/layout/about/about';
import Footer from './app/components/footer/footer';
import { productData } from "./app/api/sampleData";
import { categoryProduct } from "./app/api/sampleData1";
import { useEffect, useState } from "react";
import { AppProduct } from "./app/types/product";
/*import Hero2 from '../../features/dashboard/hero2';
import ProductsDashboard from "../components/productsDash/productsDashboard";*/
function App() {
  // sjebo Props types
  const[products,setProducts] = useState<AppProduct[]>([])

  useEffect(() => {
    setProducts(productData);
  },[])
  return (
    <>
      <NavBar />
      <Hero />
      <ProductList products={products}/>
      <CategoryList categoryProducts={categoryProduct}/>
      <About />
      <Footer />
    </>
    /*<>
    <NavBar />
    <Hero2 />
    <ProductsDashboard />
    <Footer />
    </>*/
  )
}

export default App
