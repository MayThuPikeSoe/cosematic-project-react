import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const {productId}=useParams();
    const currentProduct=((product)=>(product.id === productId))
  return (
    <div>
        <div className="flex"> 
            <img src={currentProduct.img} alt="" />
        </div>
        
    </div>
  )
}

export default ProductDetail