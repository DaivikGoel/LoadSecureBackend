const express = require('express');
const router = express.Router();

//fmcsa
 const fetchcarrierinfo = require('./fmcsa/fetchbyMC');
 const updateshipment = require('./loadcreation/updateshipment')


router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});


//authentication
router.use('/fetchcarrierinfo', fetchcarrierinfo);
router.use('/updateshipment', updateshipment);



module.exports = router;
