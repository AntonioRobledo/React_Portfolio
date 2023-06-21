import React from 'react'; 
import './Home.css';
import 'animate.css/animate.min.css';
import Fade from 'react-reveal/Fade';

const Home = () => {
    return (
        <div className='p-2 bg-gradient-to-r from-green-300 to-purple-300'>
                <h1 className='animate__animated animate__fadeInDown animate__slow font-bold text-6xl m-4 p-2 pt-40 text-center leading-relaxed text-slate-800 opacity-80'>Hi, I'm <span style={{color: '#009c9b'}}>Antonio.</span>
                <br></br>
                A Full Stack Web Developer.
                </h1>

        <div className='flex justify-center animate__animated animate__fadeInUp animate__slow'>
            <div className='inline-flex text-3xl font-semibold' style={{color: '#009c9b'}}>
                <div className='border-2 p-1 border-green-600 hover:bg-green-600 hover:text-slate-200 hover:cursor-pointer'>
                    <Fade bottom>
                    Skills
                    </Fade>
                </div>
                <div className='border-2 p-1 border-green-600 hover:bg-green-600 hover:text-slate-200 hover:cursor-pointer'>Projects</div>
                <div className='border-2 p-1 border-green-600 hover:bg-green-600 hover:text-slate-200 hover:cursor-pointer'>About</div>
                <div className='border-2 p-1 border-green-600 hover:bg-green-600 hover:text-slate-200 hover:cursor-pointer'>Contact</div>
            </div>
        </div>

            <div className='About'>
                <div className='flex justify-center'>
            <div className=' font-medium mt-10 max-w-4xl text-center text-xl leading-loose text-slate-800'>
                <Fade bottom delay={250}>
                <p> My experience in frontend development lies in HTML, CSS, and JavaScript to create responsive and user-friendly web applications.
                    I have also taken an interest in backend development as I have worked with languages such as Node, Express, and SQL in order to build secured
                    and optimized applications. Some of my favorite frameworks and libraries to work with include Express, React, and Tailwind. I am currently familiarizing  
                    myself with databases and cloud hosting platforms such as Heroku, MongoDB, and MySQL. </p>
                    <br></br>
                <p>I am always looking to expand my knowledge of both the front and back ends of development and am finding ways to implement
                    new technologies into my work! I especially enjoy curating my projects through GitHub as it allows me to work in a collaborative 
                    setting with others. </p>
                <p className='pt-8'>
                    Let's Connect!
                </p>
                <p> My experience in frontend development lies in HTML, CSS, and JavaScript to create responsive and user-friendly web applications.
                    I have also taken an interest in backend development as I have worked with languages such as Node, Express, and SQL in order to build secured
                    and optimized applications. Some of my favorite frameworks and libraries to work with include Express, React, and Tailwind. I am currently familiarizing  
                    myself with databases and cloud hosting platforms such as Heroku, MongoDB, and MySQL. </p>
                    <br></br>
                <p>I am always looking to expand my knowledge of both the front and back ends of development and am finding ways to implement
                    new technologies into my work! I especially enjoy curating my projects through GitHub as it allows me to work in a collaborative 
                    setting with others. </p>
                <p className='pt-8'>
                    Let's Connect!
                </p>
                <p> My experience in frontend development lies in HTML, CSS, and JavaScript to create responsive and user-friendly web applications.
                    I have also taken an interest in backend development as I have worked with languages such as Node, Express, and SQL in order to build secured
                    and optimized applications. Some of my favorite frameworks and libraries to work with include Express, React, and Tailwind. I am currently familiarizing  
                    myself with databases and cloud hosting platforms such as Heroku, MongoDB, and MySQL. </p>
                    <br></br>
                <p>I am always looking to expand my knowledge of both the front and back ends of development and am finding ways to implement
                    new technologies into my work! I especially enjoy curating my projects through GitHub as it allows me to work in a collaborative 
                    setting with others. </p>
                <p className='pt-8'>
                    Let's Connect!
                </p>
                </Fade>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Home;
