// controllers/dataController.js
const Data = require('../models/Data');

exports.getData = async (req, res) => {
  try {
    const data = await Data.getAllData();
    res.json(data);
  } catch (err) {
    res.status(500).send('Error retrieving data');
  }
};

exports.createData = async (req, res) => {
  const { dataField } = req.body;
  try {
    await Data.insertData(dataField);
    res.status(201).send('Data inserted successfully');
  } catch (err) {
    res.status(500).send('Error inserting data');
  }
};
