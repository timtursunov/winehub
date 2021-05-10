import './App.scss';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage'
import Footer from './components/Footer/Footer'
import About from './pages/About/About'
import myShop from './pages/myShop/myShop'
import StockList from './pages/StockList/Stocklist'
import Blog from './pages/Blog/Blog'
import Profile from './pages/Profile/Profile'


function App() {

  return (
    <div className="App">
        <Header/>
        <Router>
          <Switch>
            <Route exact path="/" exact component={HomePage}/>
            <Route exact path="/about" exact component={About}/>
            <Route exact path='/my-shop' excat component={myShop}/>
            <Route exact path='/stocklist' excat component={StockList}/>
            <Route exact path='/blog' excat component={Blog}/>
            <Route exact path='/profile' excat component={Profile}/>
            
          </Switch>
        </Router>
        <Footer/>
    </div>
  );
}
export default App;
