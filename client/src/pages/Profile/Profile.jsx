import React, { Component } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import ProfileModal from '../../components/ProfileModal/ProfileModal';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.updateInventory = this.updateInventory.bind(this);
        this.deleteInventoryItem = this.deleteInventoryItem.bind(this);
    }
    state = {
        wines: [],
        modalIsOpen: false,
        selectedItem: {},
        editItem: false

    }
    componentDidMount() {
        axios.get('http://localhost:8080/my-shop')
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
    deleteInventoryItem(id) {
        // const id = this.state.currentId
        axios.delete('http://localhost:8080/my-shop/' + id, {
            }).then((data) => {
                console.log("****** data", data)
                this.setState({
                    wines: data.data,
                })
                // this.closeModal()
            }).catch((err) => {
                // this.closeModal()
                console.log('oops', err)
            })
    }
    updateInventory(inventory) {
        this.setState({
            wines : inventory
        })
    }
    openModal(data) {
        if (data) {
            let selectedItem = {...data}
            this.setState({
                modalIsOpen : true,
                selectedItem,
                editItem: true
            });
        } else {
            let selectedItem = {
                _id: '',
                name: '',
                price: '', 
                qty: '', 
                year: '', 
                country: '', 
                grape: '',
                region: '', 
                category: ''
            }
            this.setState({
                modalIsOpen : true,
                selectedItem,
                editItem: false,
            });
        }
    }
    closeModal() {
        let selectedItem = {
            _id: '',
            name: '',
            price: '', 
            qty: '', 
            year: '', 
            country: '', 
            grape: '',
            region: '', 
            category: ''
        }
        this.setState({
            modalIsOpen : false,
            selectedItem,
            editItem: false
        });
    }
    render(){
        return (
            <div className='profile'>
                <h1>Your Products</h1>
                <div className='profile__table-div'>
                    <table className='profile__table'>
                            <button onClick={()=>this.openModal()}>add</button>
                            <tr>
                                <th>name</th>
                                <th>country</th>
                                <th>region</th>
                                <th>year</th>
                                <th>grape</th>
                                <th>category</th>
                                <th>price</th>
                                <th>qty</th>
                            </tr>
                            {this.state.wines.map(({_id, name, price, qty, year, country, grape, region, category}) =>
                            <tr key={_id}>
                                <th>{name}</th>
                                <th>{country}</th>
                                <th>{region}</th>
                                <th>{year}</th>
                                <th>{grape}</th>
                                <th>{category}</th>
                                <th>{price}</th>
                                <th>{qty}</th>
                                <button onClick={()=>this.openModal({_id, name, price, qty, year, country, grape, region, category})}>edit</button>
                                <button onClick={()=>this.deleteInventoryItem(_id)}>delete</button>
                            </tr>
                            )}
                        </table>
                </div>
                <Modal isOpen={this.state.modalIsOpen} shouldCloseOnOverlayClick={true} onRequestClose={() => this.closeModal()}>
                    <ProfileModal selectedItem={this.state.selectedItem} editItem={this.state.editItem} closeModal={this.closeModal} updateInventory={this.updateInventory}></ProfileModal>
                </Modal>
            </div>  
        )
    }
}
export default Profile