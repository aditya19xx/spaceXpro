import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Data from "../Data/Data";
import Navigation from "../Navigation/Navigation";

const Home = () => {
  const [dataApi, setDataApi] = useState([]);
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/launches")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDataApi(data);
        setDisplayData(data);
      });
  }, []);
  return (
    <>
      <Navigation></Navigation>
      <div className="w-75 mx-auto mt-5">
        <Row xs={1} md={2} className="g-4">
          {
              displayData.map(dt => <Data
              key={'flight_number'}
              data={dt}
              ></Data>)
          }
        </Row>
      </div>
    </>
  );
};

export default Home;
