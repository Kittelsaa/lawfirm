import React from 'react';
import '../styles/Common.css';
import Header from './Header';
import lawl from '../images/lawl.png';
import lawlg from '../images/lawlg.png';



export default function Welcomep() {
  return (
    <div className='wlcm'>
      <div className='wlcmp'>
        <Header />
        <div className='welc'>
        <div className='welcomehp'>
        <h4 className='headerw'>Committed to <br/> Excellence</h4>
        <p className='pwlcm'>
          We are committed to build a reputation of excellence <br/>
          through our commitment to think ahead and bring  <br/>
          original solutions to our clients' most complex legal,  <br/>
          transactional and commercial challenges
        </p>
        <button className='gitbuttonw' >
          Button cta
        </button>
        </div>
        <div className='imgwel'> 
        <img className='imagelgx' src={lawl} alt='lg'></img> 
        </div>
      </div>
        

      <div className='imgwa'> 
        <img className='imagelgwa' src={lawlg} alt='lg'></img> 
      </div>
         
      </div>
    </div>
  )
}
