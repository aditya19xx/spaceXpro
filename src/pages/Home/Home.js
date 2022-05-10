import React, { useEffect, useState } from "react";
import { Button, Form, Nav, Navbar, Row, Spinner } from "react-bootstrap";
import Data from "../Data/Data";

const Home = () => {
  const [dataApi, setDataApi] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // setIsLoading(true);
    fetch("https://api.spacexdata.com/v3/launches")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDataApi(data);
        setDisplayData(data);
      });
  }, []);

  const handleSearch = e => {
    const searchText = e.target.value;
    const searchResult = dataApi.filter(d => d.rocket.rocket_name.toLowerCase().includes(searchText.toLowerCase()));
    setDisplayData(searchResult);
    // const rocketFound = dataApi;
    // console.log(rocketFound);
}

// const loadingSpinner = () => {
  
//   return (
//     <div>
//       <Spinner animation="border" role="status">
//         <span className="visually-hidden">Loading...</span>
//       </Spinner>
//     </div>
//   );
// }


  return (
   
    <>
      <navigation>
      <div className="body">
             <Navbar bg="dark" variant="dark" expand="lg">
                    <Navbar.Brand href="#">SpaceXpro</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mr-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            {/* <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">About</Nav.Link> */}
                        </Nav>
                       
                    </Navbar.Collapse>
                </Navbar>
        </div>
      </navigation>
     <div>
     <Form className="d-flex">
                            <input
                            onChange={ handleSearch }
                                type="search"
                                placeholder="Search by Rocket name"
                                className="mr-2"
                                aria-label="Search"
                            />
                            <Button  variant="outline-success">Search</Button>
                        </Form>
     </div>
     <div>
       <h4>Total {displayData.length} rockets found</h4>
     </div>
      <div className="w-75 mx-auto mt-5">
      {/* {setIsLoading(true)} */}
        <Row xs={1} md={2} lg={3} className="g-4">
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

