// // import React from "react";
// // import {useParams} from "react-router-dom";
// // import useApi from "../Utils/useApi";
// // import useEffect from "react";


// // const Product =() => {

// //     const params = useParams();
// //     console.log(params,"params");
// //     const {data, getProducts}= useApi();
// //     useEffect (()=> {
// //         getProducts(`product/${params?.id}`)
// //     } ,[params?.id]);
    
// //     return<div>Product</div>
// // }

// // export default Product;

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import useApi from "../Utils/useApi";

// const Product = () => {
//   const params = useParams();
//   const { data, getProducts } = useApi();
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   useEffect(() => {
//     getProducts(`/products/${params?.id}`);
//   }, [getProducts, params?.id]);

//   useEffect(() => {
//     if (data.length > 0) {
//       setSelectedProduct(data[0]);
//     }
//   }, [data]);

//   const handleClick = (product) => {
//     setSelectedProduct(product);
//   };

//   return (
//     <div>
//       {selectedProduct && (
//         <div>
//           <img
//             src={selectedProduct.image}
//             alt="product item"
//             onClick={() => handleClick(selectedProduct)}
//           />
//           <p>{selectedProduct.description}</p>
//           {/* Show other characteristics of the selected product */}
//           <p>Price: {selectedProduct.price}</p>
//           <p>Category: {selectedProduct.category}</p>
//           {/* Add more characteristics as needed */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Product;

// 9 jun 23
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useApi from "../Utils/useApi";

const Product = () => {
  const params = useParams();
  const { data, getProducts } = useApi();
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    getProducts(`/products/${params?.id}`);
  }, [getProducts, params?.id]);

  useEffect(() => {
    if (data) {
      setSelectedProduct(data);
    }
  }, [data]);

  return (
    <div>
      {selectedProduct && (
        <div className="App">
          <img src={selectedProduct.image}  alt="product item" className="h-[20%] hover:border-green-700 cursor-pointer duration-100"></img>
         <div>
         
          <p className=" text-lg hover:bg-blue-300">Price: {selectedProduct.price}$</p>
          <p className=" text-lg hover:bg-blue-400">Category: {selectedProduct.category}</p>
          <p className=" text-4lg hover:bg-blue-200">Description: {selectedProduct.description}</p>
         </div>
        </div>
      )}
    </div>
  );
};

export default Product;
