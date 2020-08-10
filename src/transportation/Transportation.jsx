import React from "react";
import { Row, Col } from "reactstrap";
import NextRide from "./NextRide";

const Transportation = (props) => {
	return (
		<Row className="mb-2">
			<Col>
				<NextRide name="G8" type="bus" />
			</Col>
			<Col>
				<NextRide name="G12" type="bus" />
			</Col>
			<Col>
				<NextRide name="Glenmont" type="train" line="red" />
			</Col>
		</Row>
	);
}

export default Transportation;
