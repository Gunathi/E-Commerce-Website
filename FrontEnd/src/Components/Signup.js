import '../login.css';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <>
        <section className="signup-body">
            <div className="signup">
                <div className="heading">
                    <h1>SignUp</h1>
                    <p>Create your account to get full access</p>
                </div>

                <div className="form">
                    <div className="form-details">
                    <label htmlFor="username">Username</label><br />
                    <input type="text" placeholder='Username'/><br />

                    <label htmlFor="email">Email Address</label><br />
                    <input type="text" placeholder='Email'/><br />

                    <label htmlFor="password">Password</label><br />
                    <input type="password" placeholder='Enter Password'/>

                    <label htmlFor="confirmpassword">Confirm Password</label><br />
                    <input type="confirmpassword" placeholder='Re-Enter Password'/>
                    </div>

                    <div className="create">
                        <p>Already have an account? <span><Link to='/login'>Login</Link></span> here</p>
                        <button className='btn-1'>Sign Up</button>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
 
export default Signup;