const { Router } = require('express');

const controller = require('./controller')

const router = Router();

router.get('/', controller.getbookcat);

router.get('/:cat', controller.getBookByCat);

module.exports = router