import React from 'react';

function Resume() {
  return (
    <div className='bg-slate-300 p-2 bg-gradient-to-r from-green-300 to-purple-300 font-mono text-slate-700 text-opacity-90'>
      <h1 className='flex justify-center font-bold text-5xl p-2 mb-4'>Resume</h1>
      <div className='flex justify-center'> 
        <a href='https://docs.google.com/document/d/1ZZ6ijcZ-qQxPnE7NafcoRw-_xb2X_O4FE_9thZewP3Q/export?format=pdf'
        className='bg-blue-600 text-white rounded-xl py-2 px-4 hover:bg-blue-700 transition-colors mt-2'>Download resume</a>
      </div>
      <h2 className='flex justify-center font-bold text-2xl pt-3 leading-loose'>Programming Languages</h2>
      <ul className='text-center text-xl font-semibold leading-8'>
        <li> HTML5</li>
        <li> CSS3</li>
        <li> JavaScript</li>
        <li> SQL</li>
        <li> Markdown</li>
      </ul>
      <h2 className='flex justify-center font-bold text-2xl pt-3 leading-loose'>Frameworks and Libraries</h2>
      <ul className='text-center text-xl font-semibold leading-8'>
        <li> React</li>
        <li> Express.js</li>
        <li> Node.js</li>
        <li> Bootstrap</li>
        <li> Tailwind</li>
        <li> Bulma</li>
      </ul>
      <h2 className='flex justify-center font-bold text-2xl pt-3 leading-loose'>Databases and Cloud Hosting</h2>
      <ul className='text-center text-xl font-semibold leading-8'>
        <li> MongoDB</li>
        <li> MySQL</li>
        <li> NoSQL</li>
        <li> Heroku</li>
        <li> GitHub Pages</li>
      </ul>
      <h2 className='flex justify-center font-bold text-2xl pt-3 leading-loose'>Software and Tools</h2>
      <ul className='text-center text-xl font-semibold leading-8'>
        <li> Git</li>
        <li> GitHub</li>
        <li> Visual Studio Code</li>
        <li> Mongoose</li>
      </ul>
    </div>
  )
}

export default Resume;

