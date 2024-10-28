import mongoose from 'mongoose';
import config from './config/config.js';
import app from './app.js';

let server;

mongoose.connect(config.mongoose.url, config.mongoose.options)
  .then(() => {
    console.info('Connected to MongoDB');
    server = app.listen(config.port, () => {
      console.info(`Listening to port ${config.port}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  });

const exitHandler = () => {
  if (server) {
    server.close(() => {
      console.info('Server closed');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
  console.error(error);
  exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
  console.info('SIGTERM received');
  if (server) {
    server.close();
  }
});
