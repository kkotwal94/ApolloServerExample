export default {
  Query: {
    allTodos: async () => {
      const todos = [
        {
          _id: 1,
          author: "Karan",
          isComplete: false,
          todo: "Finish this tutorial"
        }
      ];
      return todos;
    },
    aTodo: async (root, { author }) => {
      return [
        {
          _id: 2,
          author: "Karan",
          isComplete: false,
          todo: "Finish this tutorial 2"
        }
      ];
    }
  }
};
