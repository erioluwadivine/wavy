import React, { Fragment } from 'react';
import JoinNetwork from "../Layouts/JoinNetwork"
import SignUpForm from '../forms/SignUpForm'
import '../Assets/css/SignUp.css'
const SignUp = () => {
  return (
    <Fragment>
      <div className="flex-center row no-gutters ">
        <div className="container Join col-sm-5  col-md-5">
          <JoinNetwork />
        </div>
        <div className="col-md-6">
            <SignUpForm/>
        </div>
      </div>
    </Fragment>
  );

}

export default SignUp;
