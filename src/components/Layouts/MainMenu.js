import React , {Fragment} from 'react';
import Avatar from '../Assets/icons/Avatar.png';
import MobileExtraNavbar from '../Layouts/MobileExtraNav'; 
import UploadImage from '../Assets/icons/UploadImage.svg';
import DemoImage from '../Assets/icons/DemoImage.png';
import Comment from '../Assets/icons/Comment.svg';
import Like from '../Assets/icons/Like.svg';
const MainMenu = () => {
    return (
        <Fragment>
            <div>
                <MobileExtraNavbar/>
            </div>
        <div className="mr-2 ml-2 pt-1 ">
            <div className="pr-2 main-menu pt-4 mt-5 Menu mb-5 ">
                <div class="pl-3 d-inline-block">
                    <img width="30px" className="rounded-circle float-left" alt="" src={Avatar} />
                    <p className="pl-5 float font-weight-med">
                        <textarea placeholder="what is happening?" className="wave-form form-control" rows="5" cols="55">
                        </textarea>
                        <small><img alt="" src={UploadImage} /></small>
                        <span className="ml-3 btn float-right btn-gold btn-sm"> wave</span>

                    </p>
                </div>
                <hr />
                <div class="pl-3 d-inline-block">
                    <img width="30px" className="rounded-circle float-left" alt="" src={Avatar} />
                    <p className="pl-5 float font-weight-med">Lagbaja Tamedo
                    <small className="p        echo Html::endTag('div');
l-3 handle">@lagbaja</small>
                    </p>

                    <p className="pl-5 float ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur.
                    </p>
                    <p className="pl-5"><img className="Demo-Image pb-1 " alt="" src={DemoImage} /></p>
                    <small className="text-gold pl-5"><img width="20" src={Comment} alt="" /> 50</small>
                    <small className="text-gold pl-4" ><img width="20" src={Like} alt="" /> 100</small>
                </div>
                <hr />
                <div class="pl-3 d-inline-block">
                    <img width="30px" className="rounded-circle float-left" alt="" src={Avatar} />
                    <p className="pl-5 float font-weight-med">Lagbaja Tamedo
                    <small className="pl-3 handle">@lagbaja</small>
                    </p>
                    <p className="pl-5 float ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur.
                    </p>
                    <small className="text-gold pl-5"><img width="20" src={Comment} alt="" /> 50</small>
                    <small className="text-gold pl-4" ><img width="20" src={Like} alt="" /> 100</small>
                </div>
                <hr />
                <div class="pl-3 d-inline-block">
                    <img width="30px" className="rounded-circle float-left" alt="" src={Avatar} />
                    <p className="pl-5 float font-weight-med">Lagbaja Tamedo
                    <small className="pl-3 handle">@lagbaja</small>
                    </p>
                    <p className="pl-5 float ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur.
                    </p>
                    <p className="pl-5"><img className="Demo-Image pb-1 " alt="" src={DemoImage} /></p>
                    <small className="text-gold pl-5"><img width="20" src={Comment} alt="" /> 50</small>
                    <small className="text-gold pl-4" ><img width="20" src={Like} alt="" /> 100</small>
                </div>
                <hr />
                <div class="pl-3 d-inline-block">
                    <img width="30px" className="rounded-circle float-left" alt="" src={Avatar} />
                    <p className="pl-5 float font-weight-med">Lagbaja Tamedo
                    <small className="pl-3 handle">@lagbaja</small>
                    </p>
                    <p className="pl-5 float ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur.
                    </p>
                    <small className="text-gold pl-5"><img width="20" src={Comment} alt="" /> 50</small>
                    <small className="text-gold pl-4" ><img width="20" src={Like} alt="" /> 100</small>
                </div>
                <hr />
                <div class="pl-3 pb-5 d-inline-block">
                    <img width="30px" className="rounded-circle float-left" alt="" src={Avatar} />
                    <p className="pl-5 float font-weight-med">Lagbaja Tamedo
                    <small className="pl-3 handle">@lagbaja</small>
                    </p>
                    <p className="pl-5 float ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur.
                    </p>
                    <p className="pl-5"><img className="Demo-Image pb-1 " alt="" src={DemoImage} /></p>
                    <small className="text-gold pl-5"><img width="20" src={Comment} alt="" /> 50</small>
                    <small className="text-gold pl-4" ><img width="20" src={Like} alt="" /> 100</small>
                </div>
            </div>
        </div>
        </Fragment>
    );
}

export default MainMenu;
