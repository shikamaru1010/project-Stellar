import { ItemHeader } from "semantic-ui-react";
import "./product.css";
import { AppProduct } from "../../types/product";

type Props = {
  product: AppProduct;
}

export default function Product({product}: Props) {
  return (
  <div>

    <div className="wrapper" >
      <div className="container" style={{
        backgroundImage: `url(${product.hostUrl})`,
        backgroundSize: 'cover'
      }}>
        <div className="top"></div>
        <div className="bottom">
          <div className="left">
            <div className="details">
              <h1 ><ItemHeader>
                {product.title}</ItemHeader></h1>
              <p style={{color: 'black'}} >{product.price}$</p>
            </div>
            <div className="buy"><i className="material-icons"><img src="../../../public/shopping-cart-add.png" style={{marginTop: '3.2rem'}}></img></i></div>
          </div>
          <div className="right">
            <div className="done"><i className="material-icons">done</i></div>
            <div className="details">
              <h1>Chair</h1>
              <p>Added to your cart</p>
            </div>
            <div className="remove"><i className="material-icons">clear</i></div>
          </div>
        </div>
      </div>
      <div className="inside">
        <div className="icon"><i className="material-icons"><img src="../../../public/info.png"></img></i></div>
        <div className="contents">
          <table>
           <tbody>
            <tr>
              <td>Info</td>
              <td>{product.description}</td>
            </tr>
           
           </tbody> 
            
          </table>
        </div>
      </div>
    </div>
  </div>
  )
}

