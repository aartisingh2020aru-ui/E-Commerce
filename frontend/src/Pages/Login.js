function Login() {
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
                                        <form>
                                            <div className="mb-3">
                                                <label htmlFor="email" className="form-label">Email address</label>
                                                <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="password" className="form-label">Password</label>
                                                <input type="password" className="form-control" id="password" placeholder="Enter your password" required />
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