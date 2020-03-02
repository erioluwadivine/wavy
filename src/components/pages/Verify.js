import React, { Component } from 'react';
import VerifyForm from "../forms/VerifyForm";
import JoinNetwork from "../Layouts/JoinNetwork";
export class Verify extends Component {
  render() {
    return (
      <div className="pt-5 pb-5 row no-gutters">
        <div className="col-md-6">
            <JoinNetwork/>
        </div>
        <div className="col-md-6">
            <VerifyForm/>
        </div>
      </div>
    );
  }
}

export default Verify;
