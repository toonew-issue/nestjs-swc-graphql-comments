/* eslint-disable */
export default async () => {
  const t = {};
  return {
    '@nestjs/graphql': {
      models: [
        [
          import('../D:/code/node-tx/nestjs-study/src/author/model/post.model'),
          { Post: {} },
        ],
        [
          import(
            '../D:/code/node-tx/nestjs-study/src/author/model/author.model'
          ),
          { Author: { id: { type: () => Number, description: 'Test' } } },
        ],
      ],
    },
  };
};
