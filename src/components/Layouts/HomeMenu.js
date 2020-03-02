import React from 'react';
import Home from '../Assets/icons/Home.svg';
import Match from '../Assets/icons/Match.svg';
import Notifications from '../Assets/icons/Notifications.svg';
import Messages from '../Assets/icons/Messages.svg';
import Avatar from '../Assets/icons/Avatar.png';
const HomeMenu = () => {
    return (
        <div className="ml-4 mr-4">
            <div className="mt-5 Menu mb-5 ">
                <div className="menu pl-1 card-body">
                    <div className="pl-3 pt-2 pb-3 menu-items">
                        <img width="30px" className="float-left" alt="" src={Home} />
                        <p className="pl-5 menu-text text-gold">Home</p>
                    </div>
                    <div className="pl-3 pt-2 pb-3 menu-items">
                        <img width="30px" className="float-left" alt="" src={Match} />
                        <p className="pl-5 menu-text text-gold">Find match</p>
                    </div>
                    <div className="pl-3 pt-2 pb-3 menu-items">
                        <img width="30px" className="float-left" alt="" src={Notifications} />
                        <p className="pl-5 menu-text text-gold">Notifications</p>
                    </div>
                    <div className="pl-3 pt-2 pb-3 menu-items">
                        <img width="30px" className="float-left" alt="" src={Messages} />
                        <p className="pl-5 menu-text text-gold">Messages</p>
                    </div>
                    <div className="pl-3 pt-2 pb-3 menu-items">
                        <img width="30px" className="rounded-circle float-left" alt="" src={Avatar} />
                        <p className="pl-5 menu-text text-gold">Profile</p>
                    </div>
                    <div className="btn btn-sm btn-gold">
                        Wave
                </div>
                </div>
            </div>
        </div>
    );
}

export default HomeMenu;
