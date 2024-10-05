import "../product/product.css";
import { ProductsAll } from "../../types/products";


interface ProductProps  {
  product: ProductsAll;
}

export default function ProductSample({product}: ProductProps) {
  return (
  <div>
    <div className="product-desc">
      <div className="image-container">
      <img src={product.hostUrl} alt='streetwear white&blue colors oversized outfit ' />
      <div className="image-description">{product.description}</div>
      </div>
      <h3>{product.title}</h3>
      <div className="product-element">
      <span>{product.price}$</span>
      <img src="shopping-cart-add.png" alt='shopping cart icon'/>
      </div>
    </div>
  </div>
  )
}

