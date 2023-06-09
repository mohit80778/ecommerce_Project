import Cart from "../Utils/Cart";
const Home=()=>
{
  return(
    <div>
      <Cart/>
    </div>
  )
}

export default Home;



// // import React,{useEffect} from "react";
// // import useAPI from "../Utils/useApi";

// // const Home =() => {
// //   const {data, getProducts} = useAPI;
// //   useEffect(()=> {
// //     getProducts("/products");
// //   },[]);

// //   return(
// //     <div>
// //       <img src="" alt="" />
      
// //       <div className="flex justify-between">
// //         {data.map((item) => {
// //           return (
// //             <div className="max-w-[400px]">
// //               <img src={item.image} className="h-40 w-60 " alt="" />
// //                 <h2> {item.title}</h2>
// //                 <p>{item.price}</p>
// //                 <div>
// //                   <button>Add To Cart</button>
// //                 </div>
// //             </div>
// //           );
// //         })}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Home;

// // import React from "react";
// // // import Cart from "../Utils/Cart";
// // // import useAPI from "../Utils/useApi";
// // const Home = () => {
//   // const { Cart } = useAPI("https://fakestoreapi.com/products");
// //   return (
// //     <div>
// //       <pre></pre>
// //       {/* <Cart/> */}
// //     </div>
// //   );
// // };

// // export default Home;

// import React from "react";
// // import { useNavigate } from "react-router-dom";
// import Cart from "../Utils/Cart";
// // import useApi from "../Utils/useApi";

// const Home = () => {
//     // const navigate = useNavigate();
//     // const {data,error,getProducts} = useApi();
//     // console.log(data);
//     // useEffect(() =>{
//     //     getProducts("/Products");
//     // },[]);

//     // const handleProductClick = (id) => {
//     //     navigate(`product/${id}`);
//     // }
// //     return(
// // //         <div className="w-full">
// // // <img src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonSmallBusinessDay/Jupiter21/Spotlight/eng_pc11.jpg" alt="/"className="h-25"/>
    
// // // <div className="flex flex-wrap justify-between mt-20 w-[90%] mx-auto">
// // //     {data.map((item) =>{
// // //         return (

          
// // //            
// // //         );
// // //     })}
// // // </div>

// // </div>
// //     );
// // };
// return(
//   <div>
//     <Cart/>
//   </div>
// )
// }
// export default Home;