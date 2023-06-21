import React from 'react';
import employeeTracker from '../../../images/Employee_Tracker.png';
import jate from '../../../images/JATE.png';
import weatherDashboard from '../../../images/Weather_Dashboard.png';
import houseOfHorrors from '../../../images/House_of_Horrors_2.png';
import Fleet from '../../../images/Fleet.png';

export default function Projects() {
    return (
    <div className='bg-slate-300 p-4 bg-gradient-to-r from-green-300 to-purple-300'> 
      <h1 className='font-bold text-5xl flex justify-center font-mono text-slate-700 opacity-90 mb-12'>Projects</h1>

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
   </div>
    );
  }

