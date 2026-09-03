function Registration() {
    return (
        <div>

            <div className="container">
                <div className="row justify-content-center align-items-center min-vh-100">
                    <div className="col-md-7 col-lg-5">
                        <div className="card shadow border-0">
                            <div className="card-body p-4">
                                <h2 className="text-center mb-4">Registration</h2>
                                <form>
                                    {/* Full Name */}
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Full Name</label>
                                        <input type="text" className="form-control" id="name" placeholder="Enter your full name" required />
                                    </div>

                                    {/* Email */}
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email Address </label>
                                        <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
                                    </div>

                                    {/* Password */}
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="password" placeholder="Create a password" minLength={8} required />
                                        <div className="form-text text-danger">
                                            Password must be at least 8 characters.
                                        </div>
                                    </div>

                                    {/* Confirm Password */}
                                    <div className="mb-3">
                                        <label htmlFor="confirmPassword" className="form-label">
                                            Confirm Password <span class="text-danger">*</span>
                                        </label>
                                        <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm your password" required />
                                    </div>

                                    {/* Terms */}
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="terms" required />
                                        <label className="form-check-label" htmlFor="terms">
                                            I agree to the
                                            <a href="#" className="text-decoration-none">
                                                Terms &amp; Conditions
                                            </a>
                                        </label>
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