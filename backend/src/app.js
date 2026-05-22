const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const policyRoutes = require('./routes/policyRoutes');
const processRoutes = require('./routes/processRoutes');
const applicationRoutes = require('./routes/applicationRoutes');
const certificateRoutes = require('./routes/certificateRoutes');
const analysisRoutes = require('./routes/analysisRoutes');

const app = express();

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/policies', policyRoutes);
app.use('/api/process', processRoutes);
app.use('/api/applications', applicationRoutes);
app.use('/api/certificates', certificateRoutes);
app.use('/api/analysis', analysisRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message || 'Internal Server Error' });
});

module.exports = app;
