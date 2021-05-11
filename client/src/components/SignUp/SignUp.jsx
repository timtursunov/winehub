import React, { Component } from 'react';
import fire from '../../auth/firebase'
class Signup extends Component {
    constructor(props) {
        super(props);

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
            <div className="Signup">
              <form className='Signup__form'>
                  <div class="Signup__section-div">
                    <label className='Signup__label' for="exampleInputEmail1">Email address</label>
                    <input className='Signup__input' value={this.state.email} onChange={this.handleChange} type="email" name="email"  placeholder="Enter email" />
                  </div>
                  <div class="Signup__section-div">
                    <label className='Signup__label' for="exampleInputPassword1">Password</label>
                    <input className='Signup__input' value={this.state.password} onChange={this.handleChange} type="password" name="password" placeholder="Password" />
                  </div>
                  <button className='Signup__btn' type="submit" onClick={this.signup} >Signup</button>
                  <a className='Signup__link' href="/login">already have an account an account ?</a>
              </form>
            </div>
        )
    }
}
export default Signup