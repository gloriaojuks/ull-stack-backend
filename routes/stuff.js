const express = require('express');
const router = express.Router();
const stuffCtrl = require('../controllers/stuff')


//routes
router.post('/', stuffCtrl.createThing)
router.get('/:id',stuffCtrl.getOneThing)
router.get('/',stuffCtrl.getAllStuff)
router.put('/:id', stuffCtrl.modifyThing)
router.delete('/:id', stuffCtrl.deleteThing)


 

module.exports = router;