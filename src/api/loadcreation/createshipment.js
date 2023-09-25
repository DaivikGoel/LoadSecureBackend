var express = require('express');
var router = express.Router();
const executeQuery = require('../../utils/sqlWrapper.js');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Create a new shipment and get the new ID
router.post('/', function(req, res, next) {
  var sql = 'INSERT INTO Shipments (userid) VALUES (?)'; // Assuming 'userid' is the only required field
  var values = [req.body.userid];

  executeQuery(sql, values, req, res)
    .then(result => {
      // Query for the last inserted ID
      var lastInsertIdQuery = 'SELECT LAST_INSERT_ID() as newId';
      return executeQuery(lastInsertIdQuery, [], req, res);
    })
    .then(result => {
      if (result && result.length > 0) {
        const newId = result[0].newId;
        // Send the new ID to the front end
        res.json({ newId });
      } else {
        // Handle error if the new ID couldn't be retrieved
        res.status(500).json({ error: 'Failed to retrieve the new ID' });
      }
    })
    .catch(error => {
      // Handle any errors that occurred during the execution
      console.error(error);
      res.status(500).json({ error: 'Failed to create a new shipment' });
    });
});

module.exports = router;
