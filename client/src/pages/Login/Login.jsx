import React, { Component } from 'react';
import fire from '../../auth/firebase';
import LoginForm from '../../components/LogIn-form/LogIn-form'
import Profile from '../..//pages/Profile/Profile'

class Login extends Component {
    constructor() {
        super();
        this.state = ({
          user: null,
        });
        this.authListener = this.authListener.bind(this);
      }
      componentDidMount() {
        this.authListener();
      }
    authListener() {
        fire.auth().onAuthStateChanged((user) => {
          console.log(user);
          if (user) {
            this.setState({ user });
          } else {
            this.setState({ user: null });
          }
        });
      }
    render(){
        return (
            <>
            {this.state.user ? (<Profile/>) : (<LoginForm/>)}
            </>
            
        )
    }
}
export default Login
