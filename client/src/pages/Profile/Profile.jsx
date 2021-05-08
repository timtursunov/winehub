import React, { Component } from 'react';
import fire from '../../auth/firebase'

class Profile extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }
    logout() {
        fire.auth().signOut();
    }

    render(){
        return (
            <div className='profile'>
                <h1>Welcome Back Tim !</h1>
                <button onClick={this.logout}>Logout</button>

            </div>  
        )
    }
}
export default Profile
