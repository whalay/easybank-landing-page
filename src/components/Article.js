import React from 'react'
import currency from '../components/images/image-currency.jpg';
import restaurant from '../components/images/image-restaurant.jpg';
import plane from '../components/images/image-plane.jpg';
import confetti from '../components/images/image-confetti.jpg';

const articleList = [{
    image: currency,
    name: 'By Claire Robinson',
    title: 'Receive money in any currency with no fees',
    body: 'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single'
},
{
    image: restaurant,
    name: 'By Wilson Hutton',
    title: 'Treat yourself without worrying about money',
    body: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …"
},
{
    image: plane,
    name: 'By Wilson Hutton',
    title: 'Take your Easybank card wherever you go',
    body: 'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …'
},
{
    image: confetti,
    name: 'By Claire Robinson',
    title: 'Our invite-only Beta accounts are now live!',
    body: 'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...…'
},];

const Article = () => {
    return (
        <div name='article' className=' max-w-[1270px] items-center block my-20  m-auto font-Public '>
            <h1 className='text-center md:text-left text-4xl py-6 font-semibold'>Latest Articles</h1>
            <div className='md:flex md:justify-between md:gap-6'>
                {articleList.map((list) => {
                    return (
                        <div className='text-left m-auto p-10 md:p-0'>
                            <img src={list.image} alt="" className=' m-auto ' />
                            <div className='px-4'>
                                <p className='text-xs pt-6'>{list.name}</p>
                                <h2 className='text-2xl font-semibold py-2'>{list.title}</h2>
                                <p className='text-xl py-1'>{list.body}</p>
                            </div>
                        </div>
                    );
                })};
                
            </div>
        </div>
    )
}

export default Article