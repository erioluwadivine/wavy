import React, { useState } from 'react';
import '../Assets/css/SignUpForm.css'
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';
axios.defaults.baseURL = 'localhost:5000';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const SignUpForm = () => {

    const [userCreds, setuserCreds] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        userName: '',
        institution: '',
        password: ''
    })
    const [signUpStatus, setSignUpStatus] = useState({
        response: '',

    })
    const { firstName, lastName, email, phone, username, institution, password } = userCreds;
    const onChange = e => setuserCreds({ ...userCreds, [e.target.name]: e.target.value });

    function getApi() {
        axios.post(`http://127.0.0.1:5000/signup`, {
            "firstname": firstName,
            "lastname": lastName,
            "email": email,
            "phone": phone,
            "username": username,
            "institution": institution,
            "password": password
        })
            .then(res => {
                setSignUpStatus({ response: res.data });
            })

    }
    const onSubmit = e => {
        e.preventDefault();
        getApi();


    }
    let errorMessage = ''

    switch (signUpStatus.response['Message']) {
        case 'Email already exists':
            errorMessage = <p className='alert-danger pt-2 pb-2 text-center'>email already exists</p>
            break;
        case 'Registration Successful':
            return <Redirect from='/' to="/sign-in" />
        default:
            errorMessage = ''
    }



    return (
        <form onSubmit={onSubmit}>
            <div className="container pt-5 pb-5 the-form ">
                <div className="card">
                    <div className="card-body">
                        <h3 className=" pt-3 pl-3 font-weight-bold text-gold">Create your account</h3>

                        <p>{errorMessage}</p>
                        <div className=" md-form ">
                            <input type="text" onChange={onChange} value={firstName} name="firstName" placeholder="First name" className="form-control form-control-lg" required />
                        </div>
                        <div className=" md-form ">
                            <input type="text" onChange={onChange} value={lastName} name="lastName" placeholder="Last name" className="form-control form-control-lg" required />
                        </div>
                        <div className=" md-form ">
                            <input type="email" onChange={onChange} value={email} name="email" placeholder="Email address" className="form-control form-control-lg" required />
                        </div>
                        <div className=" md-form ">
                            <input type="text" onChange={onChange} value={phone} name="phone" placeholder="Phone number" className="form-control form-control-lg" required />
                        </div>
                        <div className=" md-form ">
                            <input type="text" onChange={onChange} value={username} name="username" placeholder="Username" className="form-control form-control-lg" required />
                        </div>
                        <div className=" md-form ">
                            <input type="text" onChange={onChange} value={institution} name="institution" placeholder="Institution" className="form-control form-control-lg" required />
                        </div>
                        <div className=" md-form ">
                            <input type="password" onChange={onChange} value={password} name="password" placeholder="Password" className="form-control form-control-lg" required />
                        </div>
                        <div>
                            <small className="text-gold">Already have and account? 
                                <Link className="pl-1" to="/sign-in">
                                    Login
                                </Link>
                            </small>
                        </div>
                        <input className="btn-sm btn btn-gold" type="submit" value="Sign Up" />
                    </div>
                </div>
            </div>
        </form>
    );
}

export default SignUpForm;
