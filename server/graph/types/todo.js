export default `
    type Todo {
        _id: ID
        author: String!
        isComplete: Boolean!
        todo: String!
        createdAt: String
        updatedAt: String
        deletedAt: String
    }

    type Query {
        allTodos: [Todo!]
        aTodo(author: String!): [Todo!]
    }

    input TodoInput {
        author: String!
        isComplete: Boolean!
        todo: String
    }

    type Mutation {
        addTodo(
            todo: TodoInput
        ): Todo
        updateTodo(
            _id: ID!
            todo: TodoInput
        ): Todo
        removeTodo(
            _id: ID!
        ): Todo
    }
`;
