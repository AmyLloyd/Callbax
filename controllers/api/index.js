const router = require('express').Router();
const userRoutes = require('./userRoutes');
const factRoutes = require('./factRoutes');
const setRoutes = require('./setRoutes');

router.use('/users', userRoutes);
router.use('/facts', factRoutes);
router.use('/sets', setRoutes);

module.exports = router;