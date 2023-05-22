import React, { useState } from 'react';
import { validateEmail } from '../utils/helper';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formFieldError, setformFieldError] = useState('');
  const [emailError, setEmailError] = useState('');

  // Preventing the default behavior of the form submit (which is to refresh the page)
  const handleFormSubmit = (e) => {
    e.preventDefault();

    let err = false;

    if(!validateEmail(email)) {
      setEmailError('Invalid Email');
      err = true;
    } else {
      setEmailError(' ');
    }
    if (message.trim() === '') {
      setformFieldError('Message cannot be empty!');
      err = true;
    } else {
      setformFieldError(' ');
    }

    if (!err) {
      setName(' ');
      setEmail(' ');
      setMessage(' ');
    }
  };

  return (
    <div></div>
  )

}
  