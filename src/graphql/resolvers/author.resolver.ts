import {
  Args,
  ID,
  Mutation,
  Query,
  ResolveField,
  Resolver,
  Root,
} from '@nestjs/graphql';
import { AuthorService } from '../../db/services/author.service';
import { BookService } from '../../db/services/book.service';
import {
  Author,
  AuthorCreateInput,
  AuthorFilterInput,
  AuthorUpdateInput,
} from '../models/author.gql.model';

@Resolver(() => Author)
export class AuthorResolver {
  constructor(
    private authorService: AuthorService,
    private bookService: BookService,
  ) {}

  @Query(() => [Author])
  authors(@Args('filter', { nullable: true }) filter: AuthorFilterInput) {
    return this.authorService.find(filter);
  }

  @Query(() => Author)
  author(@Args('filter') filter: AuthorFilterInput) {
    return this.authorService.findOne(filter);
  }

  @Mutation(() => Author)
  createAuthor(@Args('input') input: AuthorCreateInput) {
    return this.authorService.create(input);
  }

  @Mutation(() => Author)
  updateAuthor(
    @Args({
      type: () => ID,
      name: 'id',
    })
    id: string,
    @Args('input') input: AuthorUpdateInput,
  ) {
    return this.authorService.update(id, input);
  }

  @Mutation(() => Author)
  deleteAuthor(
    @Args({
      type: () => ID,
      name: 'id',
    })
    id: string,
  ) {
    return this.authorService.delete(id);
  }

  @ResolveField('books')
  books(@Root() root: Author) {
    return this.bookService.find({
      authorId: root._id,
    });
  }
}
