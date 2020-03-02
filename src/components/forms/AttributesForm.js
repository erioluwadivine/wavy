import React from 'react';
import { Link } from 'react-router-dom';
const AttributesForm = () => {
    return (
        <div className="pt-5 pb-5">
            <div className="card container  the-form ">
                <div className="card-body">
                    <h3 className=" pt-3  font-weight-bold text-gold">Your attributes.</h3>
                    <p className="text-gold">This help to find the perfect match for you.</p>
                    <div className="inline-form md-form ">
                        <p>Personality</p>
                        <div className="form-row mb-4">
                            <div className="col">
                                <input type="radio" id="defaultRegisterFormFirstName" /> Introvert
                            </div>
                            <div className="col">
                                <input type="radio" id="defaultRegisterFormLastName" /> Extrovert
                            </div>
                            <div className="col">
                                <input type="radio" id="defaultRegisterFormLastName" /> Ambivert
                            </div>
                        </div>
                        <p>Height</p>
                        <div className="form-row mb-4">
                            <div className="col">
                                <input type="radio" id="defaultRegisterFormFirstName" /> Short
                            </div>
                            <div className="col">
                                <input type="radio" id="defaultRegisterFormLastName" /> Moderate
                            </div>
                            <div className="col">
                                <input type="radio" id="defaultRegisterFormLastName" /> Tall
                            </div>
                        </div>
                        <p>Size</p>
                        <div className="form-row mb-4">
                            <div className="col">
                                <input type="radio" id="defaultRegisterFormFirstName" /> Slim
                            </div>
                            <div className="col">
                                <input type="radio" id="defaultRegisterFormLastName" /> Moderate
                            </div>
                            <div className="col">
                                <input type="radio" id="defaultRegisterFormLastName" /> Plump
                            </div>
                        </div>
                        <p>Skin Color</p>
                        <div className="form-row mb-4">
                            <div className="col">
                                <input type="radio" id="defaultRegisterFormFirstName" /> Black
                            </div>
                            <div className="col">
                                <input type="radio" id="defaultRegisterFormLastName" /> Chocolate
                            </div>
                            <div className="col">
                                <input type="radio" id="defaultRegisterFormLastName" /> Light
                            </div>

                        </div>
                    </div>
                    <div className="float-left btn btn-gold">
                        Submit
                    </div>
                    <div className=" float-right">
                        <Link className="text-gold" to="/">
                            Skip
                        </Link>
                    </div>
                </div>
                <div className="pl-2 text-gold">
                    <p>***You can always update this in your profile settings.</p>
                    <p>***You can also fill this later as well.</p>
                </div>
            </div>
        </div>
    );
}

export default AttributesForm;
