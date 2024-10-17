import React from 'react'
import "./Footer.css"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";

const Footer = () => {
  return (



    <footer>
    <div className="footer-top">
        <div className="newsletter">
           <div className='subs-text'>
           <h2>Subscribe Newsletter</h2>
           <p className='p-subs'>Subscribe newsletter to get 5% on all products.</p>
           </div>

           <form action="" className='subs-form'>
            <input type="text" className='subs-input' placeholder='Enter your email' />
            <button className='subs-btn'>Subscribe</button>

           </form>


          
            <div className="footer-icons">
            <FaFacebook   className='footer-icon' />
            <FaInstagram   className='footer-icon' />
            <IoLogoYoutube   className='footer-icon' />
            </div>
        </div>
    </div>
    <div className="footer-middle">
        <div className="footer-logo">
            <img style={{height:"43px",width:"203px"}} src="	https://preview.colorlib.com/theme/capitalshop/assets/img/logo/logo2_footer.png" alt="Capital Shop logo" />
        </div>
        <div className="footer-links">
            <div>
                <h3>Shop Men</h3>
                <ul>
                    <li>Clothing Fashion</li>
                    <li>Winter</li>
                    <li>Summer</li>
                    <li>Formal</li>
                    <li>Casual</li>
                </ul>
            </div>
            <div>
                <h3>Shop Women</h3>
                <ul>
                    <li>Clothing Fashion</li>
                    <li>Winter</li>
                    <li>Summer</li>
                    <li>Formal</li>
                    <li>Casual</li>
                </ul>
            </div>
            <div>
                <h3>Baby Collection</h3>
                <ul>
                    <li>Clothing Fashion</li>
                    <li>Winter</li>
                    <li>Summer</li>
                    <li>Formal</li>
                    <li>Casual</li>
                </ul>
            </div>
            <div>
                <h3>Quick Links</h3>
                <ul>
                    <li>Track Your Order</li>
                    <li>Support</li>
                    <li>FAQ</li>
                    <li>Carrier</li>
                    <li>About</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
    </div>
    <div className="footer-bottom">
        <p>Copyright ©2024 All rights reserved | This template is made with <span>❤️</span> by Colorlib</p>
    </div>
</footer>

    // <footer>

    //     <div className="footer-container">
    //         <div className="subscribe-area">

    //             <div className="subs-part1">
    //                 <h3 className='subs-h3'>Subscribe Newsletter</h3>
    //                 <p className='subs-p'>Subscribe newsletter to get 5% on all products.</p>
    //             </div>
    //             <div className="subs-part2"></div>
    //             <div className="subs-part3"></div>
    //         </div>

    //         <div className="container-area"></div>

    //     </div>
      
    // </footer>
  )
}

export default Footer
