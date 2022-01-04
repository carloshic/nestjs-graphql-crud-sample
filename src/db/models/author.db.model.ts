import { IAuthorSchema } from '../../interfaces/author.interface';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'authors' })
export class Author implements IAuthorSchema {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  lastname: string;
}

export type AuthorDocument = Author & Document;
export const AuthorSchema = SchemaFactory.createForClass(Author);
