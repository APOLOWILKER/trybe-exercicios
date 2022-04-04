import express, { Request, Response }  from "express";
import { StatusCodes } from "http-status-codes";
import BooksRoutes from './routes/books.routes';

const PORT = 8000;

const app = express();


app.get('/', (req: Request, res: Response) => {
  res.status(StatusCodes.OK).send('Express + TypeScript')
});

app.use( BooksRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
