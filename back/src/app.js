const express = require('express');
const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());


const userRoutes = require('./routes/userRoutes');
const documentRoutes = require('./routes/documentRoutes');

app.use('/users', userRoutes);
app.use('/documents', documentRoutes);

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
