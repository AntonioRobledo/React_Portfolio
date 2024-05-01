import React from 'react';
import houseOfHorrors from '../../../images/House_Of_Horrors.png';
import clinicFlow from '../../../images/ClinicFlow.png';
import Fleet from '../../../images/Fleet.png';

export default function Projects() {
    return (
    <div className='bg-slate-300 p-4 bg-gradient-to-r from-green-300 to-purple-300'> 
      <h1 className='font-bold text-5xl flex justify-center font-mono text-slate-700 opacity-90 mb-12'>Projects</h1>

    <div className='flex justify-evenly mt-4 pt-16'>

    <div className='bg-slate-100 border-2 border-black hover:scale-105 rounded shadow-md ml-4 max-w-lg'>
        <img className="w-full h-80 border border-black" src={clinicFlow} alt="Clinic Management Software"></img>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">ClinicFlow</div>
          <p className="text-gray-700 text-base">
            Clinic management software designed to provide healthcare workers with a system to 
            manage patients, appointments, prescriptions, etc. 
          </p>
        </div>
        <div className="flex justify-center gap-6">
          <a href='https://github.com/AntonioRobledo/Clinic_Flow' target='_blank'  rel="noreferrer">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 hover:bg-gray-300 mr-2 mb-4">GitHub</span>
          </a>
          <a href='https://dry-refuge-68933.herokuapp.com/login' target='_blank'  rel="noreferrer">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 hover:bg-gray-300 mr-2 mb-4">Link to App</span>
          </a>
        </div>
      </div>

    <div className='bg-slate-100 border-2 border-black hover:scale-105 rounded shadow-md ml-4 max-w-lg'>
        <img className="w-full h-80 border border-black" src={houseOfHorrors} alt="House Of Horrors - a horror-themed movie database"></img>
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
        <img className="w-full h-80 border border-black" src={Fleet} alt="Fleet - Car Delivery Service"></img>
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

