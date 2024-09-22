import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Cart from "./pages/Cart"
import Product from "./pages/Product"
import Login from "./pages/Login"
import Collection from "./pages/Collection"
import Contact from "./pages/Contact"
import Orders from "./pages/Orders"
import PlaceOrder from "./pages/PlaceOrder"
import Navbar from "./components/Navbar"
import NotFound from "./pages/NotFound"
import Footer from "./components/Footer"
import Search from "./components/Search"

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className="px-4 sm:px-[5wv] md:px-[7vw] lg:px-[9vw]">
      <Navbar/>
      <Search/>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/product/:productId" element={<Product/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer position="bottom-right" key={'item'}/>
      <Footer/>
    </div>
  )
}

export default App