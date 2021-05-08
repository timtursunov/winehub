import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fire from '../../auth/firebase';

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
          
    render(){
        return (
            // <div className='log-in'>
            //     <div className='log-in__container'>
            //         <div className='log-in__heading-div'>
            //             <h2 className='log-in__heading'>
            //             Hi There! Please Log in to see more
            //             </h2>
            //         </div>
            //         <form className='log-in__form'>
            //             <input value={this.state.email} onChange={this.handleChange} type="text" name="name" placeholder='email' />
            //             <input value={this.state.password} onChange={this.handleChange} type="text" name="name" placeholder='password' />
            //             <input onClick={this.login} type="submit" value="Log in" />
            //         </form>
            //         <div>
            //             <a href="/sign-up">Not on WineHub yet? Sign Up</a>
            //         </div>
            //     </div>
            // </div>  
        <div className="log-in">
            <form className='log-in__form'>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input value={this.state.email} onChange={this.handleChange} type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                    <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input value={this.state.password} onChange={this.handleChange} type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <button type="submit" onClick={this.login} class="btn btn-primary">Login</button>
                <button onClick={this.signup} style={{marginLeft: '25px'}} className="btn btn-success">Signup</button>
            </form>
      </div>
        )
    }
}
export default LoginForm




