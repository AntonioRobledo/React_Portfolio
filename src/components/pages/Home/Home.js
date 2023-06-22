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
                <h1 className='animate__animated animate__fadeInDown animate__slow font-bold text-6xl m-4 p-2 pt-40 text-center leading-relaxed text-slate-800 opacity-80'>Hi, I'm <span style={{color: '#009c9b'}}>Antonio.</span>
                <br></br>
                A Full Stack Web Developer.
                </h1>

        <div className='flex justify-center animate__animated animate__fadeInUp animate__slow animate__delay-1s'>
            <div className='inline-flex text-3xl font-semibold gap-4' style={{color: '#009c9b'}}>
                <div className='button border-2 p-1 border-main hover:bg-gradient-to-r from-btnColor1 to-btnColor2 hover:text-slate-200 hover:cursor-pointer'>
                    <Link to='Skills' spy={true} smooth={true} offset={-25} duration={1000}>
                    <Fade left>
                    Skills
                    </Fade>
                    </Link>
                </div>
                <div className='button border-2 p-1 border-main hover:bg-gradient-to-r from-btnColor1 to-btnColor2 hover:text-slate-200 hover:cursor-pointer'>
                    <Link to='Projects' spy={true} smooth={true} offset={-50} duration={1000}>
                    <Fade top>
                    Projects
                    </Fade>
                    </Link>
                </div>
                <div className='button border-2 p-1 border-main hover:bg-gradient-to-r from-btnColor1 to-btnColor2 hover:text-slate-200 hover:cursor-pointer'>
                    <Link to='About' spy={true} smooth={true} offset={-100} duration={1000}>
                    <Fade bottom>
                    About
                    </Fade>
                    </Link>
                    </div>
                <div className='button border-2 p-1 border-main hover:bg-gradient-to-r from-btnColor1 to-btnColor2 hover:text-slate-200 hover:cursor-pointer'>
                    <Link to='Contact' spy={true} smooth={true} offset={-100} duration={1000}>
                    <Fade right>
                    Contact
                    </Fade>
                    </Link>
                </div>
            </div>
        </div>

        {/*SKILLS SECTION*/}    {/*SKILLS SECTION*/}    {/*SKILLS SECTION*/}    {/*SKILLS SECTION*/}    {/*SKILLS SECTION*/}    {/*SKILLS SECTION*/}    {/*SKILLS SECTION*/}

        <div id='Skills' className='animate__animated animate__fadeInUp animate__slow mt-10 p-4 bg-gradient-to-r from-btnColor1 to-btnColor2'> 
        <Fade bottom delay={250}>
        <h1 className='font-bold text-4xl flex justify-center text-slate-200 opacity-90 mb-12'>SKILLS</h1>

        </Fade>
        </div>

        {/*PROJECT SECTION*/}   {/*PROJECT SECTION*/}   {/*PROJECT SECTION*/}   {/*PROJECT SECTION*/}   {/*PROJECT SECTION*/}   {/*PROJECT SECTION*/}   {/*PROJECT SECTION*/} 

        <div id='Projects' className='animate__animated animate__fadeInUp animate__slow mt-10 p-4'> 
        <Fade bottom delay={250}>
      <h1 className='font-bold text-4xl flex justify-center text-slate-700 opacity-90 mb-12'>PROJECTS</h1>

<div className='flex justify-evenly mt-4 p-2'>

  <div className='bg-slate-100 border-2 border-black hover:scale-105 rounded shadow-md ml-4 max-w-lg'>
    <img className='w-full h-80' src={employeeTracker} alt='Employee Tracker'></img>
    <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Employee Tracker</div>
          <p className="text-gray-700 text-base">
            A command line application that manages a company's employee database using Node.js, Inquirer, and MySQL.
          </p>
        </div>
        <div className='flex justify-center gap-6'>
          <a href='https://github.com/AntonioRobledo/Employee_Tracker' target='_blank'  rel="noreferrer">
            <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 hover:bg-gray-300 mr-2 '>GitHub</span>
          </a>
      </div>
  </div>

      <div className='bg-slate-100 border-2 border-black hover:scale-105 rounded shadow-md ml-4 max-w-lg'>
        <img className="w-full h-80" src={jate} alt="Just Another Text Editor"></img>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Just Another Text Editor</div>
          <p className="text-gray-700 text-base">
            A progressive web application that serves as a text editor that has functionalities both in a browser and locally on a desktop.
          </p>
        </div>
        <div className="flex justify-center gap-6">
          <a href='https://github.com/AntonioRobledo/Text_Editor' target='_blank'  rel="noreferrer">
          <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 hover:bg-gray-400 mr-2 mb-4">GitHub</span>
          </a>
          <a href='https://blooming-dawn-00607.herokuapp.com/' target='_blank'  rel="noreferrer">
          <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 hover:bg-gray-400 mr-2 mb-4">Link to App</span>
          </a>
        </div>
      </div>

      <div className='bg-slate-100 border-2 border-black hover:scale-105 rounded shadow-md ml-4 max-w-lg'>
        <img className="w-full h-80 border border-black" src={weatherDashboard} alt="Weather Dashboard"></img>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Weather Dashboard</div>
          <p className="text-gray-700 text-base">
            An application that retrieves weather forecasting based on the user's search input by utilizing the OpenWeatherMap API.
          </p>
        </div>
        <div className="flex justify-center gap-6">
          <a href='https://github.com/AntonioRobledo/Weather-Dashboard' target='_blank'  rel="noreferrer">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 hover:bg-gray-300 mr-2 mb-4">GitHub</span>
          </a>
          <a href='https://antoniorobledo.github.io/Weather-Dashboard/' target='_blank'  rel="noreferrer">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 hover:bg-gray-300 mr-2 mb-4">Link to App</span>
          </a>
        </div>
      </div>
      
    </div>

    <div className='flex justify-evenly mt-4 pt-16'>

    <div className='bg-slate-100 border-2 border-black hover:scale-105 rounded shadow-md ml-4 max-w-lg'>
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

      <div className='bg-slate-100 border-2 border-black hover:scale-105 rounded shadow-md ml-4 max-w-lg'>
        <img className="w-full h-80 border border-black" src={Fleet} alt="Weather Dashboard"></img>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Fleet</div>
          <p className="text-gray-700 text-base">
            An application for a vehicle delivery service aimed at saving people the time and hassle of going in-person
            to rent vehicles. It's simple: We deliver, You drive.
          </p>
        </div>
        <div className="flex justify-center gap-6">
          <a href='https://github.com/jackbngn/rent-a-car' target='_blank'  rel="noreferrer">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 hover:bg-gray-300 mr-2 mb-4">GitHub</span>
          </a>
          <a href='https://fleet-rental.herokuapp.com/' target='_blank'  rel="noreferrer">
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
            <div className='font-medium mt-10 max-w-4xl text-center text-xl leading-loose text-slate-200'>
                <Fade left delay={250}>
                <h1 className='text-4xl'>ABOUT</h1>
                <p className='mt-6'> As a recent graduate of the University of California, Irvine, I have had the opportunity to study in an institution
                    with peers who share a similar passion. </p>
                    <br></br>
                <p> In the fall of 2022, I challenged myself to take on a Full Stack Web Development coding bootcamp through UCI's Division of Continuing 
                    Education. Knowing that it would require months of dedication, I was eager to dive back into academia and learn new concepts, while bringing forth new perspectives,
                    and a positive attitude to every challenge.</p>
                    <br></br>
                <p>
                    When I'm not coding, you'll usually find me hanging around coffee shops in Orange County!
                </p>
                <p className='pt-8'>
                    Let's Connect!
                </p>
                </Fade>
                </div>
            </div>
        </div>

   {/*CONTACT SECTION*/}  {/*CONTACT SECTION*/}  {/*CONTACT SECTION*/}  {/*CONTACT SECTION*/}  {/*CONTACT SECTION*/}  {/*CONTACT SECTION*/}

   <div id='Contact' className='flex justify-center text-slate-700'>
      <div className='flex justify-center'>
        <div className='mt-10 text-center'>
      <Fade right delay={250}>
      <form ref={form} onSubmit={sendEmail}> 
        <h1 className='font-bold text-3xl m-2'>CONTACT</h1>
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
