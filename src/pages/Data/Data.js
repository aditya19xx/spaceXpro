import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Data = (props) => {
    const { mission_name,rocket, rocket_name, links, mission_patch, launch_date_local, upcoming, launch_year,launch_success} = props.data;

    return (
        <div>
            <Col>
                <Card className="bg-dark card-color rounded-3 shadow-lg p-3 mb-5  rounded"  >
                    <Card.Img className="card-img" variant="top" src={links.mission_patch} />
                    <Card.Body className="text-white">
                        <Card.Title>
                            <h1>{rocket.rocket_name}</h1>
                            <h6>{mission_name}</h6>

                        </Card.Title>
                        <Card.Text>
                           
                           <h5> <span className="">Launch Date:</span> {launch_date_local} </h5>
                           <h5> Launch Year: {launch_year}</h5>
                           
                           <h5> Launch Status: {launch_success} </h5>
                           <h5> Is it upcoming? {upcoming} </h5>
                           
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Data;