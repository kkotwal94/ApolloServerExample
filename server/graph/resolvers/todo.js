import Todo from "../../db/models/todo";
export default {
  Query: {
    allTodos: async () => {
      const todos = await Todo.find();
      return todos;
    },
    aTodo: async (root, { author }) => {
      const todos = await Todo.find({ author });
      return todos;
    }
  },
  Mutation: {
    addTodo: async (root, { todo }) => {
      const addedTodo = await Todo.create(todo);
      return addedTodo;
    },
    updateTodo: async (root, { _id, todo }) => {
      const updatedTodo = await Todo.findByIdAndUpdate(_id, todo, {
        new: true
      });
      console.log(updatedTodo);
      return updatedTodo;
    },
    removeTodo: async (root, { _id }) => {
      return await Todo.findByIdAndRemove(_id);
    }
  }
};
