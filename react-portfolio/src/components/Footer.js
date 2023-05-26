import React from 'react';
import GitHub from '../images/GitHub_Icon.png';
import LinkedIn from '../images/LinkedIn_Icon.png';
import Instagram from '../images/Instagram.png';

function Footer() {
    return (
        <footer className='bg-slate-300 p-12'>
            <div className='flex justify-center gap-6 mt-28'>
                <a href='https://github.com/AntonioRobledo' target='_blank'  rel="noreferrer">
                    <img src={GitHub} alt='GitHub' className='rounded-full w-14 hover:opacity-60'></img>
                </a>
                <a href='https://www.linkedin.com/in/antonio-robledo-ysasaga-23a37a1b0/' target='_blank'  rel="noreferrer">
                    <img src={LinkedIn} alt='LinkedIn' className='rounded-full w-14 hover:opacity-60'></img>
                </a>
                <a href='https://www.instagram.com/arysasaga/' target='_blank'  rel="noreferrer">
                    <img src={Instagram} alt='Instagram' className='rounded-full w-14 hover:opacity-60'></img>
                </a>
            </div>
        </footer>
    )
}

export default Footer;