import React from 'react';
import '../styles/Common.css';
import ContactUs from '../components/ContactUs.js';



export default function Footer() {
  return (
    <div>
      <ContactUs />
      <div className='footer'>
      <h4 className='logof'> Logo </h4>
      <ul className='navlinksf'>
        <li className='navlinkf'>Home</li>
        <li className='navlinkf'>About Us</li>
        <li className='navlinkf' >Area of practice</li>
      </ul>
      <h6 className='copy'>@Copy | Lorem ipsum</h6>
      </div>
    </div>
  )
}
