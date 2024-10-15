import React from 'react'
import "./Header.css"
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoSearchOutline } from 'react-icons/io5';
import { LuUser2 } from 'react-icons/lu';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import DropDown from '../DropDown';

const Header = () => {
    const navigate = useNavigate();

  return (
    <header>

        <div className="header-top">
            <div className="header-top-container">
                <div className="header-top-left">
                    <ul className='left-ul'>
                        <li><a href="">About Us</a></li>
                        <li><a href="">Privacy</a></li>
                        <li><a href="">FAQ</a></li>
                        <li><a href="">Careers</a></li>
                    </ul>

                </div>

                <div className="header-top-right">
                    <ul className="order-list">
                        <li className='first-li'><a onClick={() => navigate("/wishlist")} href="">My Wishlist</a></li>
                        <li className='second-li'><a href="">Track Your Order</a></li>
                    </ul>
                    <ul className="header-social">
                    <FaFacebook className='icon' />
                    <FaInstagram className='icon' />
                    <FaTwitter className='icon' />
                    <FaLinkedinIn className='icon'/>
                    <FaYoutube className='icon' />

                    </ul>

                </div>

            </div>
        </div>

        <div className="header-mid">
            <div className="header-mid-container">
                <div className="logo" >
                    <img onClick={() => navigate("/")} src="https://preview.colorlib.com/theme/capitalshop/assets/img/logo/logo.png.webp" alt="" />
                </div>
                <nav>
                    <ul className='mid-ul'>
                        <li><a href="">Home</a></li>
                        <li><a href="">Men</a></li>
                        <li><a href="">Women</a></li>
                        <li><a href="">Baby Collection</a></li>
                        <li><a href="">Pages  </a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                    
                </nav>
                <div className="header-mid-right">
                {/* <IoSearchOutline className='mid-i' /> */}
                <DropDown className = 'dropdown' />
                <HiOutlineShoppingCart onClick={() => navigate('/basket')} className='mid-i' />
                </div>

            </div>
        </div>

        <div className="header-bottom">
            <p className='bottom-p'>
            Sale Up To 50% Biggest Discounts. Hurry! Limited Perriod Offer  <span className='span-p'>Shop Now</span>
            </p>
        </div>
      
    </header>
  )
}

export default Header
