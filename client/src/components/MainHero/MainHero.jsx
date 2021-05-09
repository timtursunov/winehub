import React, { Component } from 'react';
import HeroImage from "../../assets/images/shayna-douglas-VJfTDNF_rnc-unsplash.jpg";
import {ReactComponent  as ScrollDownIcon } from "../../assets/icons/keyboard_arrow_down_black_24dp.svg"


class MainHero extends Component {
    
    render(){
        const months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
        ];
        const d = new Date();
        return (
                <div className='mainHero'>
                    <figure className='mainHero__image-subdiv'>
                        <div className='mainHero__image-div'>    
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