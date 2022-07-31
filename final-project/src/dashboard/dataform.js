import React, { useState } from "react";
import axios from "axios";
import { GlobalContext } from "../GlobalContext/context";
import { useContext } from "react";
import Cookies from "js-cookie";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
function Dataform() {
  const {
    data,
    setData,
    currentId,
    setCurrentId,
    status,
    setFetchStatus,
    filteredData,
    setFilteredData,
    token,setToken
  } = useContext(GlobalContext);


  let {idData} = useParams()

  const [input, setInput] = useState({
    title:"" ,
    job_description:"",
    job_qualification:"" ,
    job_type:"",
    job_tenure:"",
    job_status:"",
    company_name:"",
    company_image_url:"",
    company_city:"",
    salary_min:"",
    salary_max:"",
  });


  useEffect(() => {
    console.log(idData);

    if(idData !== undefined){

 axios
    .get(
      
      `https://dev-example.sanbercloud.com/api/job-vacancy/${idData}`
    )
    .then((res) => {
      let data = res.data;
      console.log(data);
      setInput({
        title:data.title ,
        job_description: data.job_description,
        job_qualification: data.job_qualification ,
        job_type: data.job_type,
        job_tenure: data.job_tenure,
        job_status: data.job_status,
        company_name: data.company_name,
        company_image_url: data.company_image_url,
        company_city: data.company_city,
        salary_min: data.salary_min,
        salary_max: data.salary_max,
      });
    });

    }


   
  }, []);



  const handleInput = (event) => {
    console.log(input);
    let value = event.target.value;
    let name = event.target.name;
    if (name == "title") {
      setInput({ ...input, title: value });
    } else if (name == "company_name") {
      setInput({ ...input, company_name: value });
    } else if (name == "company_city") {
      setInput({ ...input, company_city: value });
    } else if (name == "job_description") {
      setInput({ ...input, job_description: value });
    } else if (name == "job_qualification") {
      setInput({ ...input, job_qualification: value });
    } else if (name == "job_type") {
      setInput({ ...input, job_type: value });
    } else if (name == "job_tenure") {
      setInput({ ...input, job_tenure: value });
    } else if (name == "job_status") {
      setInput({ ...input, job_status: value });
    } else if (name == "salary_min") {
      setInput({ ...input, salary_min: value });
    } else if (name == "salary_max") {
      setInput({ ...input, salary_max: value });
    } else if (name == "company_image_url") {
      setInput({ ...input, company_image_url: value });
    }
   
  };
  const handleSubmit = (event) => {
    
   

    event.preventDefault();

    let {
      title ,
      job_description,
      job_qualification ,
      job_type,
      job_tenure,
      job_status,
      company_name,
      company_image_url,
      company_city,
      salary_min,
      salary_max,
    } = input;

    if (currentId === -1) {
      //create data
   
      axios.post("https://dev-example.sanbercloud.com/api/job-vacancy",
          {
            title ,
            job_description,
            job_qualification ,
            job_type,
            job_tenure,
            job_status,
            company_name,
            company_image_url,
            company_city,
            salary_min,
            salary_max,
          }, {headers: {"Authorization" : "Bearer "+ Cookies.get('token')}})
        .then((res) => {
          alert("berhasil create data");
          console.log(res);
          setFetchStatus(true);
        });
      setInput({
        title: "",
      company_name: "",
      company_city: "",
      job_description: "",
      job_qualification: "",
      job_type: "",
      job_tenure: "",
      job_status: "",
      salary_min: "",
      salary_max: "",
      company_image_url: "",
      });
    } else {
      axios
        .put(
          `https://dev-example.sanbercloud.com/api/job-vacancy/${currentId}`,
          {
            title,
            company_name,
            company_city,
            job_description,
            job_qualification,
            job_type,
            job_tenure,
            job_status,
            salary_min,
            salary_max,
          },{headers: {"Authorization" : "Bearer "+ Cookies.get('token')}}
        )
        .then((res) => {
          console.log(res);
          setFetchStatus(true);
          alert("berhasil update data")
        });
    }
    setCurrentId(-1);

    //clear input setelah create data
    setInput({
      title: "",
    company_name: "",
    company_city: "",
    job_description: "",
    job_qualification: "",
    job_type: "",
    job_tenure: "",
    job_status: "",
    salary_min: "",
    salary_max: "",
    company_image_url: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      class="w-full m-auto align-center justify-center flex flex-col shadow-lg p-10 rounded-md bg-white"
    >
      <div class="w-full m-auto">
        <label class="block mb-2 text-sm font-medium text-black mt-3">
          Title
        </label>
        <input
          onChange={handleInput}
          value={input.title}
          type="text"
          name="title"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div class="w-full m-auto mb-2">
        <label class="block mb-2 text-sm font-medium text-black mt-3">
          Company Name
        </label>
        <input
          onChange={handleInput}
          value={input.company_name}
          type="text"
          name="company_name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div class="w-full m-auto mb-2">
        <label class="block mb-2 text-sm font-medium text-black mt-3">
          Company city
        </label>
        <input
          onChange={handleInput}
          value={input.company_city}
          type="text"
          name="company_city"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div class="w-full m-auto mb-2">
        <label class="block mb-2 text-sm font-medium text-black mt-3">
          Job Description
        </label>
        <input
          onChange={handleInput}
          value={input.job_description}
          type="text"
          name="job_description"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div class="w-full m-auto mb-2">
        <label class="block mb-2 text-sm font-medium text-black mt-3">
          Job Qualification
        </label>
        <input
          onChange={handleInput}
          value={input.job_qualification}
          type="text"
          name="job_qualification"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div class="w-full m-auto mb-2">
        <label class="block mb-2 text-sm font-medium text-black mt-3">
          Job Type
        </label>
        <input
          onChange={handleInput}
          value={input.job_type}
          type="text"
          name="job_type"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div class="w-full m-auto mb-2">
        <label class="block mb-2 text-sm font-medium text-black mt-3">
          Job Tenure
        </label>
        <input
          onChange={handleInput}
          value={input.job_tenure}
          type="text"
          name="job_tenure"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div class="w-full m-auto mb-2">
        <label class="block mb-2 text-sm font-medium text-black mt-3">
          Job Status (Active = 1 || Inactive = 0)
        </label>
        <input
          onChange={handleInput}
          value={input.job_status}
          type="text"
          name="job_status"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div class="w-full m-auto mb-2">
        <label class="block mb-2 text-sm font-medium text-black mt-3">
          Salary Min
        </label>
        <input
          onChange={handleInput}
          value={input.salary_min}
          type="text"
          name="salary_min"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div class="w-full m-auto mb-2">
        <label class="block mb-2 text-sm font-medium text-black mt-3">
          Salary Max
        </label>
        <input
          onChange={handleInput}
          value={input.salary_max}
          type="text"
          name="salary_max"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div class="w-full m-auto mb-2">
        <label class="block mb-2 text-sm font-medium text-black mt-3">
          Image Link
        </label>
        <input
          onChange={handleInput}
          value={input.company_image_url}
          type="text"
          name="company_image_url"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <button
      
        type={"submit"}
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-auto"
      >
        Submit
      </button>
    </form>
  );
}

export default Dataform;
