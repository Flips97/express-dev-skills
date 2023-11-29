var express = require('express');
var router = express.Router();

const skillsCtrl = require('../controllers/skills')
const { route } = require('.')

// All actual paths start with "/skills"
router.get('/new', skillsCtrl.new)
router.get('/:id', skillsCtrl.show)
router.get('/', skillsCtrl.index)
router.post('/', skillsCtrl.create);
router.delete('/:id', skillsCtrl.delete)

module.exports = router;
