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


