import React from 'react'
import './footer.css'
import logo from "../../assets/logo.svg"

const Footer = () => {
  const redirectToWebsite = () => {
    window.location.href = 'https://openai.com/';
  };
  return (
    <div className='gpt3__footer section__padding'>
      <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
      <div className='gpt3__footer-button'>
        <button onClick={redirectToWebsite} type="button">Request Early Access</button>
      </div>
      <div className='gpt3__footer_links'>
        <div className='gpt3__footer_links_left'>
          <img src={logo} alt="logo" />
          <p>CrechterWood K12 182 DK <br />
          All Rights Reserved
          </p>
        </div>
        <div className='gpt3__footer_links_right'>
          <div className='gpt3__footer_links_right_links'>
            <h5>Links</h5>
            <ul>
              <li>Overons</li>
              <li>Social Media</li>
              <li>Workers</li>
              <li>Contacts</li>
            </ul>
          </div>
          <div className='gpt3__footer_links_right_compagny'>
            <h5>Compagny</h5>
            <ul>
            <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Contact</li>
              
            </ul>
          </div>
          <div className='gpt3__footer_links_right_getInTouch'>
            <h5>Get in touch</h5>
            <ul>
              <li>CretcherWood K12 <br></br> 182 DK Afgkglm</li>
              <li>815-1324578</li>
              <li>info@payment.net</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='gpt2__footer-copyRight'>
        <p>
        @2021 GPT-3. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
