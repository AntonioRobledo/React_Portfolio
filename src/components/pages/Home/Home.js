import React, { useRef, useState} from 'react'; 
import './Home.css';
import 'animate.css/animate.min.css';
import Fade from 'react-reveal/Fade';
import { Link, animateScroll as scroll } from "react-scroll";
import clinicFlow from '../../../images/ClinicFlow.png';
import houseOfHorrors from '../../../images/House_Of_Horrors.png';
import Fleet from '../../../images/Fleet.png';
import emailjs from '@emailjs/browser';
import ScrollUpButton from '../../ScrollUpButton/ScrollUp';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Home = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [messageError, setMessageError] = useState('');
    const [messageSuccess, setMessageSuccess] = useState('');
  
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
    
      emailjs.sendForm('service_xwfdd0m', 'template_p4epm79', 'form', '89qxhVtXurae15Pxf')
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
        setMessageSuccess('Your message has been sent!');
        setTimeout(() => {setMessageSuccess('')}, 2000);
      }
    };

    const [text] = useTypewriter({
        words: ['a Full-Stack Web Developer.', 'a Web Designer.', "an Innovator."],
        loop: {},
        delaySpeed: 700,
        typeSpeed: 50,
        deleteSpeed: 30,
    });

    {/*HOME SECTION*/} {/*HOME SECTION*/} {/*HOME SECTION*/} {/*HOME SECTION*/} {/*HOME SECTION*/} {/*HOME SECTION*/} {/*HOME SECTION*/} {/*HOME SECTION*/} 

    return (
        <div id='hero' className=''>
            <div className='h-screen w-screen'>

                <h1 className='animate__animated animate__fadeInDown animate__slow font-bold text-6xl m-4 p-2 pt-32 text-center leading-relaxed text-slate-800 opacity-80'>
                    Hi, I'm <span style={{color: '#00cdac'}}>Antonio.</span>
                <br></br>
                     I'm <span>{text}</span>
                    <Cursor/>
                </h1>

        <div className='flex justify-center animate__animated animate__fadeInUp animate__slow animate__delay-1s'>
            <div id='navSkills' className='inline-flex text-3xl font-semibold gap-4' style={{color: '#00cdac'}}>
                <div className='button p-1 border-btnColor2 hover:bg-gradient-to-r from-btnColor1 to-btnColor2 hover:text-slate-200 hover:cursor-pointer'>
                    <Link to='Skills' spy={true} smooth={true} offset={0} duration={1000}>
                    <Fade>
                    Skills
                    </Fade>
                    </Link>
                </div>
                <div className='button p-1 border-main hover:bg-gradient-to-r from-btnColor1 to-btnColor2 hover:text-slate-200 hover:cursor-pointer'>
                    <Link to='Projects' spy={true} smooth={true} offset={200} duration={1000}>
                    <Fade>
                    Projects
                    </Fade>
                    </Link>
                </div>
                <div className='button p-1 border-main hover:bg-gradient-to-r from-btnColor1 to-btnColor2 hover:text-slate-200 hover:cursor-pointer'>
                    <Link to='About' spy={true} smooth={true} offset={0} duration={1000}>
                    <Fade>
                    About
                    </Fade>
                    </Link>
                    </div>
                <div className='button p-1 border-main hover:bg-gradient-to-r from-btnColor1 to-btnColor2 hover:text-slate-200 hover:cursor-pointer'>
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

        <div id='Skills' className='bg-gradient-to-r from-btnColor1 to-btnColor2 mt-96 pb-36'> 
                <div className='flex flex-col place-items-center pt-10 animate__animated animate__fadeInUp animate__slow animate__delay-1s'>
                    <Fade left>
                    <h1 className='font-bold text-5xl text-white opacity-90 tracking-wider'>SKILLS</h1>
                    {/* ADD TYPESCRIPT, NEXT.JS, VERCEL */}
                        <div className='skillsContainer flex flex-row place-items-center pt-20'>
                            
                            <div className='max-w-2xl mr-16 animate__animated animate__fadeInLeft'>
                                <img src='https://static.vecteezy.com/system/resources/previews/019/153/003/original/3d-minimal-programming-icon-coding-screen-web-development-concept-laptop-with-a-coding-screen-and-a-coding-icon-3d-illustration-png.png'></img>
                            </div>
                            
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
                                        <div className='rounded-2xl font-semibold tracking-widest flex items-center gap-4 p-6'>
                                            <div className='text-md ml-2 text-center'>
                                                <img src='https://www.danny-berger.dev/static/d42672d4d185739d26257ed5c653c740/e8676/node.png'></img>
                                            Node.js</div>
                                            <div className='text-lg mt-2 ml-3'>
                                                <img className='ml-2 expressIcon' src='https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png'></img>
                                            Express.js</div>
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
                                                <img className='w-14 h-14 ml-1' src='https://cdn-icons-png.flaticon.com/512/25/25231.png'></img>
                                            GitHub</div>                                            
                                        </div>
                                    </div>
                                </div>
                        </div>
                        </Fade>
                </div>

        </div>

        {/*PROJECT SECTION*/}   {/*PROJECT SECTION*/}   {/*PROJECT SECTION*/}   {/*PROJECT SECTION*/}   {/*PROJECT SECTION*/}   {/*PROJECT SECTION*/}   {/*PROJECT SECTION*/} 

    <div id='Projects' className='animate__animated animate__fadeInUp animate__slow p-4'> 
        <Fade left delay={250} duration={1300}>
        <h1 className='text-4xl flex justify-center text-black opacity-90 mb-12 tracking-wider'>PROJECTS</h1>
        </Fade>
    <div className='container'>
        <div className='project-wrapper'>

        <div className='row flex flex-row'>
                <div className='project-columns col-lg-4 col-sm-12'>
                    <Fade left delay={250} duration={1300} className='project-wrapper-description'>
                        <h3 className='project-title'>ClinicFlow</h3>
                        <div>
                            <div className='tech-stack flex flex-row flex-wrap'>
                                <div class='tech'>Next.js</div>
                                <div class='tech'>React</div>
                                <div class='tech'>Node/Express</div>
                                <div class='tech'>MySQL</div>
                                <div class='tech'>MongoDB</div>
                                <div class='tech'>Auth.js</div>
                                <div class='tech'>Bcrypt</div>
                                <div class='tech'>Tailwind</div>
                            </div>
                        <p className='collaborators'>
                            Solo Project
                        </p>
                        <p className='project-description font-sans font-normal'>
                            Clinic management software designed for healthcare workers to keep patient information in an organized portal. 
                        </p>
                        </div>
                    <a href='https://fleet-rental.herokuapp.com/' target='_blank' rel='noopener noreferrer' className='project-button border-2 p-1 border-main hover:bg-gradient-to-r from-btnColor1 to-btnColor2 hover:text-white'>
                        Application
                    </a>
                    <a href='https://github.com/AntonioRobledo/Clinic_Flow' target='_blank' rel='noopener noreferrer' className='project-button border-2 p-1 border-main hover:bg-gradient-to-r from-btnColor1 to-btnColor2 hover:text-white'>
                        GitHub
                    </a>
                    </Fade>
                </div>
                <div className='col-lg-8 col-sm-12 pt-2 project-image'>
                    <Fade right delay={250} duration={1300}>
                        <div className='flex justify-center '>
                            <img className='clinicFlow' src={clinicFlow} title='ClinicFlow - a clinic management system!'></img>
                        </div>
                    </Fade>
                </div>
            </div>
        
            <div className='row flex flex-row'>
                <div className='project-columns col-lg-4 col-sm-12'>
                    <Fade left delay={250} duration={1300} className='project-wrapper-description'>
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
                    <a href='https://github.com/AntonioRobledo/Fleet' target='_blank' rel='noopener noreferrer' className='project-button border-2 p-1 border-main hover:bg-gradient-to-r from-btnColor1 to-btnColor2 hover:text-white'>
                        GitHub
                    </a>
                    </Fade>
                </div>
                <div className='col-lg-8 col-sm-12 pt-2 project-image'>
                    <Fade right delay={250} duration={1300}>
                        <div className='flex justify-center '>
                            <img className='fleetImg' src={Fleet} title='Fleet - A Car Rental & Delivery Service!'></img>
                        </div>
                    </Fade>
                </div>
            </div>

            <div className='row flex flex-row'>
                <div className='project-columns col-lg-4 col-sm-12'>
                    <Fade left delay={250} duration={1300} className='project-wrapper-description'>
                        <h3 className='project-title'>House of Horrors</h3>
                        <div>
                            <div className='tech-stack flex flex-row flex-wrap'>
                                <div class='tech'>Node/Express</div>
                                <div class='tech'>MySQL</div>
                                <div class='tech'>Sequelize</div>
                                <div class='tech'>Bcrypt</div>
                                <div class='tech'>Handlebars</div>
                                <div class='tech'>Axios</div>
                                <div class='tech'>Bulma</div>
                            </div>
                        <p className='collaborators'>
                            Collaborators: <span className='font-sans italic font-medium'>Nathaniel Vanderpoort, Changhyun Cho, Daniella Ferrufino, Esfan Behbehani</span>
                        </p>
                        <p className='project-description font-sans font-normal'>
                            An application designed for horror movie enthusiasts where users can search for their
                            favorite horror films, leave reviews, and add movies to their own personalized watchlists!
                        </p>
                        </div>
                    <a href='https://dry-refuge-68933.herokuapp.com/login' target='_blank' rel='noopener noreferrer' className='project-button border-2 p-1 border-main hover:bg-gradient-to-r from-btnColor1 to-btnColor2 hover:text-white'>
                        Application
                    </a>
                    <a href='https://github.com/AntonioRobledo/House_Of_Horrors' target='_blank' rel='noopener noreferrer' className='project-button border-2 p-1 border-main hover:bg-gradient-to-r from-btnColor1 to-btnColor2 hover:text-white'>
                        GitHub
                    </a>
                    </Fade>
                </div>
                <div className='col-lg-8 col-sm-12 pt-2 project-image'>
                    <Fade right delay={250} duration={1300}>
                        <div className='flex justify-center '>
                            <img className='houseOfHorrorsImg ' src={houseOfHorrors} title='House of Horrors - a database for horror films'></img>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    </div>
</div>

    {/*ABOUT SECTION*/}  {/*ABOUT SECTION*/}  {/*ABOUT SECTION*/}  {/*ABOUT SECTION*/}  {/*ABOUT SECTION*/}  {/*ABOUT SECTION*/}  {/*ABOUT SECTION*/}

   <div id='About' className='p-2 bg-gradient-to-r from-btnColor1 to-btnColor2'>
        <div className='flex justify-center'>
            <div className='mt-10 max-w-4xl text-center text-xl leading-loose text-slate-200'>
                <Fade up delay={250}>
                <h1 className='text-5xl tracking-wider pt-2'>ABOUT</h1>
                <div className='pt-10 p-6'>
                    <p className='mt-6'>Having graduated from UCI's Full Stack Web Development Bootcamp, my desire to create remarkable web applications
                    has grown increasingly so. Eager to go beyond the scope of the classroom, I began to look at different ways to become more involved
                    within the industry.
                    </p>
                <br></br>
                    <p> Eventually, I found my way into a community of other like-minded developers who sought to create innovative applications. Coming from a background in
                        hospitality, I love being able to connect and collaborate with others and bring their ideas to fruition. In a world of technology that's constantly evolving, I stay
                        on top of how I can integrate the next best tech into my projects. 
                    </p>
                        <br></br>

                    <div className='flex justify-center pb-8 pt-4'> 
                        <a href='https://docs.google.com/document/d/1ZZ6ijcZ-qQxPnE7NafcoRw-_xb2X_O4FE_9thZewP3Q/export?format=pdf' className='resume-button'>RESUME</a>
                    </div>
                </div>
                </Fade>
                </div>
            </div>
        </div>

   {/*CONTACT SECTION*/}  {/*CONTACT SECTION*/}  {/*CONTACT SECTION*/}  {/*CONTACT SECTION*/}  {/*CONTACT SECTION*/}  {/*CONTACT SECTION*/}

   <div id='Contact' className='flex justify-center text-slate-700 pb-10 pl-3'>
      <div className='flex justify-center'>
        <div className='mt-10 text-center'>
      <Fade up delay={250}>
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
            class='h-48 p-2.5 w-96 mb-6 m-2 mr-6 border-2 border-slate-400 rounded' 
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
            className='submitButton text-btnColor2 hover:text-white font-bold py-2 px-5 mb-6 rounded'
            type='submit' value='Send'>
              Submit
            </button>
            {messageSuccess && (
            <div className='text-blue-500 font-bold m-4 pb-4'>
                <p>{messageSuccess}</p>
            </div>
                )}
          </div>

        </form>
        </Fade>
        </div>
        </div>
      </div>
        <ScrollUpButton />
    </div>
    )
}

export default Home;
