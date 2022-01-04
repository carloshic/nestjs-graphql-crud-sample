import { IBook } from './book.interface';

export interface IAuthorSchema {
  name: string;
  lastname: string;
}

export interface IAuthor extends IAuthorSchema {
  _id: string;
  books: IBook[];
}

export interface IAuthorFilterInput extends Partial<IAuthorSchema> {
  _id: string;
}

export type IAuthorCreateInput = IAuthorSchema;

export type IAuthorUpdateInput = Partial<IAuthorSchema>;
