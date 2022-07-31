import React from "react";
import Navbar from "../component/navbar";

import {Link} from "react-router-dom"
import Footer from "../component/footer";
const LandingPage = () => {
  return (
    <>
    <div class="bg-indigo-900 relative overflow-hidden ">
      <img
        src="https://images.unsplash.com/photo-1476231790875-016a80c274f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
        class="absolute h-full w-full object-cover"
      />
      <div class="inset-0 bg-black opacity-25 absolute"></div>
     
      <div class="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
        <div class="lg:w-3/5 xl:w-2/5 flex flex-col items-start relative z-10">
          <span class="font-bold  text-white ">Welcome To Job-Finder</span>
          <h1 class="font-bold text-7xl sm:text-6xl text-white leading-tight mt-4">
            Buat keputusan terbaik untuk kariermu dan bangun karier impianmu!
          </h1>
          <Link to="/JobList"
            class="block bg-white hover:text-black   py-3 px-4 rounded-lg text-lg text-gray-800 font-bold uppercase mt-10"
          >
            Discover
          </Link>
        </div>
      </div>
    </div>
 
    </>
  );
};

export default LandingPage;
