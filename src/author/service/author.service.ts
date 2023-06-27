import { Injectable } from '@nestjs/common';

import { Author } from '../model/author.model';

@Injectable()
export class AuthorService {
  async findOneById(id: number): Promise<Author> {
    return {
      firstName: 'f',
      id: 1,
      lastName: 'l',
      posts: [],
    };
  }
}
