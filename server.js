const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const employeeRoutes = require('./routes/employee')
const app = express();
app.use(express.json());
mongoose.connect('mongodb+srv://pateldiya3012:Tirth@3011@assignmentcluster.3mgdw.mongodb.net/comp3123_assigment1', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/emp', employeeRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
