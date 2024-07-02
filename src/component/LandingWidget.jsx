import React from 'react';
import { NavLink } from 'react-router-dom';

function LandingWidget() {
  return (
    <div className="flex flex-wrap items-center justify-center w-full bg-black bg-opacity-50 lg:md-96 sm:h-80 md:h-96">
      <div className="flex flex-col items-center p-4 text-center text-white gap-y-4">
        <h1 className="w-full p-4 text-4xl font-bold bg-black rounded-2xl md:text-6xl">
          We are running out of time
        </h1>
        <p className="w-full mt-4 text-lg md:text-2xl">Act now before it's too late</p>
        <NavLink to="/Quiz">
          <button className="p-3 mt-4 font-bold text-blue-500 bg-white hover:bg-black animate-bounce rounded-3xl">
            Take Action
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default LandingWidget;