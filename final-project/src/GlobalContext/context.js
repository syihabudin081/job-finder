import React from "react";
import { createContext,useState } from "react";

export const GlobalContext =createContext()



export const GlobalProvider = (props) => {
    
   
    const [currentId, setCurrentId] = useState(-1);
    const [status, setFetchStatus] = useState(true);
    const [data, setData] = useState(null);
    const [filteredData,setFilteredData] = useState(data)
   const [city,setCity] = useState("")

   const [user,setUser] = useState({
    email : "",
    password : "",
    name:"",
    image_url:"",
  })

    return (
        <GlobalContext.Provider value = {{
            data,setData,currentId,setCurrentId,status,setFetchStatus,filteredData,setFilteredData,user,setUser
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}