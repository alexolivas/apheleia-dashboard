// import { faExclamationCircle, faTimesCircle, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card } from "reactstrap";

const NestHumidity = (props) => {
	// const { type } = props;
	// const status = type === "co2" ? "warning" : "ok";
	return (
		<Card body className="text-center">
			<h3>Humidity</h3>
			<div style={{fontSize: "2em"}}>
				35%
			</div>
		</Card>
	);
}

export default NestHumidity;