import React from 'react';
import './footer.css'; 
import { FaBeer, FaFacebook, FaGithubSquare, FaLinkedin, FaTwitter, FaTwitterSquare } from 'react-icons/fa';

 const Footer = () => {
  return (
    <div>

    <section ClassName = 'Footer'>

    <footer class="footer-distributed">

        <div class="footer-right">

            <a href="#"><i class="fa fa-facebook"><FaFacebook /></i></a>
            <a href="#"><i class="fa fa-twitter"><FaTwitterSquare /></i></a>
            <a href="#"><i class="fa fa-linkedin"><FaLinkedin /></i></a>
            <a href="#"><i class="fa fa-github"><FaGithubSquare /></i></a>

        </div>

        <div class="footer-left">

            <p class="footer-links">
                <a class="link-1" href="#">Home</a>

               
                <a href="#">Pricing</a>

               
                <a href="#">Faq</a>
  </p>

            <p>ADDIDAS &copy; 2023</p>
        </div>

    </footer>
    </section>
    </div>
  );
};


export default Footer