import React from 'react';
import '../Assets/css/Footer.css'
const Footer = () => {
    return (
        <div className="Footer">
            <ul className="nav pt-3 justify-content-center">
                <li className="nav-item">
                    <a className="nav-link" href="/">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Terms and Conditions</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link " href="/">Privacy policy </a>
                </li>

            </ul>
            <div className="text-center">
                &#169; 2019 Wavy
            </div>
        </div>
    );
}

export default Footer;
