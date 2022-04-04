import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navigation">
      {/* <h1>Data Storage</h1>
      <div className="links">
        <NavLink exact to="/AllSubmission" activeClassName="nav-active">All Submission</NavLink>
        <NavLink exact to="/NewSubmission" activeClassName="nav-active"> New Submission</NavLink>
      </div> */}

      <nav className="bg-gray-200">
        <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <NavLink to="/NewSubmission" className="px-3 py-2 text-sm font-bold text-red-400 rounded-md hover:bg-gray-700 hover:text-white">New Submission</NavLink>

                  <NavLink to="/AllSubmission" className="px-3 py-2 text-sm font-bold text-blue-400 rounded-md hover:bg-gray-700 hover:text-white">All Submission</NavLink>

                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

    </div>
  );
}

export default Navbar;
