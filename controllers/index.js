var express = require('express')
  , router = express.Router();

router.use('/', require('./pages/pages'));
router.use('/', require('./pages/blogPage'));
router.use('/', require('./pages/articlePage'));

router.use('/article', require('./api/article'));
router.use('/blog', require('./api/blog'));

module.exports = router;