import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./components/Login";
import GetStarted from "./components/GetStarted";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import HowItWorks from "./components/HowItWorks";
import BooksEntertainment from "./components/BooksEntertainment";
import Subscription from "./components/Subscription";
import Cart from "./components/Cart"; // Import Cart component
import BeautySkinProducts from "./components/BeautySkinProducts"; // Ensure the path is correct

const App = () => {
  const [cartItems, setCartItems] = useState([]); // State for cart items

  // Function to add items to the cart
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  return (
    <Router>
      {/* Navbar with cartItems passed as a prop */}
      <Navbar cartItems={cartItems} />

      {/* Define routes */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route
          path="/books-entertainment"
          element={
            <BooksEntertainment addToCart={addToCart} />
          }
        />
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
        />
        <Route path="/subscription" element={<Subscription />} />
        {/* Add BeautySkinProducts route with redirect to Subscription1 */}
        <Route
          path="/beauty-skin-products"
          element={
            <BeautySkinProducts 
              addToCart={addToCart} 
              redirectToSubscription1={() => (window.location.href = "/subscription")} 
            />
          }
        />
        {/* Add Subscription1 route */}
        <Route path="/subscription" element={<Subscription />} />
      </Routes>
    </Router>
  );
};

export default App;
