import { useState, useEffect } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const DataView = () => {
  const [data, setData] = useState([]);
  const [month, setMonth] = useState('');

  useEffect(() => {
    if (month) {
      fetch(`http://localhost:5000/api/solar-data?month=${month}`)
        .then((response) => response.json())
        .then((fetchedData) => setData(fetchedData))
        .catch((error) => console.error('Error fetching data: ', error));
    } else {
      setData([]);
    }
  }, [month]);

  return (
    <div>
      <h2>Select a Month to Display Data</h2>
      <select value={month} onChange={(e) => setMonth(e.target.value)}>
        <option value="">-- Select Month --</option>
        {Array.from({ length: 12 }, (_, i) => (
          <option key={i + 1} value={i + 1}>{`${i + 1}`}</option>
        ))}
      </select>

      {data.length > 0 ? (
        <LineChart
          width={window.innerWidth - 40}
          height={500}
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="DATE_TIME" domain={[0, 'auto']} />
          <YAxis domain={[0, 15000]} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="AC_POWER"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="DC_POWER" stroke="#82ca9d" />
        </LineChart>
      ) : (
        <p>Please select a month to see the data.</p>
      )}
    </div>
  );
};

export default DataView;
