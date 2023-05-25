import React from 'react';
import pfp from '../../images/Grad_Photo.png';

const About = () => {
    return (
        <div className='bg-slate-300 p-2'>
            <div className='font-bold flex justify-center text-4xl m-4 p-2'>About Me</div>
            <div className='flex justify-center'>
                <img className='w-60 h-60 rounded-full' src={pfp} alt='profile picture'/>
            </div>

    <div className='flex justify-center'>
        <div className='mt-10 max-w-4xl text-center text-xl leading-loose'>
           <p> Hello, my name is Antonio. I'm an avid full-stack web developer. </p>
            <br></br>
           <p> My experience in frontend development lies in HTML, CSS, and JavaScript to create responsive and user-friendly web applications.
            I have also taken an interest in backend development as I have worked with languages such as Node, Express, and SQL in order to build secured
            and optimized applications. Some of my favorite frameworks and libraries to work with include Express, React, and Tailwind. I am currently familiarizing  
            myself with databases and cloud hosting platforms such as Heroku, MongoDB, and MySQL. </p>
            <br></br>
           <p>I am always looking to expand my knowledge of both the front and back ends of development and am finding ways to implement
            new technologies into my work! I especially enjoy curating my projects through GitHub as it allows me to work in a collaborative 
            setting with others. </p>
            <br></br>
            Let's Connect!
        </div>
    </div>
        </div>
    )
}

export default About;
