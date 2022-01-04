import { IAuthor } from './author.interface';

export interface IBookSchema {
  authorId: string;
  name: string;
  editorial: string;
}

export interface IBook extends IBookSchema {
  _id: string;
  author: IAuthor;
}

export interface IBookFilterInput extends Partial<IBookSchema> {
  _id?: string;
}

export type IBookCreateInput = IBookSchema;

export type IBookUpdateInput = Partial<IBookSchema>;
