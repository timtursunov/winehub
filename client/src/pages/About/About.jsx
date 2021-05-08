import React, { Component } from 'react';
import AboutImage from '../../assets/images/christiann-koepke-szqxBF4OUsc-unsplash.jpg'

class MainHero extends Component {
    render(){
        return (
                <div className='about'>
                    <div className='about__container'>
                        <div className='about__heading-div'>
                            <h1 className='about__heading'>Our Purpose</h1>
                        </div>
                        <div className='about__paragraph-div'>
                            <p className='about__paragraph'>Amid the global pandemic, restaurants and bars faced many challenges. Take-out and delivery services became the only source of income. To gain more revenue, many pivoted into selling groceries and liquor. However, it's tough for a small business to compete with the monopoly prices of LCBO. LCBO doesn't export the alcohol at the wholesale price, making it almost impossible for the small business to be convenient for the customer. On the other side, restaurants and bars aren't entirely dependent on LCBO wholesale and can import liquor in many different ways, making their selection unique and attractive for the customer.
WineHub intends to solve this problem, by maximizing local business’ outreach through a blog linked to an online inventory. The inventory will allow clients to check out a wine selection of any participating restaurant and contact them directly. The blog, on the other hand will educate clients about different kinds of wine within the local business scene. Articles on the blog intend to link to the inventory so it’s easy for customers to contact their local business in case they are interested in purchasing a particular bottle. Moreover, this platform boosts local businesses backlink profile to maximize their reach within the search engine.</p>
                        </div>

                    </div>
                    <div className='about__image-div'>
                            <img className='about__image' src={AboutImage} alt=""/>
                    </div>

                </div>
        )
    }
}
export default MainHero