import { useEffect, useState } from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

// const [dataApi, setDataApi] = useState([]);

// useEffect(() => {
//     fetch("https://api.spacexdata.com/v3/launches")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setDataApi(data);
//       //   setDisplayData(data);
//       });
//   }, []);



const dataSlice = createSlice({
    name: 'cart',
     initialState,
    reducers: {
    //    search (state){
    // const searchText = state.target.value;
    // const searchResult = dataApi.filter(d => d.rocket.rocket_name.toLowerCase().includes(searchText.toLowerCase()));
    //    } 
    }
});