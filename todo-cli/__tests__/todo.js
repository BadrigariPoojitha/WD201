const todoList = require("../todo");
let AllTodos;

beforeEach(() => {
  AllTodos = todoList();
});

describe("TodoList Test Suite", () => {
  test("Should add new todo", () => {
    const itemcount = AllTodos.all.length;
    AllTodos.add({
      title: "Test todo 10",
      completed: false,
      dueDate: "2023-12-20",
    });
    expect(AllTodos.all.length).toBe(itemcount + 1);
  });

  test("Should mark a todo as complete", () => {
    AllTodos.add({
      title: "Test todo 11",
      completed: false,
      dueDate: "2023-12-20",
    });

    expect(AllTodos.all[0].completed).toBe(false);
    AllTodos.markAsComplete(0);
    expect(AllTodos.all[0].completed).toBe(true);
  });

  test("Should retrieve overdue items", () => {
    const todaysDate = new Date();
    const formattedDate = (d) => d.toISOString().split("T")[0];
    const yesterday = formattedDate(
      new Date(todaysDate.setDate(todaysDate.getDate() - 1)),
    );

    const overdueitemscount = AllTodos.overdue().length;
    const overdueAdd = {
      title: "Complete all pupilfirst assignments",
      dueDate: yesterday,
      completed: false,
    };
    AllTodos.add(overdueAdd);
    expect(AllTodos.overdue().length).toEqual(overdueitemscount + 1);
  });

  test("Should retrieve due today items", () => {
    const todaysDate = new Date();
    const formattedDate = (d) => d.toISOString().split("T")[0];
    const today = formattedDate(todaysDate);

    const duetodayitemscount = AllTodos.dueToday().length;
    const todayAdd = {
      title: "Complete this  4th module  milestone",
      dueDate: today,
      completed: false,
    };
    AllTodos.add(todayAdd);
    expect(AllTodos.dueToday().length).toEqual(duetodayitemscount + 1);
  });

  test("Should retrieve due later items", () => {
    const todaysDate = new Date();
    const formattedDate = (d) => d.toISOString().split("T")[0];
    const tomorrow = formattedDate(
      new Date(todaysDate.setDate(todaysDate.getDate() + 1)),
    );

    const duelateritemscount = AllTodos.dueLater().length;
    const laterAdd = {
      title: "Preparing  for V sem exams",
      dueDate: tomorrow,
      completed: false,
    };
    AllTodos.add(laterAdd);
    expect(AllTodos.dueLater().length).toEqual(duelateritemscount + 1);
  });
});
