import React, { Fragment } from 'react';
import "../Assets/css/JoinNetwork.css"
const JoinNetwork = () => {
    return (
        <Fragment>
            <div className="JoinNetwork container">
                <div className="pt-5 Join-text-big font-weight-bold text-justify text-gold">
                    Join the Social Network to meet and wave at your colleagues.
                </div>
                <div className=" pt-3 Join-items">
                    <div className=" pb-4 text-gold"> <i className="fa fa-search  pr-3"></i> Join the wave</div>
                    <div className=" pb-4 text-gold"> <i className="fa fa-users  pr-3"></i> Meetup with from your school.</div>
                    <div className=" pb-4 text-gold"> <i className="fa fa-comments-o  pr-3"></i> Read what is trending in other schools</div>
                </div>
            </div>
        </Fragment>
    );
}

export default JoinNetwork;
