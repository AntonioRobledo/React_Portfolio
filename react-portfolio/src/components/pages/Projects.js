import React from 'react';
import employeeTracker from '../../images/Employee_Tracker.png';
import jate from '../../images/JATE.png';
import weatherDashboard from '../../images/Weather_Dashboard.png';

export default function Projects() {
    return (
      <div className='flex justify-center bg-slate-300'>
        <h1 className='font-bold text-2xl flex justify-center'>Projects</h1>

      <div className='flex justify-start'>
        <a>
          <img className='w-80 h-48 rounded-xl border-2' src={employeeTracker}></img>
        </a>
      </div>

      <div className='flex justify-end'>
        <a>
        <img className='w-80 h-48 rounded-xl border-2' src={jate}></img>
        </a>
      </div>

      <div>
        <a>
        <img className='w-80 h-48 rounded-xl border-2' src={weatherDashboard}></img>
        </a>
      </div>
      
      </div>
    );
  }