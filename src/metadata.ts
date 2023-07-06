/* eslint-disable */
export default async () => {
    const t = {
        ["./author/model/post.model"]: await import("./author/model/post.model"),
        ["./author/model/author.model"]: await import("./author/model/author.model")
    };
    return { "@nestjs/swagger": { "models": [[import("./author/model/post.model"), { "Post": { id: { required: true, type: () => Number }, title: { required: true, type: () => String }, votes: { required: false, type: () => Number } } }], [import("./author/model/author.model"), { "Author": { id: { required: true, type: () => Number, description: "Test" }, firstName: { required: false, type: () => String }, lastName: { required: false, type: () => String }, posts: { required: true, type: () => [t["./author/model/post.model"].Post] } } }]], "controllers": [[import("./app.controller"), { "AppController": { "getHello": { type: String } } }], [import("./author/author.controller"), { "AuthorController": { "getById": { summary: "author get\n\u83B7\u53D6\u6570\u636E\u4E00", type: t["./author/model/author.model"].Author } } }]] }, "@nestjs/graphql": { "models": [[import("./author/model/post.model"), { "Post": { id: {}, title: {}, votes: { nullable: true } } }], [import("./author/model/author.model"), { "Author": { id: { description: "Test" }, firstName: { nullable: true }, lastName: { nullable: true }, posts: {} } }]] } };
};