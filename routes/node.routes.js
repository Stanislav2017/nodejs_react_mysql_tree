const express = require('express');
const router = express.Router();
const NodeController = require('../controllers/node.controller');
const { auth } = require('../middleware/middleware');

router.get('/list', auth, NodeController.list);

router.post('/create', auth, NodeController.create);

router.delete('/:id/delete', auth, NodeController.remove);

module.exports = router;