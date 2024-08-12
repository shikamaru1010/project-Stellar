import Hero from "../../features/dashboard/hero";
import Product from "../components/product";
import NavBar from "./nav/navBar";


function App() {
  
  return (
    <>
      <NavBar />
      <Hero />
      <h2 style={{marginTop: '8rem',marginBottom: '0'}}><b>HOT ITEMS</b></h2>
      <h4 style={{marginTop: '2rem',}}><a>View all</a></h4>
      <Product />
    </>
  )
}

export default App
