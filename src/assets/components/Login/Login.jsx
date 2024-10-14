import React, { useState } from 'react';
import './Login.css';
import { FaRegUser, FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa6";
import { MdOutlineLock } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../Header/Header';

const Login = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const checkApi = async () => {
        const res = await axios.get("https://66ffcd724da5bd237552095c.mockapi.io/users");
        const users = res.data;

        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            navigate(`/welcome/${user.id}`);
        } else {
            setError('Invalid username or password');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        checkApi(); 
    };

    return (
      
        <div className="div">
          <Header/>
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
                                type="text"
                                placeholder='Type your password'
                            />
                        </div>
                    </div>

                    <div className="login-forgot">
                        <a href=''>Forgot password?</a>
                    </div>

                    <button className='login-loginBtn'>LOGIN</button>
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
}

export default Login;


