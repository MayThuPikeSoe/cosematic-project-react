import { useParams } from "react-router-dom";
import productDetail from "../js/productDetail.js";
import Cart from "../components/Cart.jsx";

const ProductDetail = () => {
  // const [count, setcount] = useState(1);
  // const [isVisible, setIsVisible] = useState(true);

  // const increment = () => {
  //   setcount(count + 1);
  //   console.log(setcount(count + 1));
  // };
  // const decrement = () => {
  //   console.log(setcount(count - 1));
  //   if (count <= 1) {
  //     setcount(1);
  //   } else {
  //     setcount(count - 1);
  //   }
  // };
  // const deleteRow = () => {
  //   setIsVisible(false);
  // };

  // const [order, setOrder] = useState([
  //   {
  //     title: "",
  //     quantity: 1,
  //   },
  // ]);

  // setOrder(prevOrder => ([...prevOrder] , newOrder));
  // const carts = [
  //   {
  //     id: 1,
  //     product: productDetail[0],
  //     quantity: 1,
  //     price: 44,
  //   },
  //   {
  //     id: 2,
  //     product: productDetail[1],
  //     quantity: 1,
  //     price: 50,
  //   },
  //   {
  //     id: 3,
  //     product: productDetail[2],
  //     quantity: 1,
  //     price: 80,
  //   },
  //   {
  //     id: 4,
  //     product: productDetail[3],
  //     quantity: 1,
  //     price: 60,
  //   },
  // ];
  // console.log("cart", carts[0].product.image);

  const { productId } = useParams();
  console.log(productId);

  const currentProduct = productDetail.find(
    (product) => product.id === parseInt(productId)
  );
  console.log(productDetail);

  // console.log(currentProduct);

  // setOrder()
  // navigate('/shop/cart')
  // let cart=[]
  //   const addToCart= ((cart)=>{
  // cart.push({...categories[cart]})
  // displayCart();
  //   })
  // const displayCart =((cart) =>{
  //   let j=0;
  //  if(cart.length >0){
  //   document.querySelector(".content").innerHTML=cart.map((item)=>{
  //     return (

  //     )

  //   })
  //  }
  // })
  return (
    // <div className="flex justify-center items-center  mt-40 mb-9">
    //   <div className="flex  h-[170px] w-[700px] border-black border px-4">
    //   <div className="flex justify-center items-center">
    //     <img
    //       src={currentProduct.image}
    //       className="w-[100px] h-[100px] block mx-auto "
    //       alt={currentProduct.name} // Provide an alt text based on product name
    //     />
    //   </div>
    //   </div>

    // </div>

    <Cart currentProduct={currentProduct} />
  );
};

export default ProductDetail;
