import axios from 'axios';
import React, { Component } from 'react';
import Modal from 'react-modal';
class Stocklist extends Component {
        constructor(props) {
            super(props)
            this.openModal = this.openModal.bind(this)
            this.closeModal = this.closeModal.bind(this)
    }
    state = {
        wines: [],
        modalIsOpen: false,
        // _id: null,
        // name: ''
    }
    openModal(id, itemName) {
        this.setState({
            modalIsOpen : true,
            // currentId: _id,
            // currentName: name
        });
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
                <div >
                    <h2>now serving!!</h2>
                    <div className='stocklist__ wines'>
                        <div className='stocklist__wines-container'>
                            {this.state.wines.map(({ name, price, category, grape, country, region, qty, instock, year ,description ,image}) => (
                                <div className='stocklist__wine'>
                                    <div className='stocklist__wine-card'>
                                        <div className='stoclist__wine-img'></div>
                                        <div className='stocklist__wine-bio'>
                                            <p className='stocklist__wine-name'>{name}</p>
                                            <p className='stocklist__wine-price'>{price}</p>
                                        </div>
                                        <div>
                                            {/* <button onClick={()=> this.openModal(_id, name)}></button> */}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>    
                    </div>
                </div>
                <Modal     
                style={
                    { overlay: {backgroundColor: 'rgba(19, 24, 24, 0.75)'}}}>
                </Modal>
            </div>  
        )
    }
}
export default Stocklist
