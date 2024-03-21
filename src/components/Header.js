import React from 'react';
import '../styles/Common.css';



export default function Header() {
  return (
    <nav className='navbar'>
      <h4 className='logo'> Logo </h4>
      <ul className='navlinks'>
        <li className='navlink'>Home</li>
        <li className='navlink'>About Us</li>
        <li className='navlink' >Area of practice</li>
      </ul>
      <button className='gitbutton' >
        Get in touch
      </button>
    </nav>
  )
}


