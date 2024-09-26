import { Link } from 'react-router-dom'
import '../index.css';

const Footer = () => {
    return (
        <section className="footer">
        <div className="footer-row">
            <div className="footer-col">
                <h4>Info</h4>
                <ul className="links">
                    <li><Link to="/about">bout Us</Link></li>
                    <li><Link to="/">Compressions</Link></li>
                    <li><Link to="/">Customers</Link></li>
                    <li><Link to="/">Service</Link></li>
                    <li><Link to="/">Collection</Link></li>
                </ul>
            </div>

            <div className="footer-col">
                <h4>Explore</h4>
                <ul className="links">
                    <li><Link to="/">Free Designs</Link></li>
                    <li><Link to="/">Latest Designs</Link></li>
                    <li><Link to="/">Themes</Link></li>
                    <li><Link to="/">Popular Designs</Link></li>
                    <li><Link to="/">Art Skills</Link></li>
                    <li><Link to="/">New Uploads</Link></li>
                </ul>
            </div>

            <div className="footer-col">
                <h4>Legal</h4>
                <ul className="links">
                    <li><Link to="/">Customer Agreement</Link></li>
                    <li><Link to="/">Privacy Policy</Link></li>
                    <li><Link to="/">GDPR</Link></li>
                    <li><Link to="/">Security</Link></li>
                    <li><Link to="/">Testimonials</Link></li>
                    <li><Link to="/">Media Kit</Link></li>
                </ul>
            </div>

            <div className="footer-col">
                <h4>Newsletter</h4>
                <p>Subscribe to our newsletter for a weekly dose
                    of news, updates, helpful tips, and
                    exclusive offers.</p>
                <form action="#">
                    <input type="text" placeholder="Your email" required />
                    <button className="btn-1" type="submit">SUBSCRIBE</button>
                </form>
                <div className="icons">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-linkedin"></i>
                    <i className="fa-brands fa-github"></i>
                </div>
            </div>
        </div>
    </section>
    );
}
 
export default Footer;