import './App.css';
import './index.css';
import { useState } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import Footer from './Components/Footer';
import Categories from './Components/Categories';
import Contact from './Components/Contact';
import MiddleSection from './Components/MiddleSection';
import Products from './Components/Products';
import Services from './Components/Services';
import ForthSection from './Components/ForthSection';
import TopPick from './Components/TopPick';
import Login from './Components/Login';
import Signup from './Components/Signup';
import AllProducts from './Components/AllProducts';
import CategoryProducts from './Components/CategoryProducts';
import ProductOverview from './Components/ProductOverview';
import Cart from './Components/Cart';
import About from './Components/About';

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const isSignupPage = location.pathname === '/signup';

  const [cartItems, setCartItems ] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems(prevItems => [...prevItems, item]);
};


  return (
    <div className="App">
      {!isSignupPage && !isLoginPage && <Navbar />}
      <Routes>
        <Route path='/' element={
          <>
            <Hero />
            <Categories />
            <MiddleSection />
            <Products />
            <ForthSection />
            <TopPick />
            <Services />
          </>
        } />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Signup />} />
        <Route path='/products' element={
          <>
          <AllProducts />
          <Services />
          </>
        } />
        <Route path="/category-products/:category" element={
          <>
          <CategoryProducts />
          <Services />
          </>
          } />
          <Route path="/product/:id" element={
            <>
            <ProductOverview handleAddToCart={handleAddToCart} cartItems={cartItems}/>
            <Services />
            </>
          } />
          <Route path='/cart' element={
            <>
            <Cart cartItems={cartItems} setCartItems={setCartItems}/>
            <Services />
            </>
          } />
          <Route path='/about' element={
            <>
              <About />
              <Services />
            </>
          } />
      </Routes>
      {!isSignupPage && !isLoginPage && <Footer />}
    </div>
  );
}

export default function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}
