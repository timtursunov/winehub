import React, { Component } from 'react';
import fire from '../../auth/firebase'

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state = {
          email: '',
          password: ''
        };
      }
      handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }
      login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        }).catch((error) => {
            console.log(error);
          });
      }
    
      signup(e){
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        }).then((u)=>{console.log(u)})
        .catch((error) => {
            console.log(error);
          })
      }
    render() {
        return(
            <div className="LoginForm">
              <form className='LoginForm__form'>
                  <div class="LoginForm__section-div">
                    <label className='LoginForm__label' for="exampleInputEmail1">Email address</label>
                    <input className='LoginForm__input' value={this.state.email} onChange={this.handleChange} type="email" name="email"  placeholder="Enter email" />
                  </div>
                  <div class="LoginForm__section-div">
                    <label className='LoginForm__label' for="exampleInputPassword1">Password</label>
                    <input className='LoginForm__input' value={this.state.password} onChange={this.handleChange} type="password" name="password" placeholder="Password" />
                  </div>
                  <button className='LoginForm__btn' type="submit" onClick={this.login} >Login</button>
                  <button className='LoginForm__btn' onClick={this.signup} style={{marginLeft: '25px'}} >Signup</button>
              </form>
            </div>
        )
    }
}

export default LoginForm