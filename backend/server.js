require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const swaggerUi = require("swagger-ui-express");
const { swaggerOptions } = require("./swagger/swagger");

const logger = require("./logger/logger");

const bookRoutes = require("./routes/books");
const userRoutes = require("./routes/user");

// express app
const app = express();

// Validate environment variables
if (!process.env.MONGO_URI) {
	logger.error("MONGO_URI is not defined in environment variables.");
	process.exit(1);
}

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
	logger.debug(req.path, req.method);
	next();
});

// API Documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerOptions));

// routes
app.use("/api/books", bookRoutes);
app.use("/api/user", userRoutes);

// connect to db
mongoose
	.connect(`${process.env.MONGO_URI}${process.env.MONGO_COLLECTION}`)
	.then(() => {
		// listen for requests
		app.listen(process.env.PORT, () => {
			console.log("Connected to db & listening on port", process.env.PORT);
		});
	})
	.catch((error) => {
		console.error(error);
	});
