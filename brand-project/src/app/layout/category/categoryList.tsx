import { useState } from "react";
import Category from "./categoryCard";
import { Button } from "semantic-ui-react";
import { categoryProduct, newArrivals } from "../../api/sampleData1";
export default function categoryList(props:any) {
  const[products,setProducts] = useState(categoryProduct.slice(0,4));
  
  const showTrending = () => {
    setProducts(categoryProduct.slice(0,4));
  };

  const showNewArrivals = () => {
    setProducts(newArrivals.slice(0,4));
  };

  return (
    <div>
      <h4 style={{marginTop: '8rem',marginBottom: '4rem',textAlign:'center',color:'white'}}>Shop our hottest styles</h4>
      <div className="category-btns">
        <p><Button content="TRENDING" className="category-btn" onClick={showTrending} style={{backgroundColor: 'black',
          color: 'white'
        }}/></p>
        <p><Button style={{backgroundColor: 'black',
          color: 'white'
        }} content="NEW ARRIVALS" className="category-btn" onClick={showNewArrivals}/></p>
      </div>
      <div className="category-list">
       {products.map((categoryProduct: any) =>(
        <Category key={categoryProduct.id}categoryProduct={categoryProduct} />
       ))}
      </div>
      <Button style={{display: 'block',margin: '6rem auto 8rem auto',color: 'black',borderRadius: '2rem',}}><h1 style={{padding: '0.6rem 1.5rem'}}>Best Sellers</h1></Button>
    </div>
  )
}
