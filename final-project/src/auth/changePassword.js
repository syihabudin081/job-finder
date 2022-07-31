import React from "react";
import axios from "axios";
import { useContext } from "react";
import { GlobalContext } from "../GlobalContext/context";
import { useState } from "react";
import Cookies from "js-cookie";

function ChangePassword() {
  const { user, setUser } = useContext(GlobalContext);
  const [input, setInput] = useState({
    current_password: "",
    new_password: "",
    new_confirm_password: "",
  });

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let { current_password, new_password, new_confirm_password } = input;
    
    console.log(input);
    axios.post(
      "https://dev-example.sanbercloud.com/api/change-password",
      { current_password, new_password, new_confirm_password },
      { headers: { Authorization: "Bearer " + Cookies.get("token") } }
    ).then((res)=> {
        console.log(res);
        alert("berhasil ganti password")
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-1/2  mx-auto bg-white p-9 rounded-lg shadow-lg flex flex-col"
    >
      <div class="mb-6">
        <label
          for="default-input"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Current Password
        </label>
        <input
        onChange={handleChange}
          type="text"
          name="current_password"
          id="default-input"
          value={input.password}
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div class="mb-6">
        <label
          for="default-input"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          New Password
        </label>
        <input
          onChange={handleChange}
          name="new_password"
          type="text"
          id="default-input"
          value={input.new_password}
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div class="mb-6">
        <label
          for="default-input"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Confirm New Password
        </label>
        <input
        onChange={handleChange}
          type="text"
          id="default-input"
          name="new_confirm_password"
          value={input.new_confirm_password}
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <button
        type={"submit"}
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-auto self-center"
      >
        Submit
      </button>
    </form>
  );
}

export default ChangePassword;
