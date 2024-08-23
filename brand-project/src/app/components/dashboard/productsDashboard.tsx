import Filters from '../filter/filter'
import Product from '../product/product'
import "./productDash.css";

export default function productsDashboard() {
  return (
    <div className='productsDashboard'>
      <Filters/>
      <div className='productsList'>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  )
}
