import React, {useState} from 'react'
import './footer.css'
import logo1 from "../../assets/logos/ecell_abes.png"
import logo2 from "../../assets/logos/INIF_LOGO.png"
import { BsFillArrowUpRightSquareFill } from 'react-icons/bs';
import { AiOutlineMail, AiOutlineArrowRight, AiOutlineLinkedin, AiOutlineInstagram} from 'react-icons/ai';
import { CiTwitter } from 'react-icons/ci';

function Footer() {
    const [email, setEmail] = useState('');
    const handleChange = (event) => {
        setEmail(event.target.value);
      };
    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform some action with the email value here
        console.log(email);
      };

      

  return (
    <section id='footer'>
        <div className='dcontainer container-footer'>
            <div className='row-upper-f'>
                <div className='col-upper-f'>
                        <p>Stay Connected With</p>
                        <h2>Entrepreneurship cell,<br /> ABES Engineering College </h2>
                        <span>
                        <form className="form-flex"  onSubmit={handleSubmit}>
                            <input
                                type="email"
                                placeholder="Email"
                                className="subscribe-input"
                                value={email}
                                onChange={handleChange}
                                required
                            />
                            <button className="subscribe-btn-f" type="submit">
                                <AiOutlineArrowRight/>
                            </button>
                        </form>
                        </span>
                    </div>
                    <div className='col-logo inif'>
                        <img src={logo2} alt="" />
                        </div>
                </div>           
             <div className="row-bottom-f">
                <div className="col-bottom-f img1">
                <div className='col-logo'>
                        <img src={logo1} alt="" />
                        </div>
                    {/* <h4>Fueling Innovative Business Ideas to Life.</h4> */}
                    </div>
                <div className="col-bottom-f">
                    <h4>Quick Links</h4>
                    <ul className="permalinks">
                        <li><a href="#">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#event">Insights</a></li>
                        <li><a href="#team">Our Team</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                        </ul>
                    </div>
                <div className="col-bottom-f">
                    <h4>Terms and Conditions</h4>
                    <p style={{color:'#000'}}>
                        
                            This website is developed and managed by the <span style={{color:'#36d7b7', fontWeight:"800"}}> Department of Digital Infrastructure and Development, E-cell, ABES Engineering College.</span>
                            <br /><br />
                            By using this website, you agree to our Terms and Conditions, Privacy Policy and Cookie Policy.
                            <br /><br />
                            <span style={{fontSize:'.8rem', fontWeight:'800'}}>
                            © Copyright @ E-Cell ABESEC 2023
                            </span>
                        </p>
                    </div>
                <div className="col-bottom-f">
                   <h4 style={{marginBottom:'.2rem'}}>Let's Chat</h4> 
                       <span><a href="mailto:ecell@abes.ac.in"><AiOutlineMail/></a></span>  
                       <span><a href="https://instagram.com/ecell_abesec?igshid=MDM4ZDc5MmU=" target="_blank"><AiOutlineInstagram/></a></span>  
                       <span><a href="https://www.linkedin.com/in/ecell-abes-ec-4a4240172?trk=contact-info" target="_blank"><AiOutlineLinkedin/></a></span>  
                    </div>
                    </div>
                    </div>

    </section>
  )
}

export default Footer