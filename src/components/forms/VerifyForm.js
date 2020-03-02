import React from 'react';
import { Link } from "react-router-dom"
const VerifyForm = () => {
    return (
        <div className="container pt-5 pb-5 the-form ">
            <div className="card-body">
                <h3 className=" pt-3  font-weight-bold text-gold">Verify your account</h3>
                <p className="text-gold">A code has been sent to your phone number</p>
                <div className="inline-form md-form ">
                    <div className="form-row mb-4">
                        <div className="col">
                            <input type="text" id="defaultRegisterFormFirstName" className="form-control" />
                        </div>
                        <div className="col">
                            <input type="text" id="defaultRegisterFormLastName" className="form-control" />
                        </div>
                        <div className="col">
                            <input type="text" id="defaultRegisterFormLastName" className="form-control" />
                        </div>
                        <div className="col">
                            <input type="text" id="defaultRegisterFormLastName" className="form-control" />
                        </div>
                    </div>
                </div>
                <Link to="/attributes">
                    <div className="btn-sm btn btn-gold">
                        Verify
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default VerifyForm;
