import axios from 'axios';
import React, { Component } from 'react';

class Stocklist extends Component {
        constructor(props) {
            super(props)
    }
    state = {

    }
    componentDidMount() {
        axios.get('http://localhost:8080/my-shop')
        .then((data) => {
            console.log(data.data)
            this.setState({
            })
        })
        .catch((err) => {
            console.log('oops', err)
        })
    }

    
    render(){
        return (
            <div className='stocklist'>
                <div >
                    <h1>yeyy
                    </h1>

                </div>
            </div>  
        )
    }
}
export default Stocklist
