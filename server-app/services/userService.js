const userList = require("../models/userModel");
// getData services method
const getDataFromDBService = async () => {
  try {
    const getData = await userList.find();
    console.log(getData);
    return getData;
  } catch (error) {
    console.log(error);
  }
};
// insert data services method
const createDocumentfromDBServices = (requestData) => {
  const inserteData = new userList(requestData);
  inserteData.save().then(() => {
    try {
      console.log(inserteData);
      //   return inserteData;
    } catch (error) {
      console.log(error);
    }
  });
  return inserteData;
};
// getdata by invisual Id
const getDataByIdfromDbService = (id) => {
  try {
    console.log(id);
    const getdatabyId = userList.findById(id);
    console.log(getdatabyId);
    return getdatabyId;
  } catch (error) {
    console.log(error);
  }
};
//
const deleteDocumentFromDBService = (id) => {
  try {
    const deleteDataById = userList.findByIdAndDelete(id);
    console.log(deleteDataById);
    return deleteDataById;
  } catch (error) {
    console.log(error);
  }
};

const updateDocumentFromDBServices = async (id, changesField) => {
  try {
    console.log(id);
    console.log(changesField);
    const updatedDocument = await userList.findByIdAndUpdate(
      id,
      changesField,
      {}
    );
    console.log(updatedDocument);
    return updatedDocument;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getDataFromDBService,
  createDocumentfromDBServices,
  getDataByIdfromDbService,
  deleteDocumentFromDBService,
  updateDocumentFromDBServices,
};
