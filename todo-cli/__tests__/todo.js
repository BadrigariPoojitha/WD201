/* eslint-disable no-undef */
const todoList = require("../todo");
let today = new Date().toLocaleDateString("en-CA");

describe("Todo list getting Tested", () => {
  let todos; // declare todos outside beforeAll to share it with other tests

  beforeAll(() => {
    todos = todoList();
    todos.add({
      title: "DAA algorithums",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });

  test("Adding new todo in the list", () => {
    let length = todos.all.length;

    todos.add({
      title: "node js process of learning",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });

    expect(todos.all.length).toBe(length + 1);
  });

  test("Marking todo as completed", () => {
    // Corrected the expectation to check if the todo is initially marked as false
    expect(todos.all[todos.all.length - 1].completed).toBe(false);

    todos.markAsComplete(todos.all.length - 1);

    // Updated the expectation to check if the todo is marked as true after completion
    expect(todos.all[todos.all.length - 1].completed).toBe(true);
  });

  test("retrieving all todos that are overdue", () => {
    let listOfTodos = todos.overdue();

    expect(
      listOfTodos.every((todo) => {
        return todo.dueDate < today;
      })
    ).toBe(true);
  });

  test("retrieving all todos that are dueToday", () => {
    let listOfTodos = todos.dueToday();

    expect(
      listOfTodos.every((todo) => {
        return todo.dueDate === today;
      })
    ).toBe(true);
  });

  test("retrieving all todos that are dueLater", () => {
    let listOfTodos = todos.dueLater();

    expect(
      listOfTodos.every((todo) => {
        return todo.dueDate > today;
      })
    ).toBe(true);
  });
});
