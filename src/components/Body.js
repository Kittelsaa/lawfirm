import React from 'react';
import '../styles/Body.css';
import image3 from '../images/image3.jpg';
import lawl from '../images/lawl.png';
import image5 from '../images/image5.jpg';
import image from '../images/image.jpg';
import image1 from '../images/image1.jpg';




export default function Body() {
  return (
    <div className='body'>


      <section className='section1'>
        <img className='imgs1' src={image3} alt='k'/>
        <div className='aboutus'>
          <h4 className='learnm'>Learn more about us</h4>
          <h2 className='aboutush'>About Us</h2>
          <p className='learnmp'>
          With its headquarters in Kigali, Rwanda A & N <br/>
          Partners ambition is to establish itself as global law <br/>
          firm that helps its clients & leading businesses to <br/>
          grow, innovate and thrive.
          </p>
          <button className='learnmb'> Learn more</button>
          
        </div>
        
        
      </section>
      <div className='imglg'>
            <img className='imagelg' src={lawl} alt='lg'></img> 
          </div>


      <section className='section2'>
        <h2 className='servh'>Our Services</h2>
        <div className='services'>
          <section className='servicex'>
            <h4 className='sxh'> Strategic Consulting & Project Management.</h4>
            <p className='sxp'> 
            We assist our clients to seize <br /> 
            opportunities that arises and to <br/>
            control the associated risks by <br/>
            quantifying and qualifying the <br/>
            investment impacts on their <br/>
            business ventures.
            </p>
          </section>
          <section className='servicex'>
            <h4 className='sxh'> Strategic Consulting & Project Management.</h4>
            <p className='sxp'> 
            We assist our clients to seize <br /> 
            opportunities that arises and to <br/>
            control the associated risks by <br/>
            quantifying and qualifying the <br/>
            investment impacts on their <br/>
            business ventures.
            </p>
          </section>
          <section className='servicex'>
            <h4 className='sxh'> Strategic Consulting & Project Management.</h4>
            <p className='sxp'> 
            We assist our clients to seize <br /> 
            opportunities that arises and to <br/>
            control the associated risks by <br/>
            quantifying and qualifying the <br/>
            investment impacts on their <br/>
            business ventures.
            </p>
          </section>
          <section className='servicex'>
            <h4 className='sxh'> Strategic Consulting & Project Management.</h4>
            <p className='sxp'> 
            We assist our clients to seize <br /> 
            opportunities that arises and to <br/>
            control the associated risks by <br/>
            quantifying and qualifying the <br/>
            investment impacts on their <br/>
            business ventures.
            </p>
          </section>
        </div> 
      </section>


      <section className='section3'>
        <div className='sectors'>
          <h2 className='sectorsh'>Our Sectors</h2>
          <p className='sectorsp'>
            Lorem Ipsum is simply dummy text of the printing and typesetting <br/>
            industry. Lorem Ipsum has been the industry's standard dummy text <br/>
            ever since the 1500s
          </p>
          <p className='sectorpt'> <code className='sbox'>Consumer Goods & Retail</code> <code className='sbox'>Energy & Power</code> </p>
          <p className='sectorpt'> <code className='sbox'>Financial Institutions & Bank</code> <code className='sbox'>Infrastructure & Real Estates</code> </p>
          <p className='sectorpt'> <code className='sbox'>Infrastructure & Real Estates</code> <code className='sbox'>Media & Music</code> </p>
          <p className='sectorpt'> <code className='sbox'>Technology, Media & Telecommunications</code> <code className='sbox'>Hotels, Resorts & Tourism</code> </p>
          <p className='sectorpt'> <code className='sbox'>Manufacturing & Agriculture</code> </p>
        </div>
        <img className='imagelg' src={image5} alt='lg'></img> 
      </section>


      <section className='section4'>
        <img className='imagelg' src={image} alt='lg'></img>
        <div className='practice'>
          <h2 className='practiceh'>Our Sectors</h2>
          <p className='practicep'>
            Lorem Ipsum is simply dummy text of the printing and typesetting <br/>
            industry. Lorem Ipsum has been the industry's standard dummy text <br/>
            ever since the 1500s
          </p>
          <p className='practicept'> <code className='sbox'>Consumer Goods & Retail</code> <code className='sbox'>Energy & Power</code> </p>
          <p className='practicept'> <code className='sbox'>Financial Institutions & Bank</code> <code className='sbox'>Infrastructure & Real Estates</code> </p>
          <p className='practicept'> <code className='sbox'>Infrastructure & Real Estates</code> <code className='sbox'>Media & Music</code> </p>
          <p className='practicept'> <code className='sbox'>Technology, Media & Telecommunications</code> <code className='sbox'>Hotels, Resorts & Tourism</code> </p>
          <p className='practicept'> <code className='sbox'>Manufacturing & Agriculture</code> </p>
        </div>
      </section>


      <section className='section5'>
        <div className='partners'>
          <h2 className='partnersh'>Why A&N Partners</h2>
          
          <h4 className='partnershh'>Experienced and Passionate Legal Experts</h4>
          <p className='partnersp'>
            Young and well-equipped advocates with <br/> 
            expertise in various fields.
          </p>

          <h4 className='partnershh'>Multi-Specialist Positioning for Customized Solutions</h4>
          <p className='partnersp'>
            Delivering customized solutions to complex <br/>
            legal, transactional, and commercial <br/>
            challenges.
          </p>

          <h4 className='partnershh'>Commitment to Excellence and Ethical Standards </h4>
          <p className='partnersp'>
             Delivering clear and commercially sound <br />
             advice with high ethical standards. 
          </p>

          <h4 className='partnershh'>Strategic Partner for Economic Development with Modern Solutions </h4>
          <p className='partnersp'>
            Providing modern and creative legal <br/>
            solutions to foster economic development. 
          </p>
        </div>
        <img className='imagelg' src={image1} alt='lg'></img>
      </section>




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


      
    </div>
  )
}
