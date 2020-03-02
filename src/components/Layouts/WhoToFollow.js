import React from 'react';
import Avatar from '../Assets/icons/Avatar.png'
const WhoToFollow = () => {
    return (
        <div className="mr-4 who-to-follow">
            <div className="mt-5 Menu mb-5 ">
                <h5 className="pl-4 pb-2 pt-4 font-weight-bold text-gold">Who to follow</h5>
                <div class="pl-3 d-inline-block">
                    <img width="30px" className="rounded-circle float-left" alt="" src={Avatar} />
                    <p className="pl-5 float font-weight-med">Lagbaja Tamedo       
                    <span className="ml-3 btn float-right btn-gold-light btn-sm"> wave</span>
                    <br /> 
                    <small className="handle">@lagbaja </small> </p>
                </div>
                <hr/>
                <div class="pl-3 d-inline-block">
                    <img width="30px" className="rounded-circle float-left" alt="" src={Avatar} />
                    <p className="pl-5 float font-weight-med">Lagbaja Tamedo                    
                    <span className="ml-3 btn float-right btn-gold-light btn-sm"> wave</span>
                    <br /> 
                    <small className="handle">@lagbaja </small> </p>
                </div>
                <hr/>
                <div class="pl-3 d-inline-block">
                    <img width="30px" className="rounded-circle float-left" alt="" src={Avatar} />
                    <p className="pl-5 float font-weight-med">Lagbaja Tamedo                    
                    <span className="ml-3 btn float-right btn-gold-light btn-sm"> wave</span>
                    <br /> 
                    <small className="handle">@lagbaja </small> </p>
                </div>
                <hr/>
                <div class="pl-3 d-inline-block">
                    <img width="30px" className="rounded-circle float-left" alt="" src={Avatar} />
                    <p className="pl-5 float font-weight-med">Lagbaja Tamedo                    
                    <span className="ml-3 btn float-right btn-gold-light btn-sm"> wave</span>
                    <br /> 
                    <small className="handle">@lagbaja </small> </p>
                </div>



            </div>
        </div>
    );
}

export default WhoToFollow;
