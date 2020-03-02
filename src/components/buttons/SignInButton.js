import React, { Fragment } from 'react';
import { Link } from "react-router-dom";

const SignInButton = (props) => {
    const isLoggedIn = props.isLoggedIn;
    if (!isLoggedIn) {
        return (

            <Fragment>
                <Link to="/sign-in" className=" pull-right  pt-2"><span className=" btn-sm btn btn-gold">Sign In</span></Link>
            </Fragment>
        );
    }
    else{
        return (

            <Fragment>
                <Link to="/sign-in" className=" pull-right  pt-2"><span className=" btn-sm btn btn-gold">Sign out</span></Link>
            </Fragment>
        );
    }
}

export default SignInButton;
