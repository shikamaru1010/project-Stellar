import "./product.css";
import "./productList.js";

interface ImageData{
    id: string;
    url: string;
    alt: string;
}
export default function Product() {
  return (
    <div className="wrapper" >
    <div className="container">
      <div className="top"></div>
      <div className="bottom">
        <div className="left">
          <div className="details">
            <h1>Casual outfit</h1>
            <p style={{color: 'black'}}>£250</p>
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
          <tr>
            <th>Available size</th>
            <th>Height</th>
          </tr>
        </table>
      </div>
    </div>
  </div>
  )
}
