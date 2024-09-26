import '../login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
        <section className="login-body">
            <div className="login">
                <div className="heading">
                    <h1>Login</h1>
                    <p>Enter login details to get access</p>
                </div>

                <div className="form">
                    <div className="form-details">
                    <label htmlFor="username">Username</label><br />
                    <input type="text" placeholder='Username'/><br />

                    <label htmlFor="password">Password</label><br />
                    <input type="password" placeholder='Enter Password'/>
                    </div>
                    
                    <div className="check">
                        <div className="check-box">
                            <input type="checkbox" id="keepLogged" name="keepLogged" value="logged" />
                            <label for="keepLogged">Keep Me Logged In</label>
                        </div>
                        
                        <Link to='/'>Forgot Password?</Link>
                    </div>

                    <div className="create">
                        <p>Don't have an account? <span><Link to='/signup'>Sign Up</Link></span> here</p>
                        <button className='btn-1'>Login</button>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
 
export default Login;