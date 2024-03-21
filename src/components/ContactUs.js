import React from 'react';
import '../styles/ContactUs.css';
import lawlg from '../images/lawlg.png';
import map from '../images/map.jpg';




export default function ContactUs() {
  return (
    <div className='contactus'>
      <img className='imagelg' src={lawlg} alt='lg'></img> 
      

      <section className='titlecontct'>  
        <h3 className='textcontct'>Contact Us</h3>
        <p className='pargcontct'>
          Lorem Ipsum is simply dummy text of the printing and <br/>
          typesetting industry. 
        </p>
      </section>


      <section className='contct'>
        <div className='mapinfo'>
          <section className='textp'>
            <div className='clinfo'>
              <div className='clinfos'> 
                <h4 className='clinfot'>Imaginary Rwanda</h4>
              </div>
              <div className='clinfos'> 
                <h4 className='clinfot'>+250 778 888 88</h4>
              </div>
            </div>
            <div className='clinfo'>
              <div className='clinfos'> 
                <h4 className='clinfot'>+250 788 888 88</h4>
              </div>
              <div className='clinfos'> 
                <h4 className='clinfot'>example@email.com</h4>
              </div>
            </div>
          </section>
          <img className='imagemap' src={map} alt='lg'></img> 
        </div>



        <form className="contactform" >
        <div className='formgrp'>
        <div className="form-group">
          <h4 className='textoi'>Name</h4>
          <input
            type="text"
            name="name"
          />
        </div>
        <div id='epcontact'>
          <div className="form-gr" >
          <h4 className='textoi'>Email</h4>
            <input
              type="email"
              name="email"
            />
          </div>
        </div>

        <div className="form-gr">
        <h4 className='textoi'>Phone</h4>
          <input
            type="tel"
            name="phone"
          />
        </div>
        </div>
        <div className="form-group">
        <h4 className='textoi'>Message</h4>
          <textarea
            name="message"
          ></textarea>
        </div>

        
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
    </form>
      </section>
      

    </div>
  )
}
