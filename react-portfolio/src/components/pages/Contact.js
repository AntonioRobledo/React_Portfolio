import React, { useState } from 'react';
import { validateEmail } from '../utils/helper';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  // Preventing the default behavior of the form submit (which is to refresh the page)
  const handleFormSubmit = (e) => {
    e.preventDefault();


    let err = false; 

    // error handling for each input field
    if(name === '') {
      setNameError('Name field cannot be empty');
      err = true;
    } else {
      setNameError('');
    }
    if(!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      err = true;
    } else {
      setEmailError('');
    }
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
    <div className='flex justify-center bg-slate-300'>
      <div className='grid grid-rows-3 bg-slate-300'>

        <h1 className='font-bold text-3xl m-2'>Contact</h1>
        <div className='flex flex-col items-start'>
          <h1 className='m-4 ml-2 text-xl font-bold'>Name: </h1>
        </div>
          <input 
          className='flex flex-col items-center border-2 border-slate-400 rounded h-10 ml-2 p-2 w-64'
          placeholder='Name'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}/>
          
          {nameError && (
					<div className="text-red-500 font-bold m-4">
						<p>{nameError}</p>
					</div>
				)}

        <div className='flex flex-col items-start mt-4'>
          <h1 className='m-4 ml-2 text-xl font-bold'>Email:</h1>
        </div>
         <input
          className='flex flex-col items-center border-2 border-slate-400 rounded h-10 ml-2 p-2 w-64'
          placeholder='Email'
          type='text'
          value={email}
          onChange={(e) => setEmail(e.target.value)}/>

        {emailError && (
					<div className="text-red-500 font-bold m-4">
						<p>{emailError}</p>
					</div>
				)}

        <div className='flex flex-col items-start mt-6'>
          <h1 className='m-4 ml-2 pt-4 text-xl font-bold'>Message:</h1>
        </div>

          <textarea 
            id='message' 
            rows='4' 
            class='h-48 p-2.5 w-96 mb-6 m-2 border-2 border-slate-400 rounded' 
            value={message}
            placeholder='Write your thoughts here...'
            onChange={(e) => setMessage(e.target.value)}>
          </textarea>

          {messageError && (
					<div className="text-red-500 font-bold m-4 pb-4">
						<p>{messageError}</p>
					</div>
				)}

          <div>
            <button 
            className='bg-cyan-500 hover:bg-cyan-600 text-white font-bold ml-2 py-2 px-4 rounded-full'
            onClick={handleFormSubmit}>
              Submit
            </button>
          </div>

        </div>
      </div>
  );
}
