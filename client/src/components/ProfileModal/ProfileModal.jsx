import React, { Component } from 'react';
import axios from 'axios';


class ProfileModal extends Component {
    constructor(props) {
        super(props);
        this.saveItem = this.saveItem.bind(this);
    }

    state = {
        ...this.props.selectedItem
    }

    handleDescriptionChange(event, type) { 
        let newState = {}
        newState[type] = event.target.value
        this.setState({
            ...newState
        })
    }

    saveItem() {
        let body = this.state;
        if (this.props.editItem) {
            let id = this.props.selectedItem._id;
            axios.put('http://localhost:8080/my-shop/' + id, { ...body
            }).then((data) => {
                 this.props.updateInventory(data.data);
            }).catch((err) => {
                console.log('oops', err)
            })

        } else {
            delete body._id
            body = {...body, instock: true}
            axios.post('http://localhost:8080/my-shop/', {...body
            }).then((data) => {
                this.props.updateInventory(data.data);
            }).catch((err) => {
                console.log('oops', err)
            })
        }

        this.props.closeModal();
    }

    render(){
        return (
            <div className='profileModal'>
                <h1>jgjhg</h1>
                <div>
                    <input value={this.state.name ? this.state.name: ''} type="text"  onChange={(event) => this.handleDescriptionChange(event, 'name')}/>
                    <input value={this.state.price ? this.state.price: ''} type="text" onChange={(event) => this.handleDescriptionChange(event, 'price')}/>
                    <input value={this.state.qty ? this.state.qty: ''}  type="text" onChange={(event) => this.handleDescriptionChange(event, 'qty')}/>
                    <input value={this.state.year ? this.state.year: ''} type="text" onChange={(event) => this.handleDescriptionChange(event, 'year')}/>
                    <input value={this.state.country ? this.state.country: ''} type="text" onChange={(event) => this.handleDescriptionChange(event, 'country')}/>
                    <input value={this.state.grape ? this.state.grape: ''} type="text" onChange={(event) => this.handleDescriptionChange(event, 'grape')}/>
                    <input value={this.state.region ? this.state.region: ''} type="text" onChange={(event) => this.handleDescriptionChange(event, 'region')}/>
                    <input value={this.state.category ? this.state.category: ''} type="text" onChange={(event) => this.handleDescriptionChange(event, 'category')}/>
                </div>
                <button onClick={()=>this.saveItem()}>SAVE</button>
            </div>  
        )
    }
}
export default ProfileModal

// {this.state.filteredInventory.map(({ id, itemName, category, status, quantity, warehouseName }) => ( 