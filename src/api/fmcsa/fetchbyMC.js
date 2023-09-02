var express = require('express');
var router = express.Router();
const axios = require('axios');

const config = require('../../environment/config.js');

router.get('/:mcNumber', async function(req, res, next) { // Add 'async' here

    const mcNumber = req.params.mcNumber;

    try {
        const apiUrl = 'https://mobile.fmcsa.dot.gov/qc/services/carriers/docket-number/' + mcNumber + '/?webKey=' + config.fmcsaapikey;
        
        // Add 'await' here to wait for the promise to resolve
        const response = await axios.get(apiUrl);
        const data = response.data;
        console.log(data);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching data from the API.' });
    }
});

module.exports = router;
