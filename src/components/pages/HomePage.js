import React from 'react';
import HomeMenu from '../Layouts/HomeMenu';
import WhoToFollow from '../Layouts/WhoToFollow';
import MainMenu from '../Layouts/MainMenu';
import '../Assets/css/HomePage.css'
const HomePage = () => {
    return (
        <div className="row no-gutters">
            <div className="home-menu col-md-3">
               <HomeMenu/>
            </div>
            <div className="col-md-6">
                <MainMenu/>
            </div>
            <div className="who-to-follow col-md-3">
                <WhoToFollow/>
            </div>
        </div>
    );
}

export default HomePage;
