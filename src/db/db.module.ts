import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Author, AuthorSchema } from './models/author.db.model';
import { Book, BookSchema } from './models/book.db.model';
import { AuthorService } from './services/author.service';
import { BookService } from './services/book.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/library'),
    MongooseModule.forFeature([
      {
        name: Book.name,
        schema: BookSchema,
      },
      {
        name: Author.name,
        schema: AuthorSchema,
      },
    ]),
  ],
  providers: [BookService, AuthorService],
  exports: [BookService, AuthorService],
})
export class DbModule {}
