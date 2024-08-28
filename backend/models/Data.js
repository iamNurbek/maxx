
const db = require('../config/db');

exports.getAllData = () => {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM data`;
    db.query(query, (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

exports.insertData = (dataField) => {
  return new Promise((resolve, reject) => {
    const query = `INSERT INTO data (field) VALUES (?)`;
    db.query(query, [dataField], (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};
