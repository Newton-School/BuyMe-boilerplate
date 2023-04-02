const router = require('express').Router();

router.use('/inventory/', require('./inventoryRoutes'));

module.exports = router;