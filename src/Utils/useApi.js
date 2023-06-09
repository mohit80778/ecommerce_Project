import  { useState } from 'react';
import axios from 'axios';

const useApi = () => {
  const BASE_URL="https://fakestoreapi.com";
  const[data,setData]=useState([]);
  const [error,setError]=useState("");
  const getProducts= async (endpoint  , header={})=>{
    await axios
    .get(BASE_URL+endpoint)
    .then((res)=>{setData(res.data);})
    .catch((err)=>{setError(err);})

  };
  return {getProducts,error,data};
};

export default useApi;



// import { useEffect, useState } from "react";
// import axios from "axios";

// const useAPI = () => {
//   const BASE_URL = "https://fakestoreapi.com";
//   const[data,setData] = useState([]);
//   const getProducts = async (endpoint, header = {}) => {
//     // try {
//     //   const response = await axios.get(BASE_URL + endpoint)
//     //   .then((res)=> {setData(res.data);})
      
//     // } catch (error) {
//     //   console.log(error);
//     //   throw error;
//     // }
//   };

//   return { data,getProducts };
// };

// export default useAPI;
