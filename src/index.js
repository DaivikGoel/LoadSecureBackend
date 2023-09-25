const http = require('http'); // Use the 'http' module instead of 'https'
const app = require('./app');

const port = process.env.PORT || 4000;

const httpServer = http.createServer(app); // Create an HTTP server

httpServer.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${port}`);
  /* eslint-enable no-console */
});
