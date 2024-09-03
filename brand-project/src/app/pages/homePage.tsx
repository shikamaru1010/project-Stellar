import NavBar from '../components/nav/navBar'
import Hero from '../layout/hero'
import ProductList from '../components/product/productList'
import { useEffect, useState } from 'react'
import { AppProduct } from '../types/product'
import { productData } from '../api/sampleData'
import CategoryList from '../layout/category/categoryList'
import { categoryProduct } from '../api/sampleData1'
import About from '../layout/about/about'
import Footer from '../components/footer/footer'
export default function HomePage() {
    const[products,setProducts] = useState<AppProduct[]>([])
    
    useEffect(() => {
            setProducts(productData);
    },[])
    
  return (
    <div>
      <NavBar />
      <Hero />
      <ProductList products={products}/>
      <CategoryList categoryProducts={categoryProduct}/>
      <About/>
      <Footer />
    </div>
  )
}
