import React from 'react';
import JoinNetwork from '../Layouts/JoinNetwork';
import SigninForm from '../forms/SignInForm';
const SignIn = () => {
  return (
    <div className="row no-gutters">
      <div className="col-md-6">
        <JoinNetwork />
      </div>
      <div className="col-md-6">
      <SigninForm/>
      </div>
    </div>
  );
}

export default SignIn;
