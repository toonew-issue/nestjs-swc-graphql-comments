/* eslint-disable */
export default async () => {
    const t = {};
    return { "@nestjs/graphql": { "models": [[import("./author/model/post.model"), { "Post": {} }], [import("./author/model/author.model"), { "Author": { id: { type: () => Number, description: "Test" } } }]] } };
};