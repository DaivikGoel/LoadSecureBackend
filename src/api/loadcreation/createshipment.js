// Import required modules
const express = require('express');
const router = express.Router();
const executeQuery = require('../../utils/sqlWrapper.js');

// Middleware for parsing request bodies
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// Create a new shipment and get the new ID
router.post('/', async (req, res) => {

  try {
    // Insert the new shipment record
    const sql = 'INSERT INTO Shipments (userid) VALUES (?)';
    const values = [req.body.userid];
    const insertResult = await executeQuery(sql, values);

    // Query for the last inserted ID
    const lastInsertIdQuery = 'SELECT LAST_INSERT_ID() as newId';
    const result = await executeQuery(lastInsertIdQuery, []);
    console.log(result)
    if (result && result.length > 0) {
      const newId = result[0].newId;
      // Send the new ID to the front end
      res.json({ newId });
    } else {
      // Handle error if the new ID couldn't be retrieved
      res.status(500).json({ error: 'Failed to retrieve the new ID' });
    }
  } catch (error) {
    // Handle any errors that occurred during the execution
    console.error(error);
    res.status(500).json({ error: 'Failed to create a new shipment' });
  }
});

module.exports = router;
