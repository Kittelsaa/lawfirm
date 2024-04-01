import React from 'react';
import '../styles/ContactUs.css';
import lawlg from '../images/lawlg.png';
import map from '../images/map.jpg';




export default function ContactUs() {
  return (
    <div className='contactus'>
      <section className='section6'>
        <div className='sectpartwu'>
          <p className='sectpartwup'>
            Partner with our experienced and <br/>
            passionate legal experts for customized <br/>
            solutions to your complex challenges and <br/>
            take advantage of the tremendous <br/>
            opportunities in Africa.
          </p>
          <button className='sectpartwub'>Button cta</button>
          
        </div>
      </section>
      <div className='imgwa'> 
        <img className='imagecnt' src={lawlg} alt='lg'></img> 
      </div>
      
      

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
                <div className='clinfocube'></div>
                <h4 className='clinfot'>Imaginary Rwanda</h4>
              </div>
              <div className='clinfos'> 
                <div className='clinfocube'></div>
                <h4 className='clinfot'>+250 778 888 88</h4>
              </div>
            </div>
            <div className='clinfo'>
              <div className='clinfos'>
                <div className='clinfocube'></div>
                <h4 className='clinfot'>+250 788 888 88</h4>
              </div>
              <div className='clinfos'> 
                <div className='clinfocube'></div>
                <h4 className='clinfot'>example@email.com</h4>
              </div>
            </div>
          </section>
          <img className='imagemap' src={map} alt='lg'></img> 
        </div>



        <form className="contactform" >
          <div className="form-grpc">
            <input placeholder=" First Name" type="text" name="name"/>
            <input placeholder=" First Name" type="text" name="name"/>
          </div>
          <div className="form-grc">
            <input placeholder=" First Name" type="text" name="name"/>
            <textarea placeholder="First Name" className="form-m" name="message"></textarea>
          </div>
          <button type="submit">Send a message</button>
        </form>
      </section>
      

    </div>
  )
}
