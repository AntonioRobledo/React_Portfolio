import React from 'react';
import employeeTracker from '../../images/Employee_Tracker.png';
import jate from '../../images/JATE.png';
import weatherDashboard from '../../images/Weather_Dashboard.png';

export default function Projects() {
    return (
    <div className='bg-slate-300'> 
      <h1 className='font-bold text-3xl flex justify-center'>Projects</h1>

     {/*  <div className="max-w-lg shadow-xl flex justify-end">  */}

<div className='mt-8 flex'>
  <div className='bg-white rounded overflow-hidden shadow-md'>
    <img className='w-full' src={employeeTracker} alt='app'></img>
    <div className='flex justify-center gap-6'>
      <a href='https://github.com/AntonioRobledo/Employee_Tracker' target='_blank'>
      <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>GitHub</span>
      </a>
    </div>
  </div>

{/* 
      <div className='rounded-md max-w-lg shadow-xl'>
        <img className="w-full" src={employeeTracker} alt="Employee Tracker"></img>
        <div className="px-6 py-4 border">
          <div className="font-bold text-xl mb-2">Employee Tracker</div>
          <p className="text-gray-700 text-base">
            A command line application that manages a company's emplyee database using Node.js, Inquirer, and MySQL.
          </p>
        <div className="flex justify-center gap-6">
          <a href='https://github.com/AntonioRobledo/Employee_Tracker' target='_blank'>
          <span src={employeeTracker} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">GitHub</span>
          </a>
          </div>
        </div>
        </div> */}

      <div className='bg-white rounded overflow-hidden shadow-md'>
        <img className="w-full" src={jate} alt="Employee Tracker"></img>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Just Another Text Editor</div>
          <p className="text-gray-700 text-base">
            A progressive web application that serves as a text editor that has functionalities both in a browser and locally on a desktop.
          </p>
        </div>
        <div className="flex justify-center gap-6">
          <a href='https://github.com/AntonioRobledo/Text_Editor' target='_blank'>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">GitHub</span>
          </a>
          <a href='https://blooming-dawn-00607.herokuapp.com/' target='_blank'>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Link to App</span>
          </a>
        </div>
      </div>

      <div className='bg-white rounded overflow-hidden shadow-md'>
        <img className="w-full" src={weatherDashboard} alt="Employee Tracker"></img>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Weather Dashboard</div>
          <p className="text-gray-700 text-base">
            An application thast retrieves weather forecasting based on the user's search input by utilizing the OpenWeatherMap API.
          </p>
        </div>
        <div className="flex justify-center gap-6">
          <a href='https://github.com/AntonioRobledo/Weather-Dashboard' target='_blank'>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">GitHub</span>
          </a>
          <a href='https://antoniorobledo.github.io/Weather-Dashboard/' target='_blank'>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Link to App</span>
          </a>
        </div>
      </div>
    </div>

   </div>
    );
  }

