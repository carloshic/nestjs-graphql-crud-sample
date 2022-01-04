import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  IAuthorCreateInput,
  IAuthorFilterInput,
  IAuthorUpdateInput,
} from '../../interfaces/author.interface';
import { Author, AuthorDocument } from '../models/author.db.model';

@Injectable()
export class AuthorService {
  constructor(
    @InjectModel(Author.name) private readonly Author: Model<AuthorDocument>,
  ) {}

  find(filter?: IAuthorFilterInput, skip?: number, limit?: number) {
    return this.Author.find(filter);
  }

  findOne(filter: IAuthorFilterInput) {
    return this.Author.findOne(filter);
  }

  findOneById(id: string) {
    return this.Author.findById(id);
  }

  create(input: IAuthorCreateInput) {
    return this.Author.create(input);
  }

  update(id: string, input: IAuthorUpdateInput) {
    return this.Author.findByIdAndUpdate(
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
    return this.Author.findByIdAndDelete(id);
  }
}
