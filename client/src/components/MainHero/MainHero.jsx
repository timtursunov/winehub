import React, { Component } from 'react';
import HeroImage from "../../assets/images/shayna-douglas-VJfTDNF_rnc-unsplash.jpg";
import {ReactComponent  as ScrollDownIcon } from "../../assets/icons/keyboard_arrow_down_black_24dp.svg"


class MainHero extends Component {
    state = {
        left: 0,
        top: 0
    }
    componentDidMount() {
        document.addEventListener('mousemove', (e) => {
            this.setState({left: e.pageX, top: e.pageY});
        });
    }
    render(){
        const months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
        ];
        const d = new Date();
        return (
                <div className='mainHero'>
                    <figure className='mainHero__image-subdiv'>
                        <div style={{transform: `rotateX(${(this.state.top - (window.innerHeight) / 2) / -20 }deg) rotateY(${(this.state.left - (window.innerWidth) / 2 ) / 20}deg)`}} className='mainHero__image-div'>    
                            <img className='mainHero__image' src={HeroImage} alt="hero-image"/>
                        </div>
                    </figure>
                    <div className='mainHero__heading-div'>
                        <p className='mainHero__heading'>this month(/<span className='mainHero__heading--selected'>{months[d.getMonth()]}</span>/) favourites</p>
                    </div>
                    <ScrollDownIcon className='mainHero__icon' />
                </div>
        )
    }
}
export default MainHero