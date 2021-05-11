import React, { Component } from 'react';
import axios from 'axios'



class StocklistModal extends Component {
    constructor(props) {
        super(props);

    }
    state = {
        wines: [],
    }
    componentDidMount() {
        axios.get('http://localhost:8080/my-shop/:id')
        .then((data) => {
            console.log(data.data)
            this.setState({
                wines : data.data
            })
        })
        .catch((err) => {
            console.log('oops', err)
        })
    }


    render(){
        return (
            <div className='profileModal'>
                {this.state.wines.map(({_id, name, price, qty, year, country, grape, region, category})=>
                <div>
                    <h1>{name}</h1>
                </div>

)}
            </div>  
        )
    }
}
export default StocklistModal

