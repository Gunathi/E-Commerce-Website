import { Link } from "react-router-dom";
import '../products.css'
import sub1 from '../sub1.jpg';
import sub2 from '../sub2.jpg';
import sub3 from '../sub3.jpg';

const About = () => {
    return (
        <>
            <section className='products-hero-section'>
            <div className="head">
                <h1>About Us</h1>
                <div className="links">
                    <Link to='/'>Home</Link>
                    <i className="fa-solid fa-chevron-right"></i>
                    <Link to='/about'>About Us</Link>
                </div>
            </div>
        </section>

        <section className="about-us">
            <div className="heading">
                <h2 className='special-h2'>Our Story</h2>
                <p>Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti sapiente, expedita culpa rem voluptates magni, ut harum enim impedit laborum optio quam vitae velit asperiores soluta porro veniam rerum eius.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit blanditiis, excepturi quasi corporis labore nihil ab atque ullam iste voluptatum mollitia velit animi quisquam tenetur dicta! Corrupti, temporibus dolorem. Laborum!
                </p>
            </div>

            <div className="sub-section">
                <img className="img1" src={sub1} alt="" />
                {/* <img className="img2" src={sub2} alt="" />
                <img className="img3" src={sub3} alt="" /> */}
            </div>
        </section>
        </>
    );
}
 
export default About;