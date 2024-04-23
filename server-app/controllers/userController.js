const userList = require("../models/userModel");
const userService = require("../services/userService");

const getDataController = async (req, res) => {
  try {
    const userdata = await userService.getDataFromDBService();
    res.send({ data: userdata });
  } catch (error) {
    console.log(error);
  }
};

const createDataController = async (req, res) => {
  try {
    const requestData = req.body;
    const createDocument = await userService.createDocumentfromDBServices(
      requestData
    );
    res.send(createDocument);
  } catch (error) {
    console.log(error);
  }
};
// const createDocumentController = async (req, res) => {
//   try {
//     const createdData = await userService.createDocumentfromDBServices(
//       req.body
//     );
//     res.send({ data: createdData });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({ status: false, message: "Internal Server Error" });
//   }
// };

const getDatabyIdController = async (req, res) => {
  try {
    const id = req.params.id;
    const getDatabyId = await userService.getDataByIdfromDbService(id);
    res.send(getDatabyId);
  } catch (error) {
    console.log(error);
  }
};
// delete controller
const deleteDocumentController = async (req, res) => {
  try {
    const deleteData = await userService.deleteDocumentFromDBService(
      req.params.id
    );
    res.send(deleteData);
  } catch (error) {
    console.log(error);
  }
};
// update document by id

const updateDocumentController = async (req, res) => {
  try {
    const updatedDocument = await userService.updateDocumentFromDBServices(
      req.params.id,
      req.body
    );
    res.send(updatedDocument);
  } catch (error) {
    console.log();
  }
};

module.exports = {
  getDataController,
  createDataController,
  getDatabyIdController,
  deleteDocumentController,
  updateDocumentController,
};
