import Hero from "../../features/dashboard/hero";
import ProductList from "../components/product/productList";
import NavBar from "../components/nav/navBar";
import CategoryList from "./category/categoryList"
import About from './about/about';
import Footer from '../components/footer/footer';
import Hero2 from '../../features/dashboard/hero2';
import ProductsDashboard from "../components/productsDash/productsDashboard";
function App() {
  
  return (
    /*<>
      <NavBar />
      <Hero />
      <ProductList />
      <CategoryList />
      <About />
      <Footer />
    </>*/
    <>
    <NavBar />
    <Hero2 />
    <ProductsDashboard />
    
    </>
  )
}

export default App
