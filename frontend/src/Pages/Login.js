import { useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';


function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Login form submit

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(
                `${process.env.REACT_APP_API}/api/auth/login`,
                {
                    email,
                    password
                }
            );

            if (res.data.success) {
                toast.success(res.data.message);
                // redirect
                navigate("/");
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };

    return (
        <div>

            <div className="rbt-component-area rbt-section-gap2Bottom rbt-section-gap2Top">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5 mx-auto">
                            <div className="rbt-login-form">
                                <div className="rbt-login-form-inner">
                                    <div className="rbt-login-form-top">
                                        <div className="logo">
                                            <a href="index.html">
                                                <img src="assets/images/logo/logo.webp" alt="Ecommerce Logo Images" />
                                            </a>
                                        </div>
                                        <h3 className="rbt-title rbt-text-bold mb--16 h6">Sign In To Proceed</h3>
                                        <form onSubmit={handleSubmit}>
                                            <div className="mb-3">
                            
                                                <label htmlFor="email" className="form-label">Email address</label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="email"
                                                    placeholder="Enter your email"
                                                    name='email'
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    required
                                                />
                                            </div>

                                            <div className="mb-3">

                                                <label htmlFor="password" className="form-label">Password</label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    id="password"
                                                    placeholder="Enter your password"
                                                    name='password'
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    required
                                                />
                                            </div>

                                            <button type="submit" className="btn btn-primary w-100">
                                                Login
                                            </button>
                                            <div className="text-center mt-3">
                                                <a href="#" className="text-decoration-none">
                                                    Forgot password?
                                                </a>
                                            </div>
                                            <hr />
                                            <p className="text-center mb-0">
                                                Don't have an account?
                                                <a href="/registration" className="text-decoration-none">Register</a>
                                            </p>
                                        </form>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
}

export default Login;