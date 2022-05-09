import React, { useEffect, useState } from 'react';
import Navigation from '../Navigation/Navigation';

const Home = () => {
    const [dataApi, setDataApi] = useState([]);
    const [displayData, setDisplayData] = useState([]);

    useEffect(()=>{
         fetch('https://api.spacexdata.com/v3/launches')
         .then(res => res.json())
         .then(data => {
             console.log(data);
             setDataApi(data);
             setDisplayData(data);
         })
    }, [])
    return (
        <>
            <Navigation></Navigation>
            <h2>This is Home</h2>
        </>
    );
};

export default Home;