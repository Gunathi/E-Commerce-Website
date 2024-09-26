import '../products.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../useFetch';
import { useParams } from 'react-router-dom';

const ProductOverview = ({ handleAddToCart, cartItems }) => {

    const { id } = useParams();
    const { data: product, isPending, error } = useFetch(`http://127.0.0.1:8000/api/product-detail/${id}`);

    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
      if (product) {
        setQuantity(1); // Reset quantity to 1 when product data is fetched
      }
    }, [product]);

    const handleAddToCartClick = () => {
        if (product){

            const isAlreadyInCart = cartItems.some(item => product.id === item.id);

                if(isAlreadyInCart){
                    console.log("Already added..");
                }else {
                    const newItem = {
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.image,
                        count: product.count,
                        quantity: 1,
                      };
                      handleAddToCart(newItem);
                    //   console.log(cartItems);
                }
        }
      };

      const handleIncrease = () => {
        if (quantity < product.count) {
          setQuantity(quantity + 1);
        }
      };
    
      const handleDecrease = () => {
        if (quantity > 1) {
          setQuantity(quantity - 1);
        }
      };

      const handleQuantityChange = (e) => {
        const newQuantity = parseInt(e.target.value, 10);
        if (newQuantity >= 1 && newQuantity <= product.count) {
          setQuantity(newQuantity);
        }
      };

      useEffect(() => {
        console.log("Current cart items:", cartItems);
    }, [cartItems]);

    return (
        <>
        <section className='products-hero-section'>
            <div className="head">
                <h1>Product Details</h1>
                <div className="links">
                    <Link to='/'>Home</Link>
                    <i className="fa-solid fa-chevron-right"></i>
                    <Link to={`/product/${id}`}>{product && product.name}</Link>
                </div>
            </div>
        </section>
            <section className="product-overview">
                <div className="product">
                    <img src={product && `http://localhost:8000${product.image}`} alt="" />
                    <div className="product-details">
                        {error && <p>{error}</p>}
                        {isPending && <p>Loading...</p>}
                        {product && (
                            <>
                                <h2>{product.name}</h2>
                                <h2><span>$ {product.price}</span></h2>
                                <p>Category: {product.category}</p>
                                <p>Availability: {product.count > 0 ? 'In stock' : 'Out of stock'}</p>
                                <hr />
                                <p>{product.details}</p>
                                <div className="count-selector">
                                    <span><i className="fa-solid fa-minus" onClick={handleDecrease}></i></span>
                                    <input 
                                        type="text" 
                                        id="number" 
                                        value={quantity} 
                                        defaultValue="1" 
                                        min={1} 
                                        max={product.count} 
                                        onChange={handleQuantityChange}
                                    />
                                    <span><i className="fa-solid fa-plus" onClick={handleIncrease}></i></span>
                                </div>
                                <div className="add-to-cart">
                                    <button className='btn-1' onClick={handleAddToCartClick}>Add to cart</button>
                                    <i className="fa-regular fa-heart"></i>
                                </div>
                            </>
                        )}
                    </div>
                </div>
                    
            </section>
        </>
    );
}
 
export default ProductOverview;