import { faExclamationCircle, faTimesCircle, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card } from "reactstrap";

const getIcon = (status) => {
	switch (status) {
		case "warning":
			return faExclamationCircle;
		case "emergency":
			return faTimesCircle;
		default:
			return faCheckCircle;
	}
}

const getColor = (status) => {
	switch (status) {
		case "warning":
			return "orange";
		case "emergency":
			return "red";
		default:
			return "green";
	}
}

const NestProtect = (props) => {
	const { type } = props;
	const status = type === "co2" ? "warning" : "ok";
	return (
		<Card body className="text-center">
			<h3>{ type === "co2" ? "CO2" : "Smoke" } Status</h3>
			<div>
				<FontAwesomeIcon icon={getIcon(status)} color={getColor(status)} size="3x" />
			</div>
		</Card>
	);
}

export default NestProtect;