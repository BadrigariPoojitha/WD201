const todoList = require("../todo");
let AllTodos;

beforeEach(() => {
  AllTodos = todoList();
});

describe("TodoList Test Suite", () => {
  test("Should add new todo", () => {
    const itemcount = AllTodos.all.length;
    AllTodos.add({
      title: "Test todo 2",
      completed: false,
      dueDate: "2023-12-20",
    });
    expect(AllTodos.all.length).toBe(itemcount + 1);
  });

  test("Should mark a todo as complete", () => {
    AllTodos.add({
      title: "Test todo",
      completed: false,
      dueDate: "2023-12-20",
    });

    expect(AllTodos.all[0].completed).toBe(false);
    AllTodos.markAsComplete(0);
    expect(AllTodos.all[0].completed).toBe(true);
  });

  test("Should retrieve overdue items", () => {
    const dateToday = new Date();
    const formattedDate = (d) => d.toISOString().split("T")[0];
    const yesterday = formattedDate(
      new Date(dateToday.setDate(dateToday.getDate() - 1)),
    );

    const overDueitemcount = AllTodos.overdue().length;
    const overdueAdd = {
      title: "Complete my assignment",
      dueDate: yesterday,
      completed: false,
    };
    AllTodos.add(overdueAdd);
    expect(AllTodos.overdue().length).toEqual(overDueitemcount + 1);
  });

  test("Should retrieve due today items", () => {
    const dateToday = new Date();
    const formattedDate = (d) => d.toISOString().split("T")[0];
    const today = formattedDate(dateToday);

    const DueTodayitemcount = AllTodos.dueToday().length;
    const todayAdd = {
      title: "Complete this milestone",
      dueDate: today,
      completed: false,
    };
    AllTodos.add(todayAdd);
    expect(AllTodos.dueToday().length).toEqual(DueTodayitemcount + 1);
  });

  test("Should retrieve due later items", () => {
    const dateToday = new Date();
    const formattedDate = (d) => d.toISOString().split("T")[0];
    const tomorrow = formattedDate(
      new Date(dateToday.setDate(dateToday.getDate() + 1)),
    );

    const DueLateritemcount = AllTodos.dueLater().length;
    const laterAdd = {
      title: "Prepare for sem exams",
      dueDate: tomorrow,
      completed: false,
    };
    AllTodos.add(laterAdd);
    expect(AllTodos.dueLater().length).toEqual(DueLateritemcount + 1);
  });
});
