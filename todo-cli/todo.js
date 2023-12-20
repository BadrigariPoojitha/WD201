const todoList = () => {
    let all = []; // Declare using let or const
  
    const add = (todoItem) => {
      all.push(todoItem);
    };
  
    const markAsComplete = (index) => {
      all[index].completed = true;
    };
  
    const overdue = () => {
      return all.filter(
        (todo) => todo.dueDate < new Date().toLocaleDateString("en-CA")
      );
    };
  
    const dueToday = () => {
      return all.filter(
        (todo) => todo.dueDate == new Date().toLocaleDateString("en-CA")
      );
    };
  
    const dueLater = () => {
      return all.filter(
        (todo) => todo.dueDate > new Date().toLocaleDateString("en-CA")
      );
    };
  
    const toDisplayableList = (list) => {
      return list
        .map(
          (todo) =>
            `${todo.completed ? "[x]" : "[ ]"} ${todo.title} ${
              todo.dueDate == today ? "" : todo.dueDate
            }`
        )
        .join("\n");
    };
  
    return {
      all,
      add,
      markAsComplete,
      overdue,
      dueToday,
      dueLater,
      toDisplayableList,
    };
  };
  
  module.exports = todoList;
  
  const todos = todoList(); // Create the todos instance
  
  const yesterday = new Date(new Date().setDate(new Date().getDate() - 1))
    .toISOString()
    .split("T")[0];
  const today = new Date().toISOString().split("T")[0];
  const tomorrow = new Date(new Date().setDate(new Date().getDate() + 1))
    .toISOString()
    .split("T")[0];
  
  todos.add({ title: "Submit assignment", dueDate: yesterday, completed: false });
  todos.add({ title: "Pay rent", dueDate: today, completed: true });
  todos.add({ title: "Service Vehicle", dueDate: today, completed: false });
  todos.add({ title: "File taxes", dueDate: tomorrow, completed: false });
  todos.add({ title: "Pay electric bill", dueDate: tomorrow, completed: false });
  
  console.log("My Todo-list\n");
  
  console.log("Overdue");
  var overdues = todos.overdue();
  var formattedOverdues = todos.toDisplayableList(overdues);
  console.log(formattedOverdues);
  console.log("\n");
  
  console.log("Due Today");
  let itemsDueToday = todos.dueToday();
  let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday);
  console.log(formattedItemsDueToday);
  console.log("\n");
  
  console.log("Due Later");
  let itemsDueLater = todos.dueLater();
  let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater);
  console.log(formattedItemsDueLater);
  console.log("\n");
  
