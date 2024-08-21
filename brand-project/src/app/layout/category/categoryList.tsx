import Category from "./categoryCard";
import { Button } from "semantic-ui-react";
export default function categoryList() {
  return (
    
    <div>
      <h4 style={{marginTop: '8rem',marginBottom: '6rem',textAlign:'center',color:'white'}}>Shop our hottest styles</h4>
      <div className="category-list">
        <Category />
        <Category />
        <Category />
        <Category /> 
      </div>
      <Button style={{display: 'block',margin: '6rem auto 8rem auto',color: 'black',borderRadius: '2rem',}}><h1 style={{padding: '0.6rem 1.5rem'}}>Best Sellers</h1></Button>
    </div>
  )
}
