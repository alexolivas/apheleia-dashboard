import moment from "moment";
import React, { useState } from "react";
// import Calendar from "react-calendar";
import { Card } from "reactstrap";

import HomeEvent from "./HomeEvent";
import upcomingEvents from "./__mocks__/upcomingEvents.js";

const HomeCalendar = (props) => {
	const [value, onChange] = useState(new Date());

	const now = moment();
	const day = now.format("MMM Do YYYY");
	const time = now.format("h:mm a");
	return (
		<div>
			<Card body>
				{/* TODO: this should refresh every 30 seconds */}
				<h3>{day}</h3>
				<h3>{time}</h3>
			</Card>
			{ upcomingEvents.map((event) => <HomeEvent key={event.id} event={event} />)}
		</div>
	);
};

export default HomeCalendar;
