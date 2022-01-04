import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import {
  IBook,
  IBookCreateInput,
  IBookFilterInput,
  IBookUpdateInput,
} from '../../interfaces/book.interface';
import { Author } from './author.gql.model';

@ObjectType()
export class Book implements IBook {
  @Field(() => ID)
  _id: string;
  @Field(() => Author)
  author: Author;
  @Field()
  authorId: string;
  @Field()
  name: string;
  @Field()
  editorial: string;
}

@InputType()
export class BookFilterInput implements IBookFilterInput {
  @Field(() => ID, { nullable: true })
  _id: string;
  @Field({ nullable: true })
  authorId: string;
  @Field({ nullable: true })
  name: string;
  @Field({ nullable: true })
  editorial: string;
}

@InputType()
export class BookCreateInput implements IBookCreateInput {
  @Field({ nullable: false })
  authorId: string;
  @Field({ nullable: false })
  name: string;
  @Field({ nullable: false })
  editorial: string;
}

@InputType()
export class BookUpdateInput implements IBookUpdateInput {
  @Field({ nullable: true })
  authorId: string;
  @Field({ nullable: true })
  name: string;
  @Field({ nullable: true })
  editorial: string;
}
