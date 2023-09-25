// Import required modules
const express = require('express');
const router = express.Router();
const executeQuery = require('../../utils/sqlWrapper.js');

// Middleware for parsing request bodies
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// Route to get all shipments
router.get('/', async (req, res) => {
    try {
      const sql = 'SELECT * FROM Shipments';
      const result = await executeQuery(sql, []);
      res.json(result); // Send all shipments as JSON response
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch shipments' });
    }
  });
  
  module.exports = router;

  
  
  
  
  