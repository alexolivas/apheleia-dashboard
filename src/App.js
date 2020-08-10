import React from "react";
import HomeCalendar from "./calendar/HomeCalendar";
import { Container, Col, Row } from "reactstrap";
import Transportation from "./transportation/Transportation";
import HomeMonitor from "./home/HomeMonitor";

import "./App.css";

const App = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={4}>
          <HomeCalendar />
        </Col>
        <Col md={8}>
          <Transportation />
          <HomeMonitor />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
