const todoList = require("../todo");

describe("TodoList Test Suite", () => {
  let todos;

  beforeEach(() => {
    todos = todoList();
  });

  test("Should add new todo", () => {
    const initialTodoCount = todos.all.length;

    todos.add({
      title: "Test todo 2",
      completed: false,
      dueDate: "2023-12-20",
    });

    expect(todos.all.length).toBe(initialTodoCount + 1);
  });

  test("Should mark a todo as complete", () => {
    todos.add({
      title: "Test todo",
      completed: false,
      dueDate: "2023-12-20",
    });

    expect(todos.all[0].completed).toBe(false);
    todos.markAsComplete(0);
    expect(todos.all[0].completed).toBe(true);
  });

  test("Should retrieve overdue items", () => {
    const overdueItem = {
      title: "Complete my assignment",
      dueDate: "2023-12-19",
      completed: false,
    };

    todos.add(overdueItem);

    expect(todos.overdue().length).toBe(1);
  });

  test("Should retrieve due today items", () => {
    const todayItem = {
      title: "Complete this 5th milestone",
      dueDate: "2023-12-20",
      completed: false,
    };

    todos.add(todayItem);

    expect(todos.dueToday().length).toBe(1);
  });

  test("Should retrieve due later items", () => {
    const laterItem = {
      title: "Prepare for sem exams",
      dueDate: "2023-12-21",
      completed: false,
    };

    todos.add(laterItem);

    expect(todos.dueLater().length).toBe(1);
  });
});
