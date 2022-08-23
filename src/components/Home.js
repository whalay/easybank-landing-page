import React from 'react';

import mobile from '../components/images/mobile.svg';
import desktop from '../components/images/bg-intro-desktop.svg';
import mockups from '../components/images/image-mockups.png'

const Home = () => {
    return (
        <div name='home' className='mt-16 max-w-[1270px] md:m-auto md:flex md:flex-row-reverse md:mt-20 items-center font-Public'>
        
                <div className='w-full md:overflow-hidden md:min-w-[500px]'>
                    <img className='w-full md:hidden block' src={mobile} alt="" />
                    <img src={desktop} alt="" className='md:block hidden -translate-y-32 translate-x-20'/>
                    <img src={mockups} alt="" className='absolute -top-8 md:-mt-[650px] md:translate-x-20 md:relative' />
                </div>
                <div className='m-10 md:w-max md:pt-5'>
                    <h1 className=' md:text-left text-[40px] text-Dark-Blue text-center'>Next Generation Digital Banking</h1>
                    <p className=' md:text-left  text-xl font-medium text-center text-Grayish-Blue mt-3'>
                        Take your financial life online. Your Easybank account will be a one-stop-shop
                        for spending, saving, budgeting, investing, and much more.
                    </p>
                    <button className='m-auto block px-4 mt-7 md:ml-0 py-4 text-center shdw transition-all text-xl font-semibold text-Light-Grayish-Blue w-[250px] font-Public-Sans bg-gradient-to-r from-Lime-Green to-Bright-Cyan rounded-full '>Request Invite</button>

                </div>
           
        </div>
    )
}

export default Home