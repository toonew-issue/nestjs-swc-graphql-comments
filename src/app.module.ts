import { join } from 'node:path';

import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorController } from './author/author.controller';
import { AuthorResolver } from './author/author.resolver';
import { AuthorService } from './author/service/author.service';
import { PostService } from './author/service/post.service';
import metadata from './metadata';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),

      metadata,
    }),
  ],
  controllers: [AppController, AuthorController],
  providers: [
    AppService,

    // code first
    AuthorResolver,
    AuthorService,
    PostService,
  ],
})
export class AppModule {}
