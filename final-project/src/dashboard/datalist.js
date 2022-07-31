import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../GlobalContext/context";
import axios from "axios";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function Datalist() {
  const {
    data,
    setData,
    currentId,
    setCurrentId,
    status,
    setFetchStatus,
    filteredData,
    setFilteredData,user,setUser
  } = useContext(GlobalContext);

  let fetchdata = async () => {
    try {
      
      if (status === true) {
        let res = await axios.get(
          "https://dev-example.sanbercloud.com/api/job-vacancy"
        );
        setData([...res.data.data]);
        setFilteredData([...res.data.data]);
      }
    } catch (error) {
      console.log("aaaaaa");
      console.log(error);
    }

    setFetchStatus(false);
  };

  useEffect(() => {
    fetchdata();
  }, [status,setFetchStatus]);

let navigate = useNavigate()


  const formatRupiah = (bilangan) => {
    if (bilangan == null) {
      return "FREE";
    } else {
      var reverse = bilangan.toString().split("").reverse().join(""),
        ribuan = reverse.match(/\d{1,3}/g);
      ribuan = ribuan.join(".").split("").reverse().join("");

      return "Rp. " + ribuan;
    }
  };

  const handleDelete = (event) => {

   let idData = parseInt(event.target.value);
    
   axios
   .delete(
     `https://dev-example.sanbercloud.com/api/job-vacancy/${idData}`, {headers: {"Authorization" : "Bearer "+ Cookies.get('token')}}
   )
   .then((res) => {
     setFetchStatus(true);
     console.log("delete sucessfull");
   });

  }

const handleEdit = (event) => {
  
  let idData = parseInt(event.target.value);
setCurrentId(idData)
navigate(`/dataform/${idData}`);

}

 

  return (
    <div class="w-full h-full overflow-auto relative shadow-md sm:rounded-lg m-2 ">
      <table class=" text-sm text-left text-gray-500 dark:text-gray-400 ">
     
        <caption class="p-5 text-lg font-semibold text-center text-gray-900 bg-white dark:text-white dark:bg-gray-800">
          Job Vacancy Data Table
          <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400"></p>
        </caption>
        <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="py-3 px-6">
              Title
            </th>
            <th scope="col" class="py-3 px-6">
              Company Name
            </th>
            <th scope="col" class="py-3 px-6">
              Company City
            </th>
            <th scope="col" class="py-3 px-6">
              Job Description
            </th>
            <th scope="col" class="py-3 px-6">
              Job Qualification
            </th>
            <th scope="col" class="py-3 px-6">
              Job Type
            </th>
            <th scope="col" class="py-3 px-6">
              Job Tenure
            </th>
            <th scope="col" class="py-3 px-6">
              Job Status
            </th>
            <th scope="col" class="py-3 px-6">
              Salary Min
            </th>
            <th scope="col" class="py-3 px-6">
              Salary Max
            </th>
            <th scope="col" class="py-3 px-6">
              Image Link
            </th>
            <th scope="col" class="py-3 px-6 text-center " colSpan={2}>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data != null ? (
            data.map((res, index) => {
              return (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td class="py-4 px-6">{res.title}</td>
                  <td class="py-4 px-6">{res.company_name}</td>
                  <td class="py-4 px-6">{res.company_city}</td>
                  <td class="py-4 px-6 truncate max-w-0">
                    {res.job_description}
                  </td>
                  <td class="py-4 px-6 truncate max-w-0">
                    {res.job_qualification}
                  </td>
                  <td class="py-4 px-6">{res.job_type}</td>
                  <td class="py-4 px-6">{res.job_tenure}</td>
                  <td class="py-4 px-6">{res.job_status}</td>
                  <td class="py-4 px-6">{formatRupiah(res.salary_min)}</td>
                  <td class="py-4 px-6">{formatRupiah(res.salary_max)}</td>
                  <td class="py-4 px-6 truncate max-w-0">
                    {res.company_image_url}
                  </td>
                  <td class="m-2 py-1">
                    <button onClick={handleEdit} value={res.id} class=" bg-blue-500 hover:bg-blue-300 text-white text-small font-bold py-1 px-2 rounded-full">
                      EDIT
                    </button>
                  </td>
                  <td class="m-2 py-1">
                    <button onClick={handleDelete} value={res.id} class="bg-red-500 hover:bg-red-300 text-white text-small font-bold py-1 px-2 rounded-full mr-4">
                      DELETE
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <></>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Datalist;
