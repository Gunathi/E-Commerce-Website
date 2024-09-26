import { Link } from "react-router-dom";
import '../products.css';
import visa from '../visa.png';
import masterCard from '../mastercard.webp';
import AmericanExpress from '../Aexpress.webp';
import jcb from '../jcb.webp';
import protect_icon from '../protect-icon.webp';
import { useState, useEffect } from "react";

const Cart = ({ cartItems, setCartItems }) => {

    const [totalPrice, setTotalPrice ] = useState(0.00);
    const [selectedItems, setSelectedItems] = useState([]);

    useEffect(() => {
        calculateTotalPrice();
    }, [cartItems, selectedItems]);

    const calculateTotalPrice = () => {
        let total = 0.00;
        selectedItems.forEach(itemId => {
            const item = cartItems.find(cartItem => cartItem.id === itemId);
            if (item) {
                total += parseFloat(item.price) * item.quantity;
            }
        });
        setTotalPrice(total);
    };

    const handleSelectAll = () => {
        if (selectedItems.length === cartItems.length) {
            // Deselect all items
            setSelectedItems([]);
        } else {
            // Select all items
            setSelectedItems(cartItems.map(item => item.id));
        }
    };

    const handleItemSelect = (itemId) => {
        setSelectedItems(prevSelectedItems => {
            if (prevSelectedItems.includes(itemId)) {
                // Deselect item
                return prevSelectedItems.filter(id => id !== itemId);
            } else {
                // Select item
                return [...prevSelectedItems, itemId];
            }
        });
    };

    function handleDeleteItem(itemId){
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
        const item = cartItems.find(cartItem => cartItem.id === itemId);
        let newTotal = totalPrice - parseFloat(item.price) * item.quantity;
        setTotalPrice(newTotal);
    };

    const handleQuantityChange = (e, id) => {
        const newQuantity = parseInt(e.target.value, 10);
        if (newQuantity >= 1) {
            setCartItems(prevItems =>
                prevItems.map(item =>
                    item.id === id ? { ...item, quantity: newQuantity } : item
                )
            );
        }
    };

    return (
        <>
            <section className='products-hero-section'>
                <div className="head">
                    <h1>Product Details</h1>
                    <div className="links">
                        <Link to='/'>Home</Link>
                        <i className="fa-solid fa-chevron-right"></i>
                        <Link to='/cart'>Shopping Cart</Link>
                    </div>
                </div>
            </section>
            <section className="shopping-cart">
                <div className="cart-item-list">
                    <h2>Shopping Cart ({cartItems.length})</h2><br />
                    <input 
                        type="checkbox" 
                        id="selectAll" 
                        name="group" 
                        value="allItems" 
                        checked={selectedItems.length === cartItems.length}
                        onChange={handleSelectAll} 
                    />
                    <label htmlFor="selectAll">Select All Items</label><br></br>
                    <div className="items">
                        { cartItems && cartItems.map((cartItem, index) => (
                            <div key={index} className="item">
                            <input 
                                type="checkbox" 
                                id={`item-${index}`} 
                                name="group" 
                                value={`item-${index}`}
                                checked={selectedItems.includes(cartItem.id)}
                                onChange={() => handleItemSelect(cartItem.id)}
                            />
                            <img src={`http://localhost:8000${cartItem.image}`} alt="product" />
                            <div className="item-details">
                                <div className="item-name">
                                    <p>{cartItem.name}</p>
                                    <i className="fa-solid fa-trash" onClick={() => handleDeleteItem(cartItem.id)}></i>
                                </div>
                                <div className="item-price">
                                    <p>$ {cartItem.price}</p>
                                    <div className="count-selector">
                                        <span><i className="fa-solid fa-minus" onClick={() => handleQuantityChange({ target: { value: cartItem.quantity - 1 } }, cartItem.id)}></i></span>
                                        <input 
                                            type="text" 
                                            id="number" 
                                            value={cartItem.quantity}
                                            defaultValue="1" 
                                            min={1} 
                                            max={cartItem.count} 
                                            onChange={(e) => handleQuantityChange(e, cartItem.id)}
                                        />
                                        <span><i className="fa-solid fa-plus" onClick={() => handleQuantityChange({ target: { value: cartItem.quantity + 1 } }, cartItem.id)}></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>   
                <div className="side-summary">
                    <div className="total-summary">
                        <h2>Summary</h2>
                        <div className="total-price">
                            <p>Total</p>
                            <p>$ {totalPrice}</p>
                        </div>
                        <button className="checkout-btn">Checkout</button>
                    </div>
                    <div className="pay">
                        <h3>Pay with</h3>
                        <div className="pay-card-list">
                            <img src={visa} alt="visa" />
                            <img src={masterCard} alt="master card" />
                            <img src={jcb} alt="jcb" />
                            <img src={AmericanExpress} alt="american express" />
                        </div>
                        <h3>Buyer Protection</h3>
                        <p><img src={protect_icon} alt="protect-icon"/>Get full refund if the item is not as described or if is not delivered</p>
                    </div>
                </div>
            </section>
        </>
    );
}
 
export default Cart;