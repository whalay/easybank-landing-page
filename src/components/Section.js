import React from 'react'

import api from '../components/images/icon-api.svg';
import budgeting from '../components/images/icon-budgeting.svg';
import online from '../components/images/icon-online.svg';
import onboarding from '../components/images/icon-onboarding.svg';

const sectionList = [{
    image: online,
    title: 'Online Banking',
    body: 'We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.'
},
{
    image: budgeting,
    title: 'Simple Budgeting',
    body: 'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.'
},
{
    image: onboarding,
    title: 'Fast Onboarding',
    body: 'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.'
},
{
    image: api,
    title: 'Open API',
    body: 'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.'
}]

const Section = () => {
    return (
        <div name='section' className=' max-w-[1270px] items-center block mt-20 p-12 m-auto bg-Light-Grayish-Blue font-Public'>
            <h1 className=' md:text-left text-4xl text-Dark-Blue text-center '>Why choose Easybank?</h1>
            <p className=' md:text-left max-w-[700px] text-xl font-medium text-center  text-Grayish-Blue mt-3'>We leverage Open Banking to turn your bank account into your financial hub. Control
                your finances like never before.
            </p>

            <div className='md:justify-between md:text-left md:flex mt-20'>
                {sectionList.map((list) => {
                    return (
                        <div className='my-10 mr-5'>
                            <img src={list.image} alt="" className='m-auto md:ml-0 ' />
                            <h1 className=' md:text-left text-[30px] text-Dark-Blue text-center'>{list.title}</h1>
                            <p className=' md:text-left  text-xl font-medium text-center text-Grayish-Blue mt-3'>{list.body}</p>
                        </div>
                    );
                })};


            </div>
        </div>
    )
}

export default Section