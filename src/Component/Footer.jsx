import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LanguageSelect from "./language";




const Footer = () => {

  const [showHeader, setShowHeader] = useState(false);
  const Navigate = useNavigate();

  const handleBackToTop = () => {
    window.scrollTo(0, 0);
    setShowHeader(true);
  };

  return (
    <div>
    
      
      
      {/* <img
        src="" alt="img"
        className="w-full"
      /> */}
      <footer className="border-2 w-full h-50 bg-gray-300 border-black">
        {showHeader && <h1 className="text-4xl text-black">`</h1>}
        <div
          className="text-white pl-[45%] bg-slate-500 cursor-pointer"
          onClick={handleBackToTop}
        >
          Back To Top
        </div>

        <nav className="flex justify-center bg-slate-800">
          <ul>
            <li
              onclick={() => Navigate("/Get to know")}
              className="mx-4  hover:bg-sky-700 text-2xl text-white"
            >
              Get to know
            </li>
            <li
              onclick={() => Navigate("/About Us")}
              className="mx-4  hover:bg-sky-700 text-xl text-white  "
            >
              About Us
            </li>
            <li
              onclick={() => Navigate("/Careers")}
              className="mx-4  hover:bg-sky-700 text-xl text-white"
            >
              Careers
            </li>
            <li
              onclick={() => Navigate("/Press Releases")}
              className="mx-4  hover:bg-sky-700 text-xl text-white"
            >
              Careers
            </li>
          </ul>
          <ul>
            <li
              onclick={() => Navigate("/Contact with US")}
              className="mx-4  hover:bg-sky-700 text-2xl text-white"
            >
              Contact with US
            </li>
            <li
              onclick={() => Navigate("/Facebook")}
              className="mx-4  hover:bg-sky-700 text-xl text-white  "
            >
              Facebook
            </li>
            <li
              onclick={() => Navigate("/Twitter")}
              className="mx-4  hover:bg-sky-700 text-xl text-white"
            >
              Navigate
            </li>
            <li
              onclick={() => Navigate("/Instagram")}
              className="mx-4  hover:bg-sky-700 text-xl text-white"
            >
              Instagram
            </li>
          </ul>
          <ul>
            <li
              onclick={() => Navigate("/Make Money with US")}
              className="mx-4  hover:bg-sky-700 text-2xl text-white"
            >
              Make Money with US
            </li>
            <li
              onclick={() => Navigate("/Sell on Amazon")}
              className="mx-4  hover:bg-sky-700 text-xl text-white  "
            >
              Sell on Amazon
            </li>

            <li
              onclick={() => Navigate("/Sell under Amazon Accelerator")}
              className="mx-4  hover:bg-sky-700 text-xl text-white"
            >
              Sell under Amazon Accelerator
            </li>
            <li
              onclick={() => Navigate("/Protect and Build Your Brand")}
              className="mx-4   hover:bg-sky-700 text-xl text-white"
            >
             Protect and Build Your Brand
            </li>
            <li
              onclick={() => Navigate("/Amazon GLobal Selling ")}
              className="mx-4 hover:bg-sky-700 text-xl text-white"
            >
              Amazoon Global Selling 
            </li>
            <li
              onclick={() => Navigate("/Become an Affiliate")}
              className="mx-4 text-xl  hover:bg-sky-700 text-white"
            >
            Become an Affiliate
            </li>
            <li
              onclick={() => Navigate("/Fulfilment by Amazon")}
              className="mx-4 text-xl  hover:bg-sky-700 text-white"
            >
            Fulfilment by Amazon
            </li>
            
            <li
              onclick={() => Navigate("/Advertise Your Products")}
              className="mx-4 text-xl  hover:bg-sky-700 text-white"
            >
            Advertise Your Products
            </li>
            <li
              onclick={() => Navigate("/Amazon Pay on Merchants")}
              className="mx-4 text-xl  hover:bg-sky-700 text-white"
            >
           Amazon Pay on Merchants
            </li>
            
          </ul>
          <ul>
            <li
              onclick={() => Navigate("/Let us help you ")}
              className="mx-4 text-2xl  hover:bg-sky-700 text-white"
            >
              Let us help you
            </li>
            <li
              onclick={() => Navigate("/covid-19 and Amazon")}
              className="mx-4 text-xl  hover:bg-sky-700 text-white hover: border-gray-300 focus:border-blue-400  "
            >
              Covid-19 and Amazon
            </li>
            <li
              onclick={() => Navigate("/Your Account")}
              className="mx-4 text-xl  hover:bg-sky-700 text-white"
            >
              Your Account
            </li>
            <li
              onclick={() => Navigate("/100% Purchase Protection")}
              className="mx-4 text-xl hover:bg-sky-700  text-white"
            >
              100% Purchase Protection
            </li>
            <li
              onclick={() => Navigate("/Amazon APp Download")}
              className="mx-4 text-xl  hover:bg-sky-700   text-white"
            >
              Amazon APp Download"
            </li>
            <li
              onclick={() => Navigate("/Help")}
              className="mx-4 text-xl  hover:bg-sky-700 ... text-white"
            >
              Help
            </li>
          </ul>
        </nav>
          <div className="footer-line flex gap-8 items-center pl-[38%] py-4" style={{ borderBottom: '1px solid #ddd' }}>
           
           <img className="" src="https://media.comicbook.com/2020/05/amazon-logo-1218590-1280x0.jpeg" alt="img" style={{height:"50%",width:"20%"}}/>
        
           <span className="px-12">< LanguageSelect/></span>

          </div>
      </footer>
    </div>
  );
};

export default Footer;
