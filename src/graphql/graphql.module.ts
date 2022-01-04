import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { DbModule } from '../db/db.module';
import { AuthorResolver } from './resolvers/author.resolver';
import { BookResolver } from './resolvers/book.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    DbModule,
  ],
  providers: [BookResolver, AuthorResolver],
})
export class GraphqlModule {}
