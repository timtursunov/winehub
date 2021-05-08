import React, {Component} from 'react'
import MainHero from '../../components/MainHero/MainHero'
import MainConversation from '../../components/MainConversation/MainConversation'
class HomePage extends Component {
    render(){
        return (
            <div className='main'>
                <MainHero/>
                <MainConversation/>
            </div>
        )
    }
}
export default HomePage