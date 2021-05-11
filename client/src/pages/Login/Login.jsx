import React, { Component } from 'react';
import fire from '../../auth/firebase'
import LoginForm from '../../components/LoginForm/LoginForm'
import MyProfile from '../..//pages/Profile/Profile'
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
            localStorage.setItem('user', user.uid);
          } else {
            this.setState({ user: null });
            localStorage.removeItem('user');
          }
        });
      }
    render() {
        return(
            <div className=''>
                {this.state.user ? (<MyProfile />) : (<LoginForm/>)}
            </div>
        )
    }
}

export default Login