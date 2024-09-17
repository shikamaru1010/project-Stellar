
import { useState } from "react";
import { ProductsAll } from "../../types/products";
import DropDown from "../dropMenu"; 
import FiltersMenu from '../filter/filtersMenu'
import "./productDash.css";
import ProductSample from './productSample';

interface ProductProps{
  products: ProductsAll[];
}
export default function ProductsDashboard({products}:ProductProps) {

  const[filteredProducts, setFilteredProducts] = useState<ProductsAll[]>(products);

  const handleFilterChange = (filters: {size: string;color: string;priceRange: {min: number,max: number}}) => {
    const {size,color,priceRange} = filters;

  const updatedProducts = products.filter(
    product => {
      const withinPriceRange = product.price >= priceRange.min && product.price <= priceRange.max;
      const matchesSize = size ? product.size === size: true;
      const matchesColor = color ? product.color === color: true;
      return withinPriceRange && matchesSize && matchesColor;
    });
  
  setFilteredProducts(updatedProducts);
}
  return (
    <>

    <h1 style={{fontSize: '5rem',textAlign: 'center',color: 'white'}}>{filteredProducts.length} products
    <DropDown />
    </h1>
    <div className='productsDashboard'>
      <FiltersMenu onFIlterChange={handleFilterChange}/>
      <div className='productsList'>
        {filteredProducts.map((product) =>(
          <ProductSample key={product.id} product={product} />
        ))}
      </div>
    </div>
    </>
  )
}
