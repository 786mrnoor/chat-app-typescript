import { app } from './app.js';

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`Server ready at http://localhost:${PORT}`);
});

process.on('SIGTERM', () => shutDown('SIGTERM'));
process.on('SIGINT', () => shutDown('SIGINT'));

function shutDown(signal: string) {
  console.log(`Received ${signal}. Shutting down gracefully...`);

  // 1. Stop accepting new requests
  server.close(() => {
    console.log('HTTP server closed.');

    process.exit(0);
  });

  // Force exit if it takes too long (30s)
  setTimeout(() => {
    console.error('Could not close connections in time, forcing shut down');
    process.exit(1);
  }, 30000);
}
