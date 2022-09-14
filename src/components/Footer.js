import React from 'react'
import logo from '../components/images/logo1.svg';
import twitter from '../components/images/icon-twitter.svg';
import pinterest from '../components/images/icon-pinterest.svg';
import youtube from '../components/images/icon-pinterest.svg';
import facebook from '../components/images/icon-facebook.svg';
import instagram from '../components/images/icon-instagram.svg';

const Footer = () => {
    return (
        <div name='footer' className='bg-Dark-Blue text-Grayish-Blue text-xl font-Public     mt-20'>
            <div  className=' max-w-[1270px] items-center md:flex md:justify-between block p-12 text-center m-auto'>
                <div className=''>
                    <img src={logo} alt="" className='m-auto color-white' />
                    <div className='flex justify-center gap-1 pt-5 items-center '>
                        <img src={instagram} alt="" />
                        <img src={twitter} alt="" />
                        <img src={youtube} alt="" />
                        <img src={pinterest} alt="" />
                        <img src={facebook} alt="" />
                    </div>
                </div>
                <div>
                    <ul className='p-5 font-semibold'>
                        <li>About Us</li>
                        <li>Contact</li>
                        <li>Blog</li>
                        <li>Careers</li>
                        <li>Support</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className=''>
                    <button className='m-auto block  mt-7 md:ml-0 py-3 text-center shdw transition-all text-xl font-semibold text-Light-Grayish-Blue w-[200px] font-Public-Sans bg-gradient-to-r from-Lime-Green to-Bright-Cyan rounded-full '>Request Invite</button>
                    <p className='py-3'>© Easybank. All Rights Reserved</p>
                </div>
                
            </div>
            <div className='text-center'>
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="/">Frontend Mentor</a>.
                Coded by <a href="https://www.holar-portfolio.netlify.app">Soliu Yusuf</a>.
            </div>
        </div>
    )
}

export default Footer