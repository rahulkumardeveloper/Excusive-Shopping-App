const express = require("express");
const router = express.Router();
// const OlympicRunningList = require("../models/userModel");
const userController = require("../controllers/userController");
router.get("/", (req, res) => {
  res.send("This is Home page");
});
// getting the All data
router.get("/crudApplication/getAll", userController.getDataController);
//
// create a new document by Post method

router.post(
  "/crudApplication/insertDocument",
  userController.createDataController
);

// getData by indivusial Id;

router.get(
  "/crudApplication/getDocumentById/:id",
  userController.getDatabyIdController
);

// delete document by Id
router.delete(
  "/crudApplication/deleteDocument/:id",
  userController.deleteDocumentController
);

// update document by Id

router.patch(
  "/crudApplication/updateDocument/:id",
  userController.updateDocumentController
);

module.exports = router;
