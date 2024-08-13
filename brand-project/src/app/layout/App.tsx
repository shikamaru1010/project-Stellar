import Hero from "../../features/dashboard/hero";
import ProductList from "../components/product/productList";
import NavBar from "./nav/navBar";
import Category from "../components/category/categoryList"

function App() {
  
  return (
    <>
      <NavBar />
      <Hero />
      <h2 style={{marginTop: '8rem',marginBottom: '0',paddingLeft: '13rem'}}><b>HOT ITEMS</b></h2>
      <h4 style={{marginTop: '2rem',paddingLeft:"13rem"}}><a>View all</a></h4>
      <ProductList />
      <Category />
    </>
  )
}

export default App
