import express from 'express';
import dotenv from 'dotenv';

import connectToDB from './db/connect.js';
import tasksRouter from './routes/tasks.js';
import notFound from './middlewares/not-found.js';
import globalErrorHandler from './middlewares/error-handler.js';

dotenv.config();

const app = express();

// Middlewares
app.use(express.json());
app.use('/api/v1/tasks', tasksRouter);
app.use(notFound);
app.use(globalErrorHandler);

const PORT = process.env.PORT;

const start = async () => {
  try {
    await connectToDB(process.env.MONGO_URI);
    console.log('🎉🎉🎉 Connected to database successfully!');
    app.listen(PORT, () => console.log(`🚀🚀🚀 Server running at port: ${PORT}`));
  } catch (err) {
    console.error('Error connecting to database', { err });
  }
};

start();
