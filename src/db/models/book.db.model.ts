import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { IBookSchema } from '../../interfaces/book.interface';

@Schema({ collection: 'books' })
export class Book implements IBookSchema {
  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: 'authors',
    required: true,
  })
  authorId: string;
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  editorial: string;
}

export type BookDocument = Book & Document;
export const BookSchema = SchemaFactory.createForClass(Book);
