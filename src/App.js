import React from 'react';
import Navbar from './components/Layouts/Navbar';
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';
import Footer from './components/Layouts/Footer';
import Verify from './components/pages/Verify';
import Attributes from './components/pages/Attributes';
import HomePage from './components/pages/HomePage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path = "/" component={SignUp}/>
        <Route exact path = "/sign-in" component={SignIn}/>
        <Route exact path = "/verify-user" component={Verify}/>
        <Route exact path = "/attributes" component={Attributes}/>
        <Route exact path = "/home" component={HomePage}/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
