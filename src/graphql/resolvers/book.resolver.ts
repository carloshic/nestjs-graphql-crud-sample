import {
  Args,
  ID,
  Mutation,
  Query,
  ResolveField,
  Resolver,
  Root,
} from '@nestjs/graphql';
import { BookService } from '../../db/services/book.service';
import { AuthorService } from '../../db/services/author.service';
import {
  Book,
  BookCreateInput,
  BookFilterInput,
  BookUpdateInput,
} from '../models/book.gql.model';
import { Author } from '../../db/models/author.db.model';

@Resolver(() => Book)
export class BookResolver {
  constructor(
    private authorService: AuthorService,
    private bookService: BookService,
  ) {}

  @Query(() => [Book])
  books(@Args('filter', { nullable: true }) filter: BookFilterInput) {
    return this.bookService.find(filter);
  }

  @Query(() => Book)
  book(@Args('filter') filter: BookFilterInput) {
    return this.bookService.findOne(filter);
  }

  @Mutation(() => Book)
  createBook(@Args('input') input: BookCreateInput) {
    return this.bookService.create(input);
  }

  @Mutation(() => Book)
  updateBook(
    @Args({
      type: () => ID,
      name: 'id',
    })
    id: string,
    @Args('input') input: BookUpdateInput,
  ) {
    return this.bookService.update(id, input);
  }

  @Mutation(() => Book)
  deleteBook(
    @Args({
      type: () => ID,
      name: 'id',
    })
    id: string,
  ) {
    return this.bookService.delete(id);
  }

  @ResolveField(() => Author, {
    name: 'author',
  })
  author(@Root() root: Book) {
    return this.authorService.findOneById(root.authorId);
  }
}
