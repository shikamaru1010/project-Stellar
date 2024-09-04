import { useEffect, useState } from 'react'
import NavBar from '../components/nav/navBar'
import Hero2 from '../layout/hero2'
import ProductsDashboard from '../components/dashboard/productsDashboard'
import Footer from '../components/footer/footer'
import { AppProduct } from '../types/product'
import { productData } from '../api/sampleData'
import { ProductsAll, productsData } from '../types/products'

export default function CollectionPage() {
    const[products,setProducts] = useState<ProductsAll[]>([])
    useEffect(() =>
    setProducts(productData),([]));
  return (
    <div>
      <NavBar />
      <Hero2 />
      <ProductsDashboard products={productsData} />
      <Footer />
      
    </div>
  )
}
