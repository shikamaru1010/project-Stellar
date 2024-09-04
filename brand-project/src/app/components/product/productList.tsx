import Product from "./product";
import { AppProduct } from "../../types/product";
import { Link } from "react-router-dom";

type Props = {
  products: AppProduct[];
}
export default function ProductList({products}:Props) 

{
  return (
    <div>
      <div className="container heading">
      <h2 style={{color: 'white'}}><b>HOT ITEMS</b></h2>
      <h4 style={{margin: '2rem auto 6rem auto'}}><Link to='/collection' style={{color: 'white'}}>View all</Link></h4>
      </div>
      <div  className="container product-list">
        {products.slice(0,3).map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
        
    </div>
  )
}
