import React from "react";
import { Accordion, Card, Col } from "react-bootstrap";

const Data = (props) => {
  const {
    mission_name,
    rocket,
    rocket_name,
    links,
    mission_patch,
    launch_date_local,
    upcoming,
    launch_year,
    launch_success,
    launch_site
  } = props.data;

  return (
    <div>
      <Col>
        <Card className=" card-color rounded-3 shadow-lg p-3 mb-5  rounded">
          <Card.Img
            className="card-img"
            variant="top"
            src={links.mission_patch}
          />
          <Card.Body className="text-dark">
            <Card.Title>
              <h1>{rocket.rocket_name}</h1>
              <h6>Launched at: {launch_site.site_name_long}</h6>
            </Card.Title>
            <Card.Text className="card">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Mission Name: {mission_name}</li>
                <li className="list-group-item">Launch Status: {launch_success}</li>
                <li className="list-group-item"> Launch Year: {launch_year}</li>
              </ul>
            </Card.Text>
            <Accordion >
  <Accordion.Item eventKey="0">
    <Accordion.Header>View Details</Accordion.Header>
    <Accordion.Body>
      {links.video_link}
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Data;
