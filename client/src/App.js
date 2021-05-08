import './App.scss';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage'
import Footer from './components/Footer/Footer'
import About from './pages/About/About'
import Login from './pages/Login/Login';
import myShop from './pages/myShop/myShop'


function App() {

  return (
    <div className="App">
        <Header/>
        <Router>
          <Switch>
            <Route exact path="/" exact component={HomePage}/>
            <Route exact path="/about" exact component={About}/>
            <Route exact path='/log-in' excat component={Login}/>
            <Route exact path='/my-shop' excat component={myShop}/>
          </Switch>
        </Router>
        <Footer/>
    </div>
  );
}
export default App;
