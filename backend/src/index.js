import mongoose from 'mongoose';
import config from './config/config.js';
import app from './app.js';

let server;

// Connect to MongoDB
mongoose.connect(config.mongoose.url, config.mongoose.options)
  .then(() => {
    console.info('Connected to MongoDB');
    startServer();
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  });

// Start the server
function startServer() {
  server = app.listen(config.port, () => {
    console.info(`Listening to port ${config.port}`);
  });
}

// Handle exit
function exitHandler() {
  if (server) {
    server.close(() => {
      console.info('Server closed');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
}

// Handle unexpected errors
function unexpectedErrorHandler(error) {
  console.error(error);
  exitHandler();
}

// Set up event listeners
process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

// Listen for the SIGTERM signal
process.on('SIGTERM', () => {
  console.info('SIGTERM received');
  if (server) {
    server.close();
  }
});