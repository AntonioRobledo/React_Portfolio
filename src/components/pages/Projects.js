import React from 'react';
import employeeTracker from '../../images/Employee_Tracker.png';
import jate from '../../images/JATE.png';
import weatherDashboard from '../../images/Weather_Dashboard.png';

export default function Projects() {
    return (
    <div className='bg-slate-300 p-4 bg-gradient-to-r from-green-300 to-purple-300'> 
      <h1 className='font-bold text-3xl flex justify-center font-mono text-slate-700 opacity-90'>Projects</h1>

<div className='grid grid-cols-3 gap-4 mt-4 p-2 '>

  <div className='bg-slate-100 border-2 border-black hover:scale-105 rounded shadow-md ml-4 max-w-lg'>
    <img className='w-full h-80' src={employeeTracker} alt='Employee Tracker'></img>
    <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Employee Tracker</div>
          <p className="text-gray-700 text-base">
            A command line application that manages a company's emplyee database using Node.js, Inquirer, and MySQL.
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
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 hover:bg-gray-300 mr-2 mb-4">GitHub</span>
          </a>
          <a href='https://blooming-dawn-00607.herokuapp.com/' target='_blank'  rel="noreferrer">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 hover:bg-gray-300 mr-2 mb-4">Link to App</span>
          </a>
        </div>
      </div>

      <div className='bg-slate-100 border-2 border-black hover:scale-105 rounded shadow-md ml-4 max-w-lg'>
        <img className="w-full h-80 border border-black" src={weatherDashboard} alt="Weather Dashboard"></img>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Weather Dashboard</div>
          <p className="text-gray-700 text-base">
            An application thast retrieves weather forecasting based on the user's search input by utilizing the OpenWeatherMap API.
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

   </div>
    );
  }

