import Category from "./categoryCard";

export default function categoryList(props:any) {
  return (
    
    <div>
      <div className="category-list">
       {props.categoryProducts.map((categoryProduct: any) =>(
        <Category key={categoryProduct.id}categoryProduct={categoryProduct} />
       ))}
      </div>
    </div>
  )
}
