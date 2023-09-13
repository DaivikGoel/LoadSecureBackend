const https = require('https');
const fs = require('fs');
const app = require('./app');

// Load your SSL/TLS certificate and private key files
const privateKey = fs.readFileSync('./SSL/private.key', 'utf8');
const certificate = fs.readFileSync('./SSL/certificate.crt', 'utf8');

const credentials = {
  key: privateKey,
  cert: certificate,
};

const port = process.env.PORT || 4000;

const httpsServer = https.createServer(credentials, app);

httpsServer.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening: https://localhost:${port}`);
  /* eslint-enable no-console */
});
