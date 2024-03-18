import React from 'react';
import '../styles/Common.css';
import Header from './Header';
import lawlg from '../images/lawlg.png';



export default function Welcomep() {
  return (
    <div className='wlcm'>
      <div className='wlcmp'>
        <Header />
        <h4 className='headerw'>Committed to Excellence</h4>
        <p className='pwlcm'>
          We are committed to build a reputation of excellence <br/>
          through our commitment to think ahead and bring  <br/>
          original solutions to our clients' most complex legal,  <br/>
          transactional and commercial challenges
        </p>
        <img className='imagelg' src={lawlg} alt='lg'></img> 
      </div>
    </div>
  )
}
