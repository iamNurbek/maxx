const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');
const User = require('./models/User');
require('dotenv').config();

const app = express();

app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend is running');
});

sequelize
  .sync({ force: false })
  .then(() => {
    console.log('Database & tables created!');
  })
  .catch((err) => console.error('Error creating tables:', err));

const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
