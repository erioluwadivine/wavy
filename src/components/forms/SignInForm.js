import React from 'react';
import { Link } from "react-router-dom";
import '../Assets/css/SignUpForm.css'
const SignInForm = () => {
    return (
        <div className="container pt-5 pb-5 the-form ">
            <div className="card">
                <div className="card-body">
                    <h3 className=" pt-3 pl-3 font-weight-bold text-gold">Create your account</h3>
                    <div className=" md-form ">
                        <input type="text" placeholder="Email Address/Username" className="form-control form-control-lg" />
                    </div>
                    <div className=" md-form ">
                        <input type="Password" placeholder="Password" className="form-control form-control-lg" />
                    </div>
                    <div className=" md-form ">
                        <input type="checkbox" className="" /> <span>Remember me</span>
                    </div>
                    <Link to="/verify-user">
                        <div className="btn-sm btn btn-gold">
                            Sign Up
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SignInForm;
