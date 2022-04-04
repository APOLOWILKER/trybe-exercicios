import { Router } from "express";
import BooksController from "../controllers/books.controllers";

const router = Router();

const booksController = new BooksController();


router.get('/books', async (req, res) => await booksController.getAll(req, res));
router.get('/books/:id', async (req, res) => await booksController.getById(req, res));

export default router;
