import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import {
  IAuthor,
  IAuthorCreateInput,
  IAuthorFilterInput,
  IAuthorUpdateInput,
} from '../../interfaces/author.interface';
import { Book } from './book.gql.model';

@ObjectType()
export class Author implements IAuthor {
  @Field(() => ID)
  _id: string;
  @Field(() => [Book])
  books: Book[];
  @Field()
  name: string;
  @Field()
  lastname: string;
}

@InputType()
export class AuthorFilterInput implements IAuthorFilterInput {
  @Field(() => ID, { nullable: true })
  _id: string;
  @Field({ nullable: true })
  name: string;
  @Field({ nullable: true })
  lastname: string;
}

@InputType()
export class AuthorCreateInput implements IAuthorCreateInput {
  @Field({ nullable: false })
  name: string;
  @Field({ nullable: false })
  lastname: string;
}

@InputType()
export class AuthorUpdateInput implements IAuthorUpdateInput {
  @Field({ nullable: true })
  name: string;
  @Field({ nullable: true })
  lastname: string;
}
