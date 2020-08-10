import React from "react";
import { Row, Col } from "reactstrap";
import NestProtect from "./NestProtect";
import NestTemperature from "./NestTemperature";
import NestHumidity from "./NestHumidity";

// Contains widgets for the following reports:
// - number of watts of electricity we've consumed so far this month
// - how many days until we have to replace the air filter (should this be in the calendar or on its own?)
// - using the nest API (https://developers.nest.com/reference/api-smoke-co-alarm) get the co_alarm_state alarm state, smoke_alarm_state
// - using the nest API (target_temperature_f) get the current temperature in Farenheit, humidity
const HomeMonitor = (props) => {
	return (
		<Row className="mb-2">
			<Col>
				<NestProtect type="smoke" />
			</Col>
			<Col>
				<NestProtect type="co2" />
			</Col>
			<Col>
				<NestTemperature />
			</Col>
			<Col>
				<NestHumidity />
			</Col>
		</Row>
	)
};

export default HomeMonitor;
