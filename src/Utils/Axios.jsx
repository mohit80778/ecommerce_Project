// import { useState, useEffect } from "react";
// import axios from "axios";

// const Axios = () => {
//   const [prodData, setProdData] = useState([]);
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     axios.get("https://fakestoreapi.com/products/").then((response) => {
//       setProdData(response.data);
//     });
//   }, []);

//   // const addToCart = (productId) => {
//   //   const productToAdd = prodData.find((data) => data.id === productId);
//   //   setCartItems((prevItems) => [...prevItems, productToAdd]);
//   // };

//   const removeFromCart = (productId) => {
//     setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
//   };

//   return (
//     <div>
//       <header className="flex justify-end">
//         {/* <button className=" m-2 border-2 border-green-600 hover:bg-orange-500">
//           <img src="https://th.bing.com/th/id/R.a4186862e861dac8226a0c9819ad7e08?rik=aupYfq3OS0KZEA&riu=http%3a%2f%2fi.huffpost.com%2fgen%2f1705480%2fimages%2fo-AMAZON-LOGO-facebook.jpg&ehk=gMoVkhF4upJ146A4T1spvDAqJiYbD0RrUCMU41zwiy4%3d&risl=&pid=ImgRaw&r=0" className="h-10 w-15" alt="" />
//           Cart ({cartItems.length})</button> */}
//       </header>
//       <div className="flex grid grid-cols-4">
//         {prodData.map((data) => (
//           <div key={data.id}>
//             <p>
//               {/* <img
//                 className="border-1 p-1 cursor-duration-100  hover:bg-slate-500 h-40 w-50"
//                 src={data.image}
//                 alt="img"
//               /> */}
//             </p>
//             {/* <div className="border-2 p-2 hover:border-blue-300 m-2 cursor-pointer duration-100"> */}
//               {/* <p className="hover:bg-red-300">{data.id}</p>
//               <p className="hover:bg-yellow-600">{data.title}</p>
//               <p className="hover:bg-green-400">${data.price}</p>
//               <p className="hover:bg-slate-400">-{data.category}</p> */}
// {/* 
//               <span className="flex grid-cols-4">
//                 <button
//                   className="border-2 mt-2 text-white hover:bg-green-400 cursor-pointer duration-100 border-sky-700 bg-green-600 rounded-xl px-2 py-1"
//                   onClick={() => addToCart(data.id)}
//                 >
//                   Add to Cart
//                 </button>
//                 <p className="pr-24"></p>
//                 <button
//                   className="border-2 mt-2 text-white hover:bg-red-400 rounded-xl pl-4 pr-4 py-1 border-sky-700 bg-red-700"
//                   onClick={() => removeFromCart(data.id)}
//                 >
//                   Delete
//                 </button>
               
               
//               </span> */}
//               {/* {cartItems.filter((item) => item.id === data.id).length > 0 && (
//                 <p>Count: {cartItems.filter((item) => item.id === data.id).length}</p>
//               )} */}
//             </div>
//           // </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Axios;
