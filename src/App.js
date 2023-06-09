import './App.css';
import { Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import ContactUs from "./Pages/ContactUs";
import SignIn from "./Pages/SignIn";
import { Route } from 'react-router-dom';
import AppLayout from './Component';
import Cart from './Utils/Cart';
import Product from './Pages/Product';

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
    </AppLayout>
  );
}

export default App;



// import './App.css';
// import { Routes } from 'react-router-dom';
// import Home from './Pages/Home';
// import About from './Pages/About';
// import ContactUs from "./Pages/ContactUs";
// import SignIn from "./Pages/SignIn";
// import { Route } from 'react-router-dom';
// import AppLayout from './Component';
// import Card from './Pages/Card';
// import Product from './Pages/Product';

// function App() {
  
//   return (
//     <AppLayout>
//     <Routes>
//       <Route path="/" element ={<Home/>}/>
//       <Route path="/about" element ={<About/>}/>
//       <Route path="/ContactUs" element ={<ContactUs/>}/>
//       <Route path="/SignIn" element ={<SignIn/>}/>
      
//       <Route path="/Card" element ={<Card/>}/>
//       <Route path='/Products:id' element={<Product/>}/>
//     </Routes>
//     </AppLayout>
//   );
// }

// export default App;