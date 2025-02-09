const { format, createLogger, transports } = require("winston");
require("winston-daily-rotate-file");
require("winston-mongodb");

const { combine, timestamp, label, printf } = format;

// Logger configuration constants
const CATEGORY = "Logger";
const LOG_DIR = process.env.LOG_DIR || "logs";
const MAX_LOG_DAYS = process.env.MAX_LOG_DAYS || "14d";
const LOG_LEVEL = process.env.LOG_LEVEL || "debug";
const NODE_ENV = process.env.NODE_ENV || "development";

// Common log format for both console and file
const logFormat = combine(
	label({ label: CATEGORY }),
	timestamp({ format: "DD-MM-YYYY HH:mm:ss" }),
	printf(({ level, message, label, timestamp }) => {
		return `[${timestamp}] [${label}] ${level.toUpperCase()}: ${message}`;
	})
);

// Transport for rotating file logs
const fileRotateTransport = new transports.DailyRotateFile({
	filename: `${LOG_DIR}/rotate-%DATE%.log`,
	datePattern: "DD-MM-YYYY",
	maxFiles: MAX_LOG_DAYS,
	maxSize: "20m", // Limit file size to 20 MB
	format: logFormat,
});

// Logger instance
const logger = createLogger({
	level: LOG_LEVEL,
	format: logFormat,
	transports: [fileRotateTransport],
});

logger.add(
	new transports.Console({
		format: logFormat,
	})
);

// Add MongoDB transport for production environment
if (NODE_ENV === "production" && process.env.MONGODB_URI) {
	try {
		logger.add(
			new transports.MongoDB({
				level: "error",
				db: process.env.MONGODB_URI,
				options: { useUnifiedTopology: true },
				collection: process.env.LOG_COLLECTION || "logs",
				format: logFormat,
			})
		);
	} catch (error) {
		console.error("Failed to initialize MongoDB transport:", error.message);
	}
}

module.exports = logger;
