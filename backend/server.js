const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Backend is running');
});

const dataRoutes = require('./routes/dataRoutes');
app.use('/api', dataRoutes);

sequelize
  .sync({ force: false })
  .then(() => console.log('Database & tables created!'))
  .catch((err) => console.error('Error creating tables:', err));

const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

const contactRoutes = require('./routes/contactRoutes');
app.use('/contact', contactRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
