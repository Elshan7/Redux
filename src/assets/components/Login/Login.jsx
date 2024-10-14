import React, { useEffect, useState } from 'react';
import './Login.css';
import { FaRegUser, FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa6";
import { MdOutlineLock } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; 
import Header from '../Header/Header';
import { loginUser } from '../../redux/feature/login/loginSlice';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { loading, error, userInfo } = useSelector((state) => state.login);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser({ username, password })); 
    };

    
    
useEffect(() => {
    if (userInfo) {
        navigate(`/welcome/${userInfo.id}`); 
    }
}, [userInfo, navigate]);


    return (
        <div className="div">
            <Header />
            <section className='login-register'>
                <div className='login-container'>
                    <form action="" onSubmit={handleSubmit}>
                        <h2 className='login-h2'>Login</h2>
                        <div className="login-input-group">
                            <label htmlFor="">Username</label>

                            <div className="login-input-text">
                                <div className="login-user">
                                    <FaRegUser className='login-user-icon' />
                                </div>
                                <input
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    type="text"
                                    placeholder='Type your username'
                                />
                            </div>
                        </div>

                        <div className="login-input-group login-second-input">
                            <label htmlFor="">Password</label>

                            <div className="login-input-text">
                                <div className="login-user">
                                    <MdOutlineLock className='login-user-icon' />
                                </div>
                                <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                    placeholder='Type your password'
                                />
                            </div>
                        </div>

                        {error && <p className="input-error">{error}</p>} 

                        <div className="login-forgot">
                            <a href=''>Forgot password?</a>
                        </div>

                        <button className='login-loginBtn' disabled={loading}>
                            {loading ? 'Logging in...' : 'LOGIN'}
                        </button>

                        <div className="login-text1">Or Sign Up Using</div>
                        <div className="login-icons">
                            <a href="" className='login-fb'>
                                <FaFacebookF className='login-facebook' />
                            </a>
                            <a href="" className='login-tw'>
                                <FaTwitter className='login-twitter' />
                            </a>
                            <a href="" className='login-gl'>
                                <FaGoogle className='login-twitter' />
                            </a>
                        </div>

                        <div className="login-sign" onClick={() => navigate("/signUp")}>
                            <a href="">SIGN UP</a>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Login;
