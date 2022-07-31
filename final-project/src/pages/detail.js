import React, { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { useEffect } from "react";
import { GlobalContext } from "../GlobalContext/context";
import { useParams } from "react-router-dom";
const Detail = () => {
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

  let {idData} = useParams();

  const [detailData, setDetailData] = useState(null);

  let fetchdata = async () => {
    try {
      console.log(currentId);
      console.log(status);
      if (status === true) {
        
        let res = await axios.get(
          `https://dev-example.sanbercloud.com/api/job-vacancy/${idData}`
        );
        setDetailData([res.data]);
        
        console.log([res.data]);
      }
    } catch (error) {
      console.log(error);
    }

    setFetchStatus(false);
  };

  const formatRupiah = (bilangan2, bilangan) => {
    var reverse = bilangan.toString().split("").reverse().join(""),
      ribuan = reverse.match(/\d{1,3}/g);
    ribuan = ribuan.join(".").split("").reverse().join("");
    var min_gaji = ribuan;

    var reverse = bilangan2.toString().split("").reverse().join(""),
      ribuan = reverse.match(/\d{1,3}/g);
    ribuan = ribuan.join(".").split("").reverse().join("");
    var max_gaji = ribuan;
    return "Rp. " + min_gaji + " - " + max_gaji;
  };

  useEffect(() => {
    
    fetchdata();
  }, []);

  return (
    <div class="min-h-screen flex items-center">
      {detailData != null &&
        detailData.map((res) => {
          return (
            <div class="relative max-w-md mx-auto md:max-w-2xl mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-xl mt-16">
              <div class="px-6">
                <div class="flex flex-wrap justify-center">
                  <div class="w-full flex justify-center">
                    <div class="relative">
                      <img
                        src={res.company_image_url}
                        class="shadow-xl rounded-full align-middle w-32"
                      />
                    </div>
                  </div>

                  <div class="text-center mt-2">
                    <h3 class="text-2xl text-slate-700 font-bold leading-normal mb-1">
                      {res.title}
                    </h3>
                    <div class="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
                      <i class="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>
                      {res.company_name}
                    </div>
                  </div>
                </div>
                <div class="w-full text-center">
                  <div class="flex justify-center lg:pt-4 pt-4 pb-0 gap-4 flex-wrap">
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
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
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
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <p>{res.job_tenure}</p>
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
                      <p>{formatRupiah(res.salary_max, res.salary_min)}</p>
                    </div>
                  </div>
                </div>
                <div class="mt-6 py-6 border-t border-slate-200 text-center">
                  <div class="flex flex-wrap text-start">
                    <div class="w-full px-4">
                      <p class="text-start">Job Description : </p>
                      <p class="font-light leading-relaxed text-slate-600 mb-2">
                        {res.job_description}
                      </p>
                      <p class="text-start">Job Qualification : </p>
                      <p class="font-light leading-relaxed text-slate-600 mb-2">
                        {res.job_qualification}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Detail;
