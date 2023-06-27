import React, { useRef, useState } from 'react'; 
import './Home.css';
import 'animate.css/animate.min.css';
import Fade from 'react-reveal/Fade';
import { Link, animateScroll as scroll } from "react-scroll";
import employeeTracker from '../../../images/Employee_Tracker.png';
import jate from '../../../images/JATE.png';
import weatherDashboard from '../../../images/Weather_Dashboard.png';
import houseOfHorrors from '../../../images/House_of_Horrors_2.png';
import Fleet from '../../../images/Fleet.png';

import emailjs from '@emailjs/browser';

const Home = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [messageError, setMessageError] = useState('');
  
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
    
      emailjs.sendForm('service_xwfdd0m', 'template_p4epm79', form.current, '89qxhVtXurae15Pxf')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
  
      let err = false; 
  
      // error handling for each input field
      if(name === '') {
        setNameError('Name field cannot be empty');
        err = true;
      } else {
        setNameError('');
      }
  /*     if(!validateEmail(email)) {
        setEmailError('Please enter a valid email address.');
        err = true;
      } else {
        setEmailError('');
      } */
      if (message === '') {
        setMessageError('Message cannot be empty!');
        err = true;
      } else {
        setMessageError('');
      }
  
      // this will clear the input fields after successful submission
      if (!err) {
        setName(' ');
        setEmail(' ');
        setMessage(' ');
      }
    };

    return (
        <div id='hero' className='p-2'>
            <div className='h-screen w-screen'>
                <h1 className='animate__animated animate__fadeInDown animate__slow font-bold text-6xl m-4 p-2 pt-80 text-center leading-relaxed text-slate-800 opacity-80'>
                    Hi, I'm <span style={{color: '#009c9b'}}>Antonio.</span>
                <br></br>
                    A Full Stack Web Developer.
                </h1>

        <div className='flex justify-center animate__animated animate__fadeInUp animate__slow animate__delay-1s'>
            <div className='inline-flex text-3xl font-semibold gap-4' style={{color: '#009c9b'}}>
                <div className='button border-2 p-1 border-main hover:bg-gradient-to-r from-btnColor1 to-btnColor2 hover:text-slate-200 hover:cursor-pointer'>
                    <Link to='Skills' spy={true} smooth={true} offset={-80} duration={1000}>
                    <Fade>
                    Skills
                    </Fade>
                    </Link>
                </div>
                <div className='button border-2 p-1 border-main hover:bg-gradient-to-r from-btnColor1 to-btnColor2 hover:text-slate-200 hover:cursor-pointer'>
                    <Link to='Projects' spy={true} smooth={true} offset={0} duration={1000}>
                    <Fade>
                    Projects
                    </Fade>
                    </Link>
                </div>
                <div className='button border-2 p-1 border-main hover:bg-gradient-to-r from-btnColor1 to-btnColor2 hover:text-slate-200 hover:cursor-pointer'>
                    <Link to='About' spy={true} smooth={true} offset={0} duration={1000}>
                    <Fade>
                    About
                    </Fade>
                    </Link>
                    </div>
                <div className='button border-2 p-1 border-main hover:bg-gradient-to-r from-btnColor1 to-btnColor2 hover:text-slate-200 hover:cursor-pointer'>
                    <Link to='Contact' spy={true} smooth={true} offset={-100} duration={1000}>
                    <Fade>
                    Contact
                    </Fade>
                    </Link>
                </div>
            </div>
        </div>
    </div>

        {/*SKILLS SECTION*/}    {/*SKILLS SECTION*/}    {/*SKILLS SECTION*/}    {/*SKILLS SECTION*/}    {/*SKILLS SECTION*/}    {/*SKILLS SECTION*/}    {/*SKILLS SECTION*/}

        <div id='Skills' className='p-4 bg-gradient-to-r from-btnColor1 to-btnColor2 pb-32'> 
                <div className='flex flex-col place-items-center pt-10'>
                    <Fade left>
                    <h1 className='font-bold text-5xl text-white opacity-90 tracking-wider'>SKILLS</h1>
                    </Fade>
                    
                        <div className='flex flex-row place-items-center pt-20'>
                            <Fade left>
                            <div className='max-w-2xl mr-16 animate__animated animate__fadeInLeft'>
                                <img src='https://static.vecteezy.com/system/resources/previews/019/153/003/original/3d-minimal-programming-icon-coding-screen-web-development-concept-laptop-with-a-coding-screen-and-a-coding-icon-3d-illustration-png.png'></img>
                            </div>
                            </Fade>
                            <Fade right>
                                <div className='flex flex-wrap gap-20 justify-evenly pb-6 animate__animated animate__fadeInRight'>
                                    
                                    <div className='rounded max-h-44'>
                                        <div className="px-6 py-4">
                                            <div className="font-normal text-white tracking-wider text-3xl flex justify-center">Front End</div>
                                        </div>
                                        <div className='rounded-2xl tracking-widest font-semibold flex items-center gap-4 p-4'>
                                            <div className='text-md mt-1'>
                                                <img src='https://www.danny-berger.dev/static/64ba6d76997bc51a792f321deda40db4/66640/html5.png'></img>
                                            HTML5</div>
                                            <div className='text-md mt-1 text-center'>
                                                <img src='https://www.danny-berger.dev/static/707e1342a3c3d3aa0a246bde9595efe6/66640/css.png'></img>
                                            CSS3</div>
                                            <div className='text-md mb-1'>
                                                <img className='ml-4' src='https://www.danny-berger.dev/static/efef7da8b48ca5e24cfe4474fc49b611/e8676/javascript.png'></img>
                                            JavaScript</div>
                                            <div className='text-md mt-2'>
                                                <img className='pb-1 ml-1' src='https://www.danny-berger.dev/static/f8ede54c83be00f00cf2796893115223/0efb1/react.png'></img>
                                            React</div>
                                        </div>
                                    </div>

                                    <div className='rounded max-h-44'>
                                        <div className="px-6 py-4">
                                            <div className="font-normal text-white tracking-wider text-3xl flex justify-center">Back End</div>
                                        </div>
                                        <div className=' rounded-2xl font-semibold tracking-widest flex items-center gap-4 p-3'>
                                            <div className='text-md ml-2 text-center'>
                                                <img src='https://www.danny-berger.dev/static/d42672d4d185739d26257ed5c653c740/e8676/node.png'></img>
                                            Node</div>
                                            <div className='text-lg mt-2 ml-3'>
                                                <img className='ml-2' src='https://www.danny-berger.dev/static/f50a47cbc17ab8ca183bbe9010b47ec9/e8676/express.png'></img>
                                            Express</div>
                                            <div className='text-md mt-1 ml-1'>
                                                <img className='ml-3 w-14 h-14' src='https://www.svgrepo.com/show/354333/sequelize.svg'></img>
                                            Sequelize</div>
                                            <div className='text-md'>
                                                <img className='mb-2 ml-4 pt-1' src='https://www.danny-berger.dev/static/3608866a9f2cea329729acfde8a10310/e8676/restfulapi.png'></img>
                                            RESTful API</div>
                                        </div>
                                    </div>

                                    <div className='rounded max-h-44'>
                                        <div className="px-6 py-4">
                                            <div className="font-normal text-white tracking-wider text-3xl flex justify-center">Tools</div>
                                        </div>
                                        <div className=' rounded-2xl flex font-semibold tracking-widest items-center gap-4 p-3'>
                                            <div className='text-lg text-center mt-2'>
                                                <img src='https://www.danny-berger.dev/static/728ff5a8e44d74cd0f2359ef0a9ec88a/e8676/git.png'></img>
                                            Git</div>
                                            <div className='text-lg mt-2'>
                                                <img className='ml-2' src='https://www.danny-berger.dev/static/7135045e6ed51c8094f04b6d5a9dbbc9/e8676/heroku.png'></img>
                                            Heroku</div>
                                            <div className='text-lg mt-2'>
                                                <img className='w-14 h-14 ml-1' src='https://cdn.onlinewebfonts.com/svg/img_326384.png'></img>
                                            GitHub</div>                                            
                                        </div>
                                    </div>
                                </div>
                                </Fade>
                        </div>
                </div>
        </div>

        {/*PROJECT SECTION*/}   {/*PROJECT SECTION*/}   {/*PROJECT SECTION*/}   {/*PROJECT SECTION*/}   {/*PROJECT SECTION*/}   {/*PROJECT SECTION*/}   {/*PROJECT SECTION*/} 

    <div id='Projects' className='container animate__animated animate__fadeInUp animate__slow mt-10 p-4'> 
        <Fade left delay={250} duration={1300}>
        <h1 className='text-5xl flex justify-center text-black opacity-90 mb-12 tracking-wider'>PROJECTS</h1>

    <div className='project-wrapper'>
        
        <div className='row flex flex-wrap'>
            <div className='col-lg-4 col-sm-12'>
                <Fade left className='project-wrapper-description'>
                    <h3 className='project-title'>Fleet</h3>
                    <div>
                        <div className='tech-stack flex flex-row flex-wrap'>
                            <div class='tech'>React</div>
                            <div class='tech'>Node/Express</div>
                            <div class='tech'>Stripe</div>
                            <div class='tech'>MongoDB</div>
                            <div class='tech'>GraphQL</div>
                            <div class='tech'>Apollo</div>
                            <div class='tech'>JWT</div>
                            <div class='tech'>Bcrypt</div>
                            <div class='tech'>Tailwind</div>
                        </div>
                    <p className='collaborators'>
                        Collaborators: <span className='font-sans italic font-medium'>Jack Nguyen, Nathaniel Vanderpoort, Maegan Batorek</span>
                    </p>
                    <p className='project-description font-sans font-normal'>
                        An interactive web app designed to bring vehicle delivery service to the customer with ease. Simply select a vehicle and a 
                        time frame for delivery and the rest is simple: We deliver, You drive.
                    </p>
                    </div>
                <a href='https://fleet-rental.herokuapp.com/' target='_blank' rel='noopener noreferrer' className='project-button border-2 p-1 border-main hover:bg-gradient-to-r from-btnColor1 to-btnColor2 hover:text-white'>
                    Application
                </a>
                <a href='https://github.com/jackbngn/rent-a-car' target='_blank' rel='noopener noreferrer' className='project-button border-2 p-1 border-main hover:bg-gradient-to-r from-btnColor1 to-btnColor2 hover:text-white'>
                    GitHub
                </a>
                </Fade>
            </div>
            <div className='col-lg-8 col-sm-12 pt-2'>
                <Fade left className='project-image'>
                    <div>
                        <iframe src='https://fleet-rental.herokuapp.com/' title='Fleet - A Car Rental & Delivery Service!' allowFullScreen='true'></iframe>
                    </div>
                </Fade>
            </div>
            
        </div>





        <br></br>

    <div className='bg-slate-100 border-2 border-black hover:scale-105 rounded shadow-md max-w-lg'>
        <img className="w-full h-80 border border-black" src={houseOfHorrors} alt="Weather Dashboard"></img>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">House of Horrors</div>
          <p className="text-gray-700 text-base">
            An application designed for horror movie enthusiasts where users can search for their
            favorite horror films, leave reviews, and add movies to their own personalized watchlists!
          </p>
        </div>
        <div className="flex justify-center gap-6">
          <a href='https://github.com/Bentto90/Project-2-Group-4' target='_blank'  rel="noreferrer">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 hover:bg-gray-300 mr-2 mb-4">GitHub</span>
          </a>
          <a href='https://dry-refuge-68933.herokuapp.com/login' target='_blank'  rel="noreferrer">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 hover:bg-gray-300 mr-2 mb-4">Link to App</span>
          </a>
        </div>
      </div>

      </div>
      </Fade>
   </div>

    {/*ABOUT SECTION*/}  {/*ABOUT SECTION*/}  {/*ABOUT SECTION*/}  {/*ABOUT SECTION*/}  {/*ABOUT SECTION*/}  {/*ABOUT SECTION*/}  {/*ABOUT SECTION*/}

   <div id='About' className='bg-gradient-to-r from-btnColor1 to-btnColor2'>
        <div className='flex justify-center'>
            <div className='mt-10 max-w-4xl text-center text-xl leading-loose text-slate-200'>
                <Fade left delay={250}>
                <h1 className='text-5xl tracking-wider pt-2'>ABOUT</h1>
                <div className='pt-10'>
                    <p className='mt-6'> As a recent graduate of the University of California, Irvine, I have had the opportunity to study in an institution
                        with peers who share a similar passion. </p>
                        <br></br>
                    <p> In the fall of 2022, I challenged myself to take on a Full Stack Web Development coding bootcamp through UCI's Division of Continuing 
                        Education. Knowing that it would require months of dedication, I was eager to dive back into academia and learn new concepts, while bringing forth new perspectives,
                        and a positive attitude to every challenge.</p>
                        <br></br>
                    <p>
                        When I'm not coding, you'll usually find me hanging around coffee shops in Orange County. Let's Connect!
                    </p>
                    <div className='flex justify-center pb-8 pt-4'> 
                        <a href='https://docs.google.com/document/d/1ZZ6ijcZ-qQxPnE7NafcoRw-_xb2X_O4FE_9thZewP3Q/export?format=pdf' className='resume-button'>RESUME</a>
                    </div>
                </div>
                </Fade>
                </div>
            </div>
        </div>

   {/*CONTACT SECTION*/}  {/*CONTACT SECTION*/}  {/*CONTACT SECTION*/}  {/*CONTACT SECTION*/}  {/*CONTACT SECTION*/}  {/*CONTACT SECTION*/}

   <div id='Contact' className='flex justify-center text-slate-700'>
      <div className='flex justify-center'>
        <div className='mt-10 text-center'>
      <Fade left delay={250}>
      <form ref={form} onSubmit={sendEmail}> 
        <h1 className='font-bold text-5xl m-2 tracking-wider'>CONTACT</h1>
        <div className='flex flex-col items-start'>
          <h1 className='m-4 ml-2 text-xl font-bold'>Your Name: </h1>
        </div>
          <input 
          className='flex flex-col items-center border-2 border-slate-400 rounded h-10 ml-2 p-2 w-72'
          placeholder='Name'
          type='text'
          value={name}
          name='name'
          onChange={(e) => setName(e.target.value)}/>
          
          {nameError && (
					<div className="text-red-500 font-bold m-4">
						<p>{nameError}</p>
					</div>
				)}

        <div className='flex flex-col items-start mt-4'>
          <h1 className='m-4 ml-2 text-xl font-bold'> Your Email:</h1>
        </div>
         <input
          className='flex flex-col items-center border-2 border-slate-400 rounded h-10 ml-2 p-2 w-72'
          placeholder='Email'
          type='text'
          value={email}
          name='email'
          onChange={(e) => setEmail(e.target.value)}/>

        {emailError && (
					<div className="text-red-500 font-bold m-4">
						<p>{emailError}</p>
					</div>
				)}

        <div className='flex flex-col items-start mt-6'>
          <h1 className='m-4 ml-2 pt-4 text-xl font-bold'> Leave a Message:</h1>
        </div>

          <textarea 
            id='message' 
            rows='4' 
            class='h-48 p-2.5 w-96 mb-6 m-2 border-2 border-slate-400 rounded' 
            value={message}
            placeholder='Write your thoughts here...'
            name='message'
            onChange={(e) => setMessage(e.target.value)}>
          </textarea>

          {messageError && (
					<div className="text-red-500 font-bold m-4 pb-4">
						<p>{messageError}</p>
					</div>
				)}

          <div>
            <button 
            className='bg-cyan-600 hover:bg-cyan-700 text-white font-bold ml-2 py-2 px-4 rounded-full'
            onClick={sendEmail}>
              Submit
            </button>
          </div>
        </form>
        </Fade>
        </div>
        </div>
      </div>

    </div>
    )
}

export default Home;
