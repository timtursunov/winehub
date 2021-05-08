import React, {Component} from 'react'
const NavItems = [
    {
        itemName: 'about',
        to: '/about'
    },
    {
        itemName: 'stocklist',
        to: '/stocklist'
    },
    {
        itemName: 'blog',
        to: '/blog'
    }
]
class Header extends Component {
    render(){
        return (
            <div className='header'>
                <div className='header__logo-div'>
                    <a href='/' className='header__heading'>WineHub</a>
                </div>
                <nav className='header__nav'>
                    {NavItems.map((item, i) => {
                        return(
                            <div key={i} className='header__nav-item'><a className='header__nav-paragraph' href={item.to}>{item.itemName}</a></div>
                        )
                    })}
                </nav>
            </div>
        )
    }
}
export default Header