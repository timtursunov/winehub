import axios from 'axios';
import React, { Component } from 'react';
import Modal from 'react-modal';
import StocklistModal from '../../components/StockListModal/StocklistModal'
class Stocklist extends Component {
        constructor(props) {
            super(props)
            this.openModal = this.openModal.bind(this)
            this.closeModal = this.closeModal.bind(this)
    }
    state = {
        wines: [],
        modalIsOpen: false,
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
        this.setState({
            modalIsOpen : false,
            currentId: null,
            currentName: ''
        });
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
    render(){
        return (
            <div className='stocklist'>
                <div className='stocklist__section' >
                    <div className='stocklist__text-div'>
                        <h1 className='stocklist__heading'>our products</h1>
                        <p className='stocklist__paragraph'>SAINT LAWRENCE MARKET</p>
                    </div>
                    <div className='stocklist__wines'>
                        <div className='stocklist__wines-container'>
                            {this.state.wines.map(({ _id,  name, price, category, grape, country, region, qty, instock, year ,description ,image}) => (
                                <div className='stocklist__wine'>
                                    <div key={_id} className='stocklist__wine-card'>
                                        <div className='stocklist__wine-img'></div>
                                        <div className='stocklist__wine-bio'>
                                            <p className='stocklist__wine-name'>{name}</p>
                                            <p className='stocklist__wine-price'>{price}</p>
                                        </div>
                                    </div>
                                    <div>
                                            <button className='stocklist__btn' onClick={()=> this.openModal(_id, name)}>
                                                <p className='stocklist__wine-price'>see more?</p>
                                            </button>
                                        </div>
                                </div>
                            ))}
                        </div>    
                    </div>
                </div>
                <Modal  isOpen={this.state.modalIsOpen} shouldCloseOnOverlayClick={true} onRequestClose={() => this.closeModal()}    
                style={
                    { overlay: {backgroundColor: 'rgba(76, 64, 224, 0.75)'}}}>
                        <StocklistModal/>
                </Modal>
            </div>  
        )
    }
}
export default Stocklist
