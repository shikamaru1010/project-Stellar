import Hero from "../../features/dashboard/hero";
import ProductList from "../components/product/productList";
import NavBar from "./nav/navBar";
import CategoryList from "../components/category/categoryList"
import About from '../components/about/about';
import Footer from '../layout/footer/footer';
import Hero2 from '../../features/dashboard/hero2';

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
    </>
  )
}

export default App
