/* eslint-disable no-undef */
const todoList = require("../todo");
let today = new Date().toLocaleDateString("en-CA");

const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();

describe("Todo list getting Tested", () => {
  beforeAll(() => {
    add({
      title: "DAA algorithums",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });

  test("Adding new todo in the list", () => {
  let length = all.length;

  add({
    title: "node js process of learning",
    completed: false,
    dueDate: new Date().toLocaleDateString("en-CA"),
  });

  // Updated the expectation to check if the length increased by 1
  expect(all.length).toBe(length + 1);
});


  test("Marking todo as completed", () => {
  // Corrected the expectation to check if the todo is initially marked as false
  expect(all[all.length - 1].completed).toBe(false);

  markAsComplete(all.length - 1);

  // Updated the expectation to check if the todo is marked as true after completion
  expect(all[all.length - 1].completed).toBe(true);
});


  test("retrieving all todos that are overdue", () => {
    let listOfTodos = overdue();

    expect(
      listOfTodos.every((todo) => {
        return todo.dueDate < today;
      })
    ).toBe(true);
  });

  test("retrieving all todos that are dueToday", () => {
    let listOfTodos = dueToday();

    expect(
      listOfTodos.every((todo) => {
        return todo.dueDate === today;
      })
    ).toBe(true);
  });

  test("retrieving all todos that are dueLater", () => {
    let listOfTodos = dueLater();

    expect(
      listOfTodos.every((todo) => {
        return todo.dueDate > today;
      })
    ).toBe(true);
  });
});
