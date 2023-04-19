import React, { Component } from 'react';
import "../components/StyleFooter.css";
import { BsFacebook } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { IoLogoWhatsapp } from 'react-icons/io';
import { FaHospital } from "react-icons/fa";





class Footer extends Component{
    
    render() { 
        return (   

         <div>
        <footer className='footer-distributed' >
<div className='footer-left'>

    <h3> SecureLife<span>  <FaHospital size="1em"/>Hospital</span></h3>
   
    <p className='footer-links'>

   | <a href="/">HOME</a> |
         <br/>
    |    <a href="/about">ABOUT</a> |
         <br/>
     |   <a href="/gallery">GALLERY </a> |
        <br/>
        |   <a href="/regPatient">CONTACT</a> |
    </p>
   
</div>

<div className='footer-center'>
    <div>
        <i className="fa fa-map-marker"></i>
        <p><span>Gaziabad Delhi</span> </p>
    </div>
    <div>
        <i className='fa fa-phone'></i>
        <p>+91-9540925945</p>
    </div>
    <div>
        <i className='fa fa-envelope'></i>
        <p><a href="#">SecureLife@gmail.com</a></p>
    </div>
</div>
<div className='footer-right'>
    <p className='footer-company-about'>
    <h4>Opening Hour</h4>
        <span>Monday-Friday: 9:00 am to 10:30 pm<br></br>
        Saturday-Sunday: 10:00 am to 2:00 pm</span>
        
    </p>
    <div className='footer-icon'>
        <a href='#' > <BsFacebook/> </a>
        <a href='#' > < FaLinkedin/> </a>
        <a href='#' > < AiFillTwitterCircle/> </a>
        <a href='#' > < IoLogoWhatsapp/> </a>
        


     
        
    </div>
</div>

        </footer>
        <div>
<p className='footer-name'>copyright @ 2023 <strong>SecureLife Hospital</strong> All rights reserved</p>
</div>
  </div>

          );
        }
    }
    export default Footer;


    
    
    