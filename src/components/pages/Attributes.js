import React from 'react';
import JoinNetwork from '../Layouts/JoinNetwork';
import AttributesForm from '../forms/AttributesForm';
import "../Assets/css/JoinNetwork.css";
import "../Assets/css/SignIn.css"
const Attributes = () => {
    return (
        <div className="row no-gutters">
            <div className="pt-5 col-md-6">
                <JoinNetwork />
            </div>
            <div className="col-md-6">
                <AttributesForm />
            </div>
        </div>
    );
}

export default Attributes;
