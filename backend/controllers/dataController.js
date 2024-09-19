const fs = require('fs');
const csv = require('csv-parser');
const moment = require('moment');

const readCSVData = (req, res) => {
  const results = [];
  const selectedMonth = parseInt(req.query.month);

  fs.createReadStream('../data/data.csv')
    .pipe(csv())
    .on('data', (data) => {
      const dataDate = moment(data.DATE_TIME, 'M/D/YYYY h:mm:ss A');
      if (!selectedMonth || dataDate.month() + 1 === selectedMonth) {
        results.push(data);
      }
    })
    .on('end', () => {
      res.json(results);
    })
    .on('error', (err) => {
      console.error('Error reading CSV file:', err);
      res.status(500).json({ error: 'Failed to read CSV file' });
    });
};

module.exports = {
  readCSVData,
};
