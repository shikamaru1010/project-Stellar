import Hero from "./features/hero";
import ProductList from "./app/components/product/productList";
import NavBar from "./app/components/nav/navBar";
import CategoryList from "./app/layout/category/categoryList"
import About from './app/layout/about/about';
import Footer from './app/components/footer/footer';
import { productData } from "./app/api/sampleData";
/*import Hero2 from '../../features/dashboard/hero2';
import ProductsDashboard from "../components/productsDash/productsDashboard";*/
function App() {
  
  return (
    <>
      <NavBar />
      <Hero />
      <ProductList products={productData}/>
      <CategoryList />
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
