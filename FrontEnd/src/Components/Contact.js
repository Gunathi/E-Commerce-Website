import '../contact.css';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <>
        <section className='contact-hero-section'>
            <div className="head">
                <h1>Contact Us</h1>
                <div className="links">
                    <Link to='/'>Home</Link>
                    <i className="fa-solid fa-chevron-right"></i>
                    <Link to='/contact'>Contact</Link>
                </div>
            </div>
        </section>
        <section className='get-in-touch'>
            <div className="col-1">
                <h2>Get In Touch</h2> 
                <textarea name="message" id="message" placeholder='Message'></textarea><br /> 
                <div className="name-email">
                <input type="text" placeholder='Name'/>
                <input type="text" placeholder='email'/>
                </div>
                <br /><input type="text" placeholder='Subject'/><br />
                <button className='btn-2'>SEND</button>
            </div>
            <div className="col-2">
                <div className="address">
                    <i className="fa-solid fa-house"></i>
                    <div className="body">
                        <h3>Kelaniya, Sri Lanka</h3>
                        <p>Resemead, CA 91770</p>
                    </div>
                </div>
                <div className="phone">
                    <i className="fa-solid fa-tablet-screen-button"></i>
                    <div className="body">
                        <h3>+94-1234567</h3>
                        <p>Mon to Fri 9am to 6pm</p>
                    </div>
                </div>
                <div className="mail">
                    <i className="fa-solid fa-envelope"></i>
                    <div className="body">
                        <h3>info@shop.lk</h3>
                        <p>Send us your query anytime!</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
 
export default Contact;