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
        <div className='imglg'>
          <img className='imagelg' src={lawl} alt='lg'></img> 
        </div>
        
      </section>
      


      <section className='section2'>
        <h2 className='aboutush'>Our Services</h2>
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
          <section className='servicey'>
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
          <section className='servicey'>
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
          <h2 className='aboutush'>Our Sectors</h2>
          <p className='sectorsp'>
            Lorem Ipsum is simply dummy text of the printing and typesetting <br/>
            industry. Lorem Ipsum has been the industry's standard dummy text <br/>
            ever since the 1500s
          </p>
          <p className='practicept'> <code className='sbox'>Consumer Goods & Retail</code> <code className='sbox'>Energy & Power</code> </p>
          <p className='practicept'> <code className='sbox'>Financial Institutions & Bank</code> <code className='sbox'>Infrastructure & Real Estates</code> </p>
          <p className='practicept'> <code className='sbox'>Infrastructure & Real Estates</code> <code className='sbox'>Media & Music</code> </p>
          <p className='practicept'> <code className='sbox'>Technology, Media & Telecommunications</code> <code className='sbox'>Hotels, Resorts</code> </p>
          <p className='practicept'> <code className='sbox'>Manufacturing & Agriculture</code> </p>
          </div>
        <img className='image5' src={image5} alt='lg'></img> 
      </section>


      <section className='section4'>
        <img className='image6' src={image} alt='lg'></img>
        <div className='practice'>
          <h2 className='aboutush'>Our Practices</h2>
          <p className='sectorsp'>
            Lorem Ipsum is simply dummy text of the printing and typesetting <br/>
            industry. Lorem Ipsum has been the industry's standard dummy text <br/>
            ever since the 1500s
          </p>
          <p className='sectorpt'> <code className='sbox'>Public law</code> <code className='sbox'>Projects</code>  <code className='sbox'>Commercial law & corporate</code></p>
          <p className='sectorpt'> <code className='sbox'>Employment & benefits</code> <code className='sbox'>Banking and finance</code> </p>
          <p className='sectorpt'> <code className='sbox'>Private clients</code> <code className='sbox'>Media communication and entertainment</code> </p>
          <p className='sectorpt'> <code className='sbox'>International </code> <code className='sbox'> Pro Bono</code> </p>
        </div>
      </section>


      <section className='section5'>
        <div className='partners'>
          <h2 className='aboutush'>Why A&N Partners</h2>
          
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
        <img className='image7' src={image1} alt='lg'></img>
      </section>



      
    </div>
  )
}
