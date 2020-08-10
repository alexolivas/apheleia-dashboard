import { faBus, faTrain } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

const getIcon = (type) => {
	switch (type) {
		case "train":
			return faTrain;
		default:
			return faBus;
	}
}

// const getColor = ()

const getTrainLine = (train) => {
	switch (train) {
		case "red":
			return "red";
		case "green":
			return "green";
		case "yellow":
			return ;
		case "blue":
			return "blue";
		case "orange":
			return "orange";
		default:
			return "silver";
	}
}

const NextRide = (props) => {
	// type = ["train", "bus"]
	const { name, type, line } = props;

	// This has to fetch the data from the WMATA API
	return (
		<Card>
			{/* <CardHeader>{name}</CardHeader> */}
			<CardBody>
				<Row>
					<Col md={3}>
						<FontAwesomeIcon icon={getIcon(type)} color={getTrainLine(line)} size="3x" />
					</Col>
					<Col md={9}>
						<Row>
							<span style={{fontWeight:"bolder"}}>{name}</span>
						</Row>
						<Row>
							3 min, 12 min
						</Row>
					</Col>
				</Row>
				{/* <Row>
					<Col md={8}>
						{name}
					</Col>
					<Col md={4}>
						3 min<br/>
						12 min
					</Col>
				</Row> */}
			</CardBody>
		</Card>
	);
}

export default NextRide;
