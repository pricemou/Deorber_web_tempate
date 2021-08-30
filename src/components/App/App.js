import React from 'react';
import Button from '../Button/Button';
import Footer from '../Footer/Footer';
import Menu from '../Menu/Menu';
import Header from '../Header/Header';
import Home from '../Page/Home';
import Login from '../Page/Login';
import Signup from '../Page/Signup';
import Tendance from '../Page/Tendance';
import Recuperation from '../Page/Recuperation';
import Navigation from '../Navigation/Navigation';


import {BrowserRouter as Router, Route, Switch  } from 'react-router-dom';


const App = () => {
  return(
    <div>
        <Router
        forceRefresh={true}
        >
          {/* <Navigation/> */}


          <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/Login" exact component={Login} />
                <Route path="/Signup" exact component={Signup} />
                <Route path="/Tendance" exact component={Tendance} />
                <Route path="/Recuperation" exact component={Recuperation} />
                <Route path="/" component={() => <div> ERREUR 404 </div>} />
          </Switch>
        </Router>
    </div>
  )
}

export default App;