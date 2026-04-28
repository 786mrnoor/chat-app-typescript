import express, { type Request, type Response } from 'express';

const app = express();

// Middleware
app.use(express.json());

// routes
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Server is running smoothly!' });
});

export { app };
