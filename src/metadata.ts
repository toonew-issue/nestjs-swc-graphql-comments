/* eslint-disable */
export default async () => {
    const t = {};
    return { "@nestjs/graphql": { "models": [[import("./author/model/post.model"), { "Post": { id: {}, title: {}, votes: { nullable: true } } }], [import("./author/model/author.model"), { "Author": { id: { description: "Test" }, firstName: { nullable: true }, lastName: { nullable: true }, posts: {} } }]] } };
};