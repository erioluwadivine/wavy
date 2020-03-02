import React, { Fragment  } from 'react';
import SignInButton from '../buttons/SignInButton';
import '../Assets/css/Navbar.css';
import Logo from '../Assets/images/logo.svg';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <Fragment>
            <nav className='Navbar navbar-fixed-top'>
                <div className="container">
                    <Link to="/"><img className="navbar-brand" src={Logo} width="60" alt='' /></Link>
                    <Link to="/" className="wavy font-weight-bold" href="/"><strong>WAVY</strong></Link>
                    <SignInButton isLoggedIn ={true}/>
                </div>
            </nav>
        </Fragment>
    )
}

export default Navbar;
