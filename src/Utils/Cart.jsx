import { useEffect } from 'react';
import useApi from './useApi';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();
  const { data, error, getProducts } = useApi();

  useEffect(() => {
    getProducts("/products");
  }, []);

  const handleClick = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <div className="grid grid-cols-8 bg-yellow-100">
      {data.map((item) => (
        <div
          key={item.id}
          className="col-span-2 bg-white mx-4 my-4 h-96 border-2  border-slate-600 hover:scale-105"
        >
          <div className="flex flex-col h-[200px]">
            <div className="flex flex-col items-center">
              <img
                src={item.image}
                alt="product item"
                className="h-36 m-2"
                onClick={() => handleClick(item.id)}
              />
            </div>
            <div>
              <p className="w-full mx-2 my-2">
                <span className="text-green text-lg font-bold text-green-500">Name: </span>
                <span className="text-lg font-medium">{item.title}</span>
              </p>
              <p className="w-full mx-2 my-2">
                <span className="text-green text-lg font-bold text-green-500">Cost: </span>
                <span className="text-lg font-medium">{item.price} $</span>
              </p>
              <p className="w-full mx-2 my-2">
                <span className="text-green text-lg font-bold text-green-500">Category: </span>
                <span className="text-lg font-medium">{item.category}</span>
              </p>
            </div>
          </div>
          <div>
            <div className="h-60 grid grid-cols-2 m-2 gap-4 content-center ...">
              <button className="w-25 h-10 px-4 py-1 rounded-md my-3 mx-2 bg-indigo-600 text-white hover:bg-green-500 opacity-100">
                Add to cart
              </button>
              <button className="w-25 h-10 px-4 py-1 rounded-md my-3 mx-2 bg-indigo-600 text-white hover:bg-green-500 opacity-100">
                View cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;



// import {useEffect} from 'react';
// import useApi from './useApi';
// import { useNavigate } from 'react-router-dom';

// const Cart = () => {


//   const navigate = useNavigate();
//     const {data,error,getProducts}=useApi();
//    console.log(data);

//   useEffect(()=>{
//     getProducts("/products");
    
//   },[]);

//   const handleClick = (id) => {
//     navigate(`/products/${id}`);
//   };
//   // const handleChange=(id)=>{
//   //   navigate(`products/${id}`);
//   // }
 
//   return (
//     <div className="grid grid-cols-6 bg-orange-100 ">
//       {data.map((item) => {
//         return (
//           <div key={item.id} className="col-span-2 bg-white mx-4 my-4 h-96 rounded-3x1  border-2 rounded-xl border-black hover:scale-105" >
//             <div className="flex flex-col h-[200px]" >
//               <div className="flex flex-col items-center ">
//                 <img src={item.image} alt="product item" className="h-28 " onClick={() => handleClick(item.id)} />

//               </div>
//               <div>
//                 <p className="w-full mx-2 my-2">
//                   <span className="text-green text-lg font-bold text-green-500">Name: </span>
//                   <span className="text-lg font-medium">{item.title}</span>
//                 </p>
//                 <p className="w-full mx-2 my-2">
//                   <span className="text-green text-lg font-bold  text-green-500">Cost: </span>
//                   <span className="text-lg font-medium">{item.price +" $"}</span>
//                 </p>
               
//                 <p className="w-full mx-2 my-2">
//                   <span className="text-green text-lg font-bold  text-green-500">
//                    Category:{" "}
//                   </span>
//                   <span className="text-lg font-medium ">
//                     {item.category}
//                   </span>
//                 </p>
//               </div>
//             </div>
//             <div>
//               <div className="h-56  grid grid-cols-2 gap-4 content-center ...">
//               <button className='"w-25 h-10 px-4 py-1 rounded-md my-3  mx-4 bg-indigo-600 text-white hover:bg-green-500 opacity-100"'>
//                 Add to cart
//               </button>
//                <button  className='"w-25 h-10 px-4 py-1 rounded-md my-3  mx-4 bg-indigo-600 text-white hover:bg-green-500 opacity-100"'> view cart</button>
               
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default Cart;


// import React, { useEffect, useState } from "react";
// import useAPI from "./useApi";

// // const Cart = () => {
// //   const { data, getProducts } = useAPI();
// //   // const [products, setProducts] = useState([]);
// // console.log(data);
// // useEffect (()=>
// // {
// //   getProducts("/Products");
// // },[]);



//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //   //   try {
//   //   //     const response = await getProducts("/products");
//   //   //     setProducts(response);
//   //   //   } catch (error) {
//   //   //     console.log(error);
//   //   //   }
//   //   // };

//   //   fetchData();
//   // }, [getProducts]);

  
//   const { data, getProducts } = useAPI();
//   console.log(data);
//    useEffect (()=>
// {
//   getProducts("/Products");
// },[]);

//   return (
//     <div>
      
//       <div className="flex grid grid-cols-4 border-2 border-slate-600 m-2">
      
//         {data.map((product) => {
        
//           <div key={product.id} className="border-2 border-slate-700 m-4 p-2 ">
//                <p>
//               <img
//                 className="border-1 p-1 cursor-duration-100  hover:bg-slate-500 h-40 w-50"
//                 src={product.image}
//                 alt="img"
//               />
//             </p>
        
//               <p className="hover:bg-yellow-600">{product.title}</p>
//               <p className="hover:bg-green-400">${product.price}</p>
//               <p className="hover:bg-slate-400">-{product.category}</p>
//             {/* Add more product information as needed */}
            
//             <span className="flex grid-cols-4">
//                 <button
//                   className="border-2 mt-2 text-white hover:bg-green-400 cursor-pointer duration-100 border-sky-700 bg-green-600 rounded-xl px-2 py-1"
                  
//                 >
//                   Add to Cart
//                 </button>
//                 <p className="pr-24"></p>
//                 <button
//                   className="border-2 mt-2 text-white hover:bg-red-400 rounded-xl pl-4 pr-4 py-1 border-sky-700 bg-red-700"
//                 >
//                   Delete
//                 </button>
              
//               </span> 

//           </div>
//           })}
      
//       </div>
//     </div>
//   );
// };

// export default Cart;
