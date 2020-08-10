import { faCalendarCheck, faFutbol, faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "reactstrap";

const getIcon = (category) => {
	switch (category) {
		case "futbol":
			return faFutbol;
		case "travel":
			return faPlaneDeparture;
		default:
			return faCalendarCheck;
	}
}

const HomeEvent = (props) => {
	const { event } = props;
	window.console.log(event);
	const eventDate = moment(event.startDateTime);

	return (
		<Card>
			<CardHeader>
				<FontAwesomeIcon icon={getIcon(event.category)} />
				{" "}
				{eventDate.calendar()}
				<span className="float-right">{eventDate.startOf("day").fromNow()}</span>
			</CardHeader>
			<CardBody>{event.title}</CardBody>
			{/* <CardFooter>Test</CardFooter> */}
		</Card>
	);
};

export default HomeEvent;
