const paths = require("./paths");
const components = require("./components");
const tags = require("./tags");

exports.swaggerOptions = {
	openapi: "3.0.0",
	info: {
		title: "Book Buddy API",
		description: "The API documentation of my Book Buddy App backend",
		version: "1.0.0",
	},
	servers: [
		{
			url: "http://localhost:3000",
			description: "Development server",
		},
	],
	paths,
	components,
	tags,
};
