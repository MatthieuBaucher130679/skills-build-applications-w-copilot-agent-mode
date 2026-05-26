import express from 'express';
import mongoose from 'mongoose';

const app = express();
const port = 8000;
const mongoUrl = 'mongodb://127.0.0.1:27017/octofit-tracker';

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'OctoFit Tracker backend is running.' });
});

mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log('Connected to MongoDB at', mongoUrl);

    app.listen(port, () => {
      console.log(`Backend server listening on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  });
