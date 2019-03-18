export default `
    type Todo {
        _id: ID
        author: String!
        isComplete: Boolean
        todo: String!
        createdAt: String
        updatedAt: String
        deletedAt: String
    }

    type Query {
        allTodos: [Todo!]
        aTodo(author: String!): [Todo!]
    }
`;
