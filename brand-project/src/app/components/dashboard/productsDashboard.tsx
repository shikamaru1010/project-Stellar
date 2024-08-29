import { Dropdown, DropdownMenu } from 'semantic-ui-react';
import DropDown from "../../layout/dropMenu"; 
import { ProductsAll } from '../../types/products';
import Filters from '../filter/filter'
import "./productDash.css";
import ProductSample from './productSample';

interface ProductProps{
  products: ProductsAll[];
}
export default function productsDashboard({products}:ProductProps) {
  return (
    <>

    <h1 style={{fontSize: '5rem',textAlign: 'center',color: 'white'}}>{products.length} products
    <DropDown />
    </h1>
    <div className='productsDashboard'>
      <Filters/>
      <div className='productsList'>
        {products.map((product) =>(
          <ProductSample key={product.id} product={product} />
        ))}
      </div>
    </div>
    </>
  )
}
