import React from "react";
import { Navigate } from "react-router-dom";


const Header =() =>{
    return(
       <div className="">
         <div className="bg-gray-700 h-16 text-white flex text-base items-center gap-4">
            <div className="flex gap-4 text-xl font-bold cursor-pointer">
            <img
            className="px-0.5 h-12 w-48 border border-transparent hover:border-blue-700 cursor-pointer duration-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrjzXEDXNQ44hx4OF4nOQlzpIal00KNMp8YyMGgJEV&s" alt="logo"/>
            </div>
            <p className="hover:border-white" onClick={()=>Navigate("/")}>Home</p>
            <p onclick={() => Navigate("/")}>About</p>
            <p>Contact</p>
            <input type="text" className="h-10 w-full "/>
            <button className="hover:bg-orange-500 bg-orange-300 px-2 py-2 rounded-lg">search</button>
            <p>signIn</p>
            <p >signup</p>
       </div>
       
      
    </div>
    )
}
export default Header; 