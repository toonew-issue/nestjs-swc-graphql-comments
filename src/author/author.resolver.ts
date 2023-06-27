import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';

import { Author } from './model/author.model';
import { Post } from './model/post.model';
import { AuthorService } from './service/author.service';
import { PostService } from './service/post.service';

@Resolver((of) => Author)
export class AuthorResolver {
  constructor(
    private readonly authorService: AuthorService,
    private readonly postService: PostService,
  ) {}

  @Query((returns) => Author, { name: 'author' })
  async author(@Args('id', { type: () => Int }) id: number): Promise<Author> {
    return this.authorService.findOneById(id);
  }

  @ResolveField('posts', (returns) => [Post])
  async posts(@Parent() author: Author): Promise<Post[]> {
    const { id } = author;
    return this.postService.findAll({ authorId: id });
  }
}
