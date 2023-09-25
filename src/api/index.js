const express = require('express');
const router = express.Router();

//fmcsa
 const fetchcarrierinfo = require('./fmcsa/fetchbyMC');
 const updateshipment = require('./loadcreation/updateshipment')
 const createshipment = require('./loadcreation/createshipment')
 const queryshipments = require ('./loadcreation/queryshipments')

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});


//authentication
router.use('/fetchcarrierinfo', fetchcarrierinfo);
router.use('/updateshipment', updateshipment);
router.use('/createshipment', createshipment )
router.use('/queryshipments', queryshipments)



module.exports = router;
