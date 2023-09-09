const express = require('express');
const router = express.Router();

//fmcsa
 const fetchcarrierinfo = require('./fmcsa/fetchbyMC');


router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});


//authentication
router.use('/fetchcarrierinfo', fetchcarrierinfo);



module.exports = router;
