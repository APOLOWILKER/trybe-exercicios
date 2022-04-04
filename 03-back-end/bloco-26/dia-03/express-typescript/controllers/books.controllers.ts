import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

// import Book from '../interfaces/book.interface';
import BookService from '../services/books.service';

class BooksController {
  bookService = new BookService();

  public async getAll(_req: Request, res: Response) {
    const books = await this.bookService.getAll();
    res.status(StatusCodes.OK).json(books);
  }

  public async getById(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const book = await this.bookService.getById(id);

    if(!book) {
      return res.status(StatusCodes.NOT_FOUND)
      .json({ message: 'Book not found!'});
    }

    res.status(StatusCodes.OK).json(book);
  }

  public async create(req: Request, res: Response) {
    
  }
}

export default BooksController;