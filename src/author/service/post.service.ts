import { Injectable } from '@nestjs/common';

import { Post } from '../model/post.model';

@Injectable()
export class PostService {
  async findAll(param: { authorId: number }): Promise<Post[]> {
    return [{ id: 1, title: 'post-title', votes: 1 }];
  }
}
