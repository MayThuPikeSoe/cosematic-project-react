/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { CartContext } from "../pages/AddToCart";
// import PropTypes from "prop-types";
// import productDetail from "../js/productDetail";
// import productDetail from "../js/productDetail";
// const Cart = ({ currentProduct }) => {
//   const [count, setcount] = useState(1);
//   // const [isVisible, setIsVisible] = useState(true);

//   const increment = () => {
//     setcount(count + 1);
//     console.log(setcount(count + 1));
//   };
//   const decrement = () => {
//     console.log(setcount(count - 1));
//     if (count <= 1) {
//       setcount(1);
//     } else {
//       setcount(count - 1);
//     }
//   };
//   // const deleteRow = () => {
//   //   setIsVisible(false);
//   // };

//   console.log(productDetail.filter((product) => product.id == currentProduct));
//   console.log(currentProduct);

//   return (
//     <>
//       <div className=" w-full h-[500px] flex justify-center items-center">
//         <div className="flex mb-5 mx-10  border-b-2 p-4 items-center content mt-32">
//           <div className="w-30">
//             <img
//               src={currentProduct.image}
//               className="h-20 w-20"
//               alt="Product"
//             />
//           </div>
//           <div className="w-[260px]">
//             <div className="w-[200px] text-center border-gray-300 h-10 border-2 flex justify-center items-center mx-4">
//               <button className="w-32 text-2xl" onClick={decrement}>
//                 -
//               </button>
//               <span className="text-lg"> {count}</span>
//               <button className="w-32 text-xl" onClick={increment}>
//                 +
//               </button>
//             </div>
//           </div>

//           <div className="w-[180px]">
//             <button className="w-16 h-10 bg-[#386F81] text-white cursor-pointer">
//               更新
//             </button>
//           </div>
//           {/* <div className="" onClick={deleteRow}>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               fill="#000000"
//               viewBox="0 0 256 256"
//             >
//               <path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1-8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path>
//             </svg>
//           </div> */}
//           {/* total */}
//           <div className="w-28 flex justify-center items-center">
//             {`$ ${currentProduct.price * count}`}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

export default function Cart() {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    
  } = useContext(CartContext);
  console.log("cartitems", cartItems);
  // const [count, setcount] = useState(1);

  // const [isVisible, setIsVisible] = useState(true);

  // const increment = () => {
  //   setcount(count + 1);
  // };
  // const decrement = () => {
  //   console.log(setcount(count - 1));
  //   if (count <= 1) {
  //     setcount(1);
  //   } else {
  //     setcount(count - 1);
  // //   }
  // };

  // const deleteRow = () => {
  //   setCart(cart)

  // };

  return (
    <div className=" w-full h-auto flex justify-center items-center mt-[100px] ">
      <div className="flex flex-col gap-4 ">
        {cartItems.map((item) => (
          <div
            className="flex mb-5  w-full border-b-2 p-4 items-center content aos-animate aos-init"
            data-aos="fade-up"
            data-aos-duration="500"
            key={item.id}
          >
            <div className="flex gap-4">
              <img src={item.image} className="rounded-md h-24" />
            </div>
            <div className="flex gap-4">
              <button
                className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                onClick={() => {
                  addToCart(item);
                }}
              >
                +
              </button>
              <p>{item.quantity}</p>
              <button
                className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                onClick={() => {
                  removeFromCart(item);
                }}
              >
                -
              </button>
            </div>
            {/* <div
                className=""
                onClick={() => {
                  clearCart(item);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#000000"
                  viewBox="0 0 256 256"
                >
                  <path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1-8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path>
                </svg>
              </div> */}

            {cartItems ? (
              <div className="flex flex-col justify-between items-center ml-8">
                <button
                  className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                  onClick={() => {
                    clearCart(item);
                  }}
                >
                  Clear cart
                </button>
              </div>
            ) : (
              <h1 className="text-lg font-bold">Your cart is empty</h1>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
