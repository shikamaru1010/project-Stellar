import Product from "./product";


export default function productList(props:any) {
  return (
    <div>
      <div className="container heading">
      <h2 style={{color: 'white'}}><b>HOT ITEMS</b></h2>
      <h4 style={{margin: '2rem auto 6rem auto'}}><a style={{color: 'white'}}>View all</a></h4>
      </div>
      <div  className="container product-list">
        {props.products.map((product: any) => (
          <Product product={product} />
        ))}
      </div>
        
    </div>
  )
}
