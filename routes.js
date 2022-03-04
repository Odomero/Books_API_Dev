const { Router } = require('express');

const controller = require('./controller')

const router = Router();

router.get('/', controller.getbookcat);
router.post('/', controller.addBook);
router.delete('/:title', controller.deleteBook);
router.get('/:book_cat_id', controller.getBookByCat);


module.exports = router