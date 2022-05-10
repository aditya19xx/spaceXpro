// import { useEffect, useState } from "react";
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
     add(state,action){
         state.push(action.payload);
     }
    }
});

export const {add} = dataSlice.actions;
export default dataSlice.reducer; 