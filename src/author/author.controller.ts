import { Controller, Get, Param } from '@nestjs/common';
import { AuthorService } from './service/author.service';
import { ApiTags } from '@nestjs/swagger';
import { Author } from './model/author.model';

@ApiTags('author')
@Controller('/author')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  /**
   * author get
   * 获取数据一
   * @param id
   */
  @Get('/:id')
  async getById(@Param('id') id: string): Promise<Author> {
    return this.authorService.findOneById(parseInt(id));
  }
}
