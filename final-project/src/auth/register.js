import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import Cookies from "js-cookie";

const Register =() => {

  const [input, setInput] = useState({
    name : "",
    email : "",
    password : "",
    image_url :"",

})

const handleChange = (event) => {
    
    let value = event.target.value
    let name = event.target.name
  console.log(value);
    setInput({...input, [name] : value})
}

let navigate = useNavigate()


 const handleRegister = (event) => {

  event.preventDefault()

  let { email, password,name,image_url } = input
  // console.log(input)

  axios.post('https://dev-example.sanbercloud.com/api/register', {email, password,name,image_url} )
  .then((res) => {
      console.log(res)
     
      alert("berhasil register")
      navigate('/Login')
  })

  .catch((error) => {
      // console.log(error)
      alert(error.message)
  })

}


  return (
    <div class="h-screen flex">
      <div class="flex w-1/2 bg-slate-500 justify-around items-center">
         
       <img class="w-full h-full object-cover opacity-70" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" />
     
      </div>
      <div class="flex w-1/2 justify-center items-center bg-yellow-400 ">
        <form class="bg-white p-9 shadow-lg rounded-lg w-3/4">
          <h1 class="text-gray-800 font-bold text-2xl mb-1">Halo Sobat Job-Finder!</h1>
          <p class="text-sm font-normal text-gray-600 mb-7">Welcome Back to our website!</p>
          <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
            <input
              class="pl-2 w-full outline-none border-none"
              type="text"
              name="email"
              id=""
              placeholder="Email Address"
              onChange={handleChange}
              value={input.email}
            />
          </div>
          <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clip-rule="evenodd"
              />
            </svg>
            <input
              class="pl-2 outline-none border-none w-full"
              type="text"
              name="password"
              id=""
              placeholder="Password"
              onChange={handleChange}
              value={input.password}
            />
          </div>
          <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clip-rule="evenodd"
              />
            </svg>
            <input
              class="pl-2 outline-none border-none w-full"
              type="text"
              name="name"
              id=""
              placeholder="Your Name"
              onChange={handleChange}
              value={input.name}
            />
          </div>
          <div class="flex items-center border-2 py-2 px-3 rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clip-rule="evenodd"
              />
            </svg>
            <input
              class="pl-2 outline-none border-none w-full"
              type="text"
              name="image_url"
              id=""
              placeholder="Image URL"
              onChange={handleChange}
              value={input.image_url}
            />
          </div>
          <button
        
            type="submit"
            class="block w-full bg-yellow-400 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
            onClick={handleRegister}
          >
            Register
          </button>
         
        </form>
      </div>
    </div>
  );
}

export default Register;
