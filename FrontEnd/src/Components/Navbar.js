import { Link } from 'react-router-dom'
import '../App.css'; 

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to='/'>LOGO</Link>
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
                <li><Link to="/products">PRODUCTS</Link></li>
                <li><Link to="/contact">CONTACT</Link></li>
            </ul>
            <div className="icons">
                <Link to='/login'>My Account</Link>
                <i className="fa-solid fa-bars"></i>
                <Link to='/cart'><i className="fa-solid fa-cart-shopping"></i></Link>
            </div>
        </div>
    );
}
 
export default Navbar;