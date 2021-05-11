import React, { Component } from 'react';
import img from '../../assets/images/jenna-duffy-eG8EXvfTBU8-unsplash.jpg'
class Stocklist extends Component {
    render(){
        return (
            <div className='blog'>
                <div className='blog__container'>
                    <div className='blog-image-div'>
                        <img className='blog__image' src={img} alt="" />
                    </div>
                    <div className='blog__text'>
                        <div className='blog__heading-div'>
                            <h1>Did You /<span className='blog__heading-subdiv'>KNOW</span>/ that?</h1>
                        </div>
                        <div className='blog__paragraph-div'>
                            <p className='blog__paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hendrerit gravida rutrum quisque non tellus orci ac auctor. Non pulvinar neque laoreet suspendisse interdum consectetur libero id. Commodo sed egestas egestas fringilla. Metus aliquam eleifend mi in nulla posuere. Duis at tellus at urna condimentum mattis pellentesque id nibh. Facilisi cras fermentum odio eu feugiat pretium. Blandit massa enim nec dui nunc mattis. Non sodales neque sodales ut etiam sit amet nisl. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Neque aliquam vestibulum morbi blandit cursus risus. Bibendum neque egestas congue quisque egestas diam in arcu. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Dolor sit amet consectetur adipiscing elit. Accumsan sit amet nulla facilisi morbi tempus. Luctus venenatis lectus magna fringilla urna. Malesuada fames ac turpis egestas integer eget aliquet nibh. Lectus magna fringilla urna porttitor rhoncus dolor. Morbi quis commodo odio aenean sed adipiscing diam donec adipiscing.</p>
                        </div>
                    </div>
                </div>
            </div>  
        )
    }
}
export default Stocklist
