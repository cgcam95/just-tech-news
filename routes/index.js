const router = require('express').Router();

const apiRoutes = require('./api'); // looking for hte index.js in the api folder

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;