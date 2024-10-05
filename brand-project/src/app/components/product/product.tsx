import "./product.css";
import { AppProduct } from "../../types/product";

type Props = {
  product: AppProduct;
}

export default function Product({product}: Props) {
  return (
   <>
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
   </>
  )
}

