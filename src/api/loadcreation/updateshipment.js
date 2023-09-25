var express = require('express');
var router = express.Router();
const executeQuery = require('../../utils/sqlWrapper.js');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Update an existing shipment based on loadid
router.post('/', function(req, res, next) {
  var sql = 'UPDATE Shipments SET ' +
            'origin = ?, ' +
            'pickupEarliest = ?, ' +
            'pickupLatest = ?, ' +
            'pickupHours = ?, ' +
            'dropOffHours = ?, ' +
            'equipmentType = ?, ' +
            'length = ?, ' +
            'weight = ?, ' +
            'commodity = ?, ' +
            'referenceId = ? ' +
            'WHERE ID = ?'; // Assuming loadid is the unique identifier for the row

  var values = [
    req.body.origin,
    req.body.pickupEarliest,
    req.body.pickupLatest,
    req.body.pickupHours,
    req.body.dropOffHours,
    req.body.equipmentType,
    req.body.length,
    req.body.weight,
    req.body.commodity,
    req.body.referenceId,
    req.body.shipmentid // Assuming loadid is part of the request body
  ]; 

  executeQuery(sql, values, req, res);
});

module.exports = router;
