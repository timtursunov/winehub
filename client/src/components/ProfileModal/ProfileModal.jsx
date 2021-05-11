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
                <div className='profileModal__heading-div'>
                    <h1 classNam='profileModal__heading'>wine editor</h1>
                </div>
                <div className='profileModal__inputs'>
                    <input className='profileModal__input' value={this.state.name ? this.state.name: ''} type="text" placeholder='name'  onChange={(event) => this.handleDescriptionChange(event, 'name')}/>
                    <input className='profileModal__input' value={this.state.price ? this.state.price: ''} type="text" placeholder='price' onChange={(event) => this.handleDescriptionChange(event, 'price')}/>
                    <input className='profileModal__input' value={this.state.qty ? this.state.qty: ''}  type="text" placeholder='qty' onChange={(event) => this.handleDescriptionChange(event, 'qty')}/>
                    <input className='profileModal__input' value={this.state.year ? this.state.year: ''} type="text" placeholder='year' onChange={(event) => this.handleDescriptionChange(event, 'year')}/>
                    <input className='profileModal__input' value={this.state.country ? this.state.country: ''} type="text" placeholder='country' onChange={(event) => this.handleDescriptionChange(event, 'country')}/>
                    <input className='profileModal__input'  value={this.state.grape ? this.state.grape: ''} type="text" placeholder='grape' onChange={(event) => this.handleDescriptionChange(event, 'grape')}/>
                    <input className='profileModal__input' value={this.state.region ? this.state.region: ''} type="text" placeholder='region' onChange={(event) => this.handleDescriptionChange(event, 'region')}/>
                    <input className='profileModal__input' value={this.state.category ? this.state.category: ''} type="text" placeholder='category' onChange={(event) => this.handleDescriptionChange(event, 'category')}/>
                </div>
                <button className='profileModal__btn' onClick={()=>this.saveItem()}>SAVE</button>
            </div>  
        )
    }
}
export default ProfileModal

