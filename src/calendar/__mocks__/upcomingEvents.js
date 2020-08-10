import moment from "moment";
// import React from "react";

const data = [
	{
		"id": "1",
		"source": "apple",
		"type": "event",
		"category": "appointment",
		"createdDate": "",
		"updatedTime": "",
		"startDateTime": moment().add(1, "days").toJSON(),
		"endDateTime": "",
		"title": "Doctor's appointment",
		"content": ""
	},
	{
		"id": "2",
		"source": "apple",
		"type": "reminder",
		"category": "appointment",
		"createdDate": "",
		"updatedTime": "",
		"startDateTime": moment().add(1, "days").toJSON(),
		"endDateTime": "",
		"title": "",
		"content": ""
	},
	{
		"id": "7",
		"source": "google",
		"type": "event",
		"category": "futbol",
		"createdDate": "",
		"updatedTime": "",
		"startDateTime": moment().add(2, "days").toJSON(),
		"endDateTime": "",
		"title": "Calidosos FC vs Fake Madrid",
		"content": ""
	},
	{
		"id": "3",
		"source": "amazon",
		"type": "reminder",
		"category": "appointment",
		"createdDate": "",
		"updatedTime": "",
		"startDateTime": moment().add(4, "days").toJSON(),
		"endDateTime": "",
		"title": "",
		"content": ""
	},
	{
		"id": "4",
		"source": "apple",
		"type": "event",
		"category": "futbol",
		"createdDate": "",
		"updatedTime": "",
		"startDateTime": moment().add(6, "days").toJSON(),
		"endDateTime": "",
		"title": "Toca Jrs vs Mistica FC",
		"content": ""
	},
	{
		"id": "5",
		"source": "google",
		"type": "event",
		"category": "travel",
		"createdDate": "",
		"updatedTime": "",
		"startDateTime": moment().add(9, "days").toJSON(),
		"endDateTime": "",
		"title": "Flight to Cali, Colombia",
		"content": ""
	}
];

export default data;