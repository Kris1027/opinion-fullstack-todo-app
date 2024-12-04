import express from 'express';
import cors from 'cors';
import taskRouter from './routes/task.route.js';
import startServer from './server.js';

export const app = express();

app.use(express.json());
app.use(cors());
app.use(taskRouter);

startServer();
