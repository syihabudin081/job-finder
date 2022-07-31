import axios from "axios";
import React, { useState } from "react";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../GlobalContext/context";
const JobList = () => {
  const {
    data,
    setData,
    currentId,
    setCurrentId,
    status,
    setFetchStatus,
    filteredData,
    setFilteredData,
  } = useContext(GlobalContext);

  let navigate = useNavigate();

  const [search, setSearch] = useState({
    title: "",
    company_name: "",
    company_city: "",
    job_type: "",
  });

  let fetchdata = async () => {
    try {
      if (status === true) {
        let res = await axios.get(
          "https://dev-example.sanbercloud.com/api/job-vacancy"
        );
        console.log("aaaaaaaa");
        setData([...res.data.data]);

        setFilteredData([...res.data.data]);
      }
    } catch (error) {
      console.log(error);
    }

    setFetchStatus(false);
  };

  let handleSearch = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    setSearch({ ...search, [name]: value });

    // let result = [];

    // if (name == "title") {
    //   result = data.filter((e) => {
    //     return e.title.toLowerCase().search(value.toLowerCase()) != -1;
    //   });
    // } else if (name == "company_name") {
    //   result = data.filter((e) => {
    //     return e.company_name.toLowerCase().search(value.toLowerCase()) != -1;
    //   });
    // } else if (name == "company_city") {
    //   result = data.filter((e) => {
    //     return e.company_city.toLowerCase().search(value.toLowerCase()) != -1;
    //   });
    // } else if (name == "job_type") {
    //   result = data.filter((e) => {
    //     return e.job_type.toLowerCase().search(value.toLowerCase()) != -1;
    //   });
    // }

    // setFilteredData(result);

    // setFetchStatus(true);
  };

  let handleFilter = () => {
  

    let result = data
      .filter((e) => {
        return e.title.toLowerCase().search(search.title.toLowerCase()) != -1;
      })
      .filter((e) => {
        return (
          e.company_name
            .toLowerCase()
            .search(search.company_name.toLowerCase()) != -1
        );
      })
      .filter((e) => {
        return (
          e.company_city
            .toLowerCase()
            .search(search.company_city.toLowerCase()) != -1
        );
      })
      .filter((e) => {
        return (
          e.job_type.toLowerCase().search(search.job_type.toLowerCase()) != -1
        );
      });

      console.log(result);

   

    setFilteredData(result);

  };

  const handleReset = () => {
    setSearch({
      title: "",
      company_name: "",
      company_city: "",
      job_type: "",
    });
    setFilteredData(data)
    setFetchStatus(true)
  }

  const formatRupiah = (bilangan) => {
    if (bilangan === null) {
      return "FREE";
    } else {
      let reverse = bilangan.toString().split("").reverse().join("");
      let ribuan = reverse.match(/\d{1,3}/g);
      ribuan = ribuan.join(".").split("").reverse().join("");

      return "Rp. " + ribuan;
    }
  };

  const handleDetail = (event) => {
    let idData = parseInt(event.target.value);

    setCurrentId(idData);
    setFetchStatus(true);
    navigate(`/detail_job/${idData}`);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div class="min-h-screen ">
      <div class="bg-yellow-500 mb-6 ">
        <form class="w-3/4 mx-auto pt-4">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
          >
            Search
          </label>
          <div class="relative">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              onChange={handleSearch}
              type="search"
              id="default-search"
              class="block p-4 pl-10 w-full text-sm text-gray-900 bg-slate-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Title Name..."
              required=""
              name="title"
              value={search.title}
            />
          </div>
        </form>
        <div class=" sm:flex  w-3/4 mx-auto gap-4">
          <form
            class="my-6  "
            // onChange={(event) => handleSearchCompany_Name(event)}
          >
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
            >
              Search
            </label>
            <div class="relative">
              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                onChange={handleSearch}
                type="search"
                id="default-search"
                class="block p-4 pl-10 w-full text-sm text-gray-900 bg-slate-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Company name..."
                required=""
                name="company_name"
                value={search.company_name}
              />
            </div>
          </form>
          <form
            class="my-6"
            // onChange={(event) => handleSearchCompany_Name(event)}
          >
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
            >
              Search
            </label>
            <div class="relative">
              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                onChange={handleSearch}
                type="search"
                id="default-search"
                class="block p-4 pl-10 w-full text-sm text-gray-900 bg-slate-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Company City..."
                required=""
                name="company_city"
                value={search.company_city}
              />
            </div>
          </form>
          <form
            class="my-6"
            // onChange={(event) => handleSearchCompany_Name(event)}
          >
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
            >
              Search
            </label>
            <div class="relative">
              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                onChange={handleSearch}
                type="search"
                id="default-search"
                class="block p-4 pl-10 w-full text-sm text-gray-900 bg-slate-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Job Type..."
                required=""
                name="job_type"
                value={search.job_type}
              />
            </div>
          </form>
          <button
          onClick={handleFilter}
            type="button"
            class="my-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm py-4 px-9 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Filter
          </button>
          <button
          onClick={handleReset}
            type="button"
            class="my-auto text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm py-4 px-9 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Reset
          </button>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-2 mb-12">
        {filteredData != null &&
          filteredData.map((res, index) => {
            return (
              <div class="mx-2 max-w-sm bg-slate-50 rounded-lg shadow-md  dark:bg-gray-800 dark:border-gray-700 ">
                <div class="flex justify-end px-4 pt-4"></div>
                <div class="flex flex-col items-center pb-10">
                  <img
                    class="mb-3 w-24 h-24 rounded-full shadow-lg object-contain"
                    src={res.company_image_url}
                    alt="Bonnie image"
                  />
                  <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    {res.company_name}
                  </h5>
                  <span class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    {res.title}
                  </span>

                  <div class="flex flex-wrap text-gray-500 sm:text-sm text-xs gap-2">
                    <div class="flex self-start gap-1 ">
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
                          d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      {formatRupiah(res.salary_max)}
                    </div>
                    <div class="flex  self-start gap-1">
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
                      <p>{res.job_type}</p>
                    </div>
                    <div class="flex  self-start gap-1">
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
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <p>{res.company_city}</p>
                    </div>
                  </div>

                  <div class="flex mt-4 space-x-3 lg:mt-6">
                    <button
                      to="/detail_job"
                      value={res.id}
                      onClick={handleDetail}
                      class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Detail
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default JobList;
