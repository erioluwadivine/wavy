import React, {Fragment} from 'react';
import Home from '../Assets/icons/Home.svg';
import Match from '../Assets/icons/Match.svg';
import Notifications from '../Assets/icons/Notifications.svg';
import Messages from '../Assets/icons/Messages.svg';

const MobileExtraNav = () => {
    return (
        <Fragment>
            <nav className='Navbar navbar2 navbar-fixed-top'>
                <div className="display-inline align-content-center container">
                <img className="pr-2 menu-mobile" alt="" width="50" src={Home}/>
                <img alt="" width="50" src={Match}/>
                <img alt="" width="50" src={Notifications}/>
                <img alt="" width="50" src={Messages}/>
                </div>
            </nav>
        </Fragment>
    );
}

export default MobileExtraNav;
