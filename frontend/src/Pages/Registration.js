import { useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

function Registration() {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");


    // form function
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(
                `${process.env.REACT_APP_API}/api/auth/register`,
                { username, email, password, phone, address }
            );

            if (res.data.success) {
                toast.success(res.data.message);
                navigate("/login");
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };

    // const  test = async(e) =>{
    //     e.preventDefault();
    //     toast.success(" Register successfully!");

    return (
        <div>

            <div className="container">
                <div className="row justify-content-center align-items-center min-vh-100">
                    <div className="col-md-7 col-lg-5">
                        <div className="card shadow border-0">
                            <div className="card-body p-4">
                                <h2 className="text-center mb-4">Registration</h2>

                                <form onSubmit={handleSubmit}>

                                    {/* Full Name */}
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Full Name</label>

                                        <input
                                            type="text"
                                            className="form-control"
                                            name='username'
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            id="name"
                                            placeholder="Enter your full name" />

                                    </div>

                                    {/* Email */}
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email Address </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            name='email'
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            id="email"
                                            placeholder="Enter your email" />
                                    </div>

                                    {/* Password */}
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            name='password'
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            id="password"
                                            placeholder="Create a password" minLength={8} />
                                        <div className="form-text text-danger">
                                            Password must be at least 8 characters.
                                        </div>
                                    </div>



                                    {/* phone */}
                                    <div className="mb-3">
                                        <label htmlFor="phone" className="form-label">Phone</label>
                                        <input
                                            type="phone"
                                            className="form-control"
                                            name='phone'
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            id="phone"
                                            placeholder="Create a password" minLength={8}
                                        />


                                        <div className="form-text text-danger">
                                            Password must be at least 8 characters.
                                        </div>
                                    </div>


                                    {/* address */}
                                    <div className="mb-3">
                                        <label htmlFor="address" className="form-label">Address</label>
                                        <input
                                            type="address"
                                            className="form-control"
                                            name='address'
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                            id="address"
                                            rows="3"
                                            placeholder="Create a password" minLength={8} />

                                        <div className="form-text text-danger">
                                            Password must be at least 8 characters.
                                        </div>
                                    </div>


                                    

                                    {/* Register Button */}
                                    <button type="submit" className="btn btn-primary w-100">
                                        Register
                                    </button>

                                    <hr />
                                    {/* Login Link */}
                                    <p className="text-center mb-0">
                                        Already have an account?
                                        <a href="/login" className="text-decoration-none">
                                            Login
                                        </a>
                                    </p>


                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
}

export default Registration;