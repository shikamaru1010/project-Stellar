
import "./category.css";
export default function categoryCard({categoryProduct}:any) {
  return (
    <div>
      <div className="card" style={{backgroundColor: '#023E8A'}}>
        <div className="imgBX">
            <img src={categoryProduct.hostUrl} alt="" />
        </div>
        <div className="contentBx">
            <h3 className="text-titles">{categoryProduct.gender}</h3>
            <a href="#" className="buy text-text">Buy now</a>
        </div>
    </div>
    </div>
  )
}
