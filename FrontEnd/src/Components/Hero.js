import '../Hero.css';
import {Link} from 'react-router-dom';

const Hero = () => {
    return (
        <div className="hero-section">
            <div className="side-content">
            <h1>Decorate Your Dream Space <br /> With Our Finest Collection</h1>
            <p>Discover our exquisite collection to find the perfect pieces that reflect your unique style and vision, transforming your home into a sanctuary of elegance and comfort</p>

            <Link to='/'>Explore Collection <i className="fa-solid fa-arrow-right"></i></Link>
            <Link to='/' className='arrow'><i className="fa-solid fa-arrow-right"></i></Link>
            </div>
        </div>
    );
}
 
export default Hero;