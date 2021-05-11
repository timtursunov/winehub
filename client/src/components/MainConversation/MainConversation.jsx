import React, {useEffect, useRef} from 'react';
import { gsap } from "gsap";

function MainConversation (){

    const oneRef = useRef()
    const twoRef = useRef()
    const threeRef = useRef()
    const fourRef = useRef()
    useEffect(() => {
        gsap.from(oneRef.current, {x: 0} )
        gsap.to(oneRef.current, { x: -400,  duration: 4, ease:'linear', repeat: -1} )

        gsap.from(twoRef.current, {x: 0} )
        gsap.to(twoRef.current, { x: -400,  duration: 4, ease:'linear', repeat: -1} )

        gsap.from(threeRef.current, {x: 0} )
        gsap.to(threeRef.current, { x: -400,  duration: 4, ease:'linear', repeat: -1} )

        gsap.from(fourRef.current, {x: 0} )
        gsap.to(fourRef.current, { x: -400,  duration: 4, ease:'linear', repeat: -1} )

    }, [])
    return (
            
        <div className='mainConversation'>
            <div className='mainConversation__container'>
                <div className='mainConversation__image-div'>
                    <div className='mainConversation__image'>
                    </div>

                </div>
                <div className='mainConversation__wine-item'>
                    <h2 ref={oneRef} className='mainConversation__heading'>
                        <span className='mainConversation__span'>Flash of Josh</span>
                        <span className='mainConversation__span'>Flash of Josh</span>
                        <span className='mainConversation__span'>Flash of Josh</span>
                        <span className='mainConversation__span'>Flash of Josh</span>
                        <span className='mainConversation__span'>Flash of Josh</span>
                    </h2>
                </div>
                <div className='mainConversation__wine-item'>
                <h2 ref={twoRef} className='mainConversation__heading'>
                        <span className='mainConversation__span'>Buddha’s flare</span>
                        <span className='mainConversation__span'>Buddha’s flare</span>
                        <span className='mainConversation__span'>Buddha’s flare</span>
                        <span className='mainConversation__span'>Buddha’s flare</span>
                        <span className='mainConversation__span'>Buddha’s flare</span>
                    </h2>
                </div>
                <div className='mainConversation__wine-item'>
                    <h2 ref={threeRef} className='mainConversation__heading'>
                        <span className='mainConversation__span'>Trigger Happy</span>
                        <span className='mainConversation__span'>Trigger Happy</span>
                        <span className='mainConversation__span'>Trigger Happy</span>
                        <span className='mainConversation__span'>Trigger Happy</span>
                        <span className='mainConversation__span'>Trigger Happy</span>
                    </h2>
                </div>
                <div className='mainConversation__wine-item'>
                    <h2 ref={fourRef} className='mainConversation__heading'>
                        <span className='mainConversation__span'>Chilled Indian Spirit</span>
                        <span className='mainConversation__span'>Chilled Indian Spirit</span>
                        <span className='mainConversation__span'>Chilled Indian Spirit</span>
                        <span className='mainConversation__span'>Chilled Indian Spirit</span>
                        <span className='mainConversation__span'>Chilled Indian Spirit</span>
                    </h2>
                </div>

                    
                    


            </div>

        </div>
    )

}

export default MainConversation