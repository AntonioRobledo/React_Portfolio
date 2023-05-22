import React from 'react';
import pfp from '../../images/Grad_Photo.png';

const About = () => {
    return (
        <div className='bg-slate-300 p-2'>
            <div className='font-bold flex justify text-3xl m-4 ml-10'>About Me</div>
            <img class='flex w-40 h-40 rounded-full' src={pfp}/>

        <div className='inline-block text-justify mt-2 m-3 p-6 text-xl leading-loose'>
           <p> Hello, I'm Antonio. A full-stack web developer. </p>
            <br></br>
           <p> My experience in frontend development rests on HTML, CSS, and JavaScript to create responsive and user-friendly web applications.
            In backend development, I have worked with other languages such as Node, Express, and SQL in order to build the server-side of such 
            applications. Some of my favorite frameworks and libraries to work with include Tailwind, React, Express, and jQuery. I am also familiar 
            with databases and cloud hosting platforms such as Heroku, MongoDB, and MySQL. </p>
            <br></br>
           <p>I am always looking to expand my knowledge of both the front and back ends of development and am finding ways to implement
            new technologies into my work! I especially enjoy curating my projects through GitHub as it allows me to work in a collaborative 
            setting with others. </p>
            <br></br>
            Let's Connect!
        </div>
        </div>
    )
}

export default About;
