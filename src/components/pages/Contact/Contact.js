import React, { useState } from 'react';
import { useRef } from 'react';
/* import { validateEmail } from '../utils/helper';*/
import emailjs from '@emailjs/browser';

export default function Contact() {
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
    <div className='flex justify-center bg-gradient-to-r from-green-300 to-purple-300 font-mono text-slate-700 text-opacity-90'>
      <div className='grid grid-rows-3'>
      <form ref={form} onSubmit={sendEmail}>
        <h1 className='font-bold text-4xl m-2'>Contact</h1>
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
        </div>
      </div>
  );
};
