import React from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
    
let navigate = useNavigate()

const handleLogout = () => {
    Cookies.remove('token')
    navigate('/')

}
  return (
    <nav class=" w-full mx-auto px-6 md:px-12 py-4 bg-black sticky top-0 left-0 right-0 z-20">
      <div class="md:flex justify-between items-center">
        <div class="flex justify-between items-center">
          <Link to="/" class="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </Link>
          <span class="font-bold uppercase text-yellow-400 text-2xl mx-2 ">
            JOB-FINDER
          </span>
          <div class="md:hidden">
            <button class="text-white focus:outline-none">
              <svg
                class="h-12 w-12"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6H20M4 12H20M4 18H20"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div class=" md:flex items-center gap-4 text-xs  lg:text-base ">
          <Link to="/JobList">
            <button class="   px-4 py-2  rounded-full text-black bg-white">
              Job List
            </button>
          </Link>
          {Cookies.get("token") != undefined ? (
            <>
            <Link to="/datalist">
              <button class="px-4 py-2  rounded-full text-black bg-white">
                Dashboard
              </button>
            </Link>
            <Link to="/Login">
              <button class="px-4 py-2  rounded-full text-white bg-red-700" onClick={handleLogout}>
                Logout
              </button>
            </Link>
            </>
          ) : (
            <Link to="/Login">
              <button class="px-4 py-2  rounded-full text-white bg-blue-500">
                Login
              </button>
            </Link>
          )}

         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
