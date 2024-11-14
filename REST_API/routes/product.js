const express = require("express")

const dataController = require("../controller/data")

const router = express.Router();

// READ GET/data
router.get('/', dataController.getAllData); 

router.get('/:name', dataController.getData);


//CREATE POST/data
router.post('/', dataController.createData)

//UPDATE PUT/data
router.put('/:name', dataController.replaceData);


//UPDATE Patch/data/:name or id
router.patch('/:name',dataController.updateData);


//DELETE delete/data/:name or id
router.delete('/:name', dataController.deleteData );

exports.router = router;