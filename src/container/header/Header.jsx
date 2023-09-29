import { React, useRef } from 'react'
import './header.css'
import { UseClickAnimation } from '../../CustomHooks/UseClickAnimation'
import people from "../../assets/people.png"
import AnimationCpn from '../../components/animation/AnimationCpn'


const Header = () => {
  const buttonRef = useRef();
  UseClickAnimation(buttonRef, {})
  return (
    <div className='gpt3__header section__padding' id="home">
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

        <div className='gpt3__header-content__input'>
          <input type="email" placeholder="Your Email 
          Address" className='gpt3__header_container-input' />

          <div className='effect-container' ref={buttonRef}>
            <button type='button'>Get Started</button>
          </div>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt="people"></img>
          <p>1600  people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <AnimationCpn />
     
    </div>
  )
}

export default Header
