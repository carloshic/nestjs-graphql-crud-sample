import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  IBookCreateInput,
  IBookFilterInput,
  IBookUpdateInput,
} from '../../interfaces/book.interface';
import { Book, BookDocument } from '../models/book.db.model';

@Injectable()
export class BookService {
  constructor(
    @InjectModel(Book.name) private readonly Book: Model<BookDocument>,
  ) {}

  find(filter?: IBookFilterInput, skip?: number, limit?: number) {
    return this.Book.find(filter);
  }

  findOne(filter: IBookFilterInput) {
    return this.Book.findOne(filter);
  }

  findOneById(id: string) {
    return this.Book.findById(id);
  }

  create(input: IBookCreateInput) {
    return this.Book.create(input);
  }

  update(id: string, input: IBookUpdateInput) {
    return this.Book.findByIdAndUpdate(
      id,
      {
        $set: {
          ...input,
        },
      },
      {
        new: true,
      },
    );
  }

  delete(id: string) {
    return this.Book.findByIdAndDelete(id);
  }
}
