import React, { Component } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import ProfileModal from '../../components/ProfileModal/ProfileModal';
import fire from '../../auth/firebase'

class MyProfile extends Component {
    constructor(props) {
        super(props);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.updateInventory = this.updateInventory.bind(this);
        this.deleteInventoryItem = this.deleteInventoryItem.bind(this);
        this.logout = this.logout.bind(this);
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
    logout() {
        fire.auth().signOut();
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
                <div className='profile__text'>
                    <h1>Wagwan Tim! here are </h1>
                    <h2 className='profile__heading'>Your Products</h2>
                    <button className='profile__btn' onClick={()=>this.openModal()}>add</button>
                </div>
                <div className='profile__table-div'>
                    <table className='profile__table'>
                            <tr className='profile__table-labelSection'>
                                <th className='profile__name'>name</th>
                                <th className='profile__country'>country</th>
                                <th className='profile__region'>region</th>
                                <th className='profile__year'>year</th>
                                <th className='profile__grape'>grape</th>
                                <th className='profile__category'>category</th>
                                <th className='profile__price'>price</th>
                                <th className='profile__qty'>qty</th>
                                <th className='profile__edit'></th>
                                <th className='profile__delete'></th>
                            </tr>
                            {this.state.wines.map(({_id, name, price, qty, year, country, grape, region, category}) =>
                            <tr className='profile__table-productSection' key={_id}>
                                <th className='profile__name'>{name}</th>
                                <th  className='profile__country'>{country}</th>
                                <th  className='profile__region'>{region}</th>
                                <th className='profile__year'>{year}</th>
                                <th className='profile__grape'>{grape}</th>
                                <th className='profile__category'>{category}</th>
                                <th className='profile__price'>{price}</th>
                                <th className='profile__qty'>{qty}</th>
                                <th className='profile__edit'><button className='profile__btn' onClick={()=>this.openModal({_id, name, price, qty, year, country, grape, region, category})}>edit</button></th>
                                <th className='profile__delete'><button className='profile__btn' onClick={()=>this.deleteInventoryItem(_id)}>delete</button></th>
                            </tr>
                            )}
                        </table>
                </div>
                <div className='profile__btn-div'>
                            <button className='profile__btn' onClick={this.logout} className='profile__btn'>logout</button>
                        </div>
                <Modal isOpen={this.state.modalIsOpen} shouldCloseOnOverlayClick={true} onRequestClose={() => this.closeModal()}
                style={
                    { overlay: {backgroundColor: 'rgba(76, 64, 224, 0.75)'}}}>
                    <ProfileModal selectedItem={this.state.selectedItem} editItem={this.state.editItem} closeModal={this.closeModal} updateInventory={this.updateInventory}></ProfileModal>
                </Modal>
            </div>  
        )
    }
}
export default MyProfile