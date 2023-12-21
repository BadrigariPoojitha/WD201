/* eslint-disable no-undef */
const todoList = () => {
  all = [];
  const formattedDate = (d) => {
    const datescopy = new Date(d);
    return datescopy.toISOString().split("T")[0];
  };

  const todaysdate = new Date();
  const today = formattedDate(todaysdate);

  const add = (todoItem) => {
    all.push(todoItem);
  };

  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    return all.filter((item) => !item.completed && item.dueDate < today);
  };

  const dueToday = () => {
    return all.filter((item) => item.dueDate === today);
  };

  const dueLater = () => {
    return all.filter((item) => !item.completed && item.dueDate > today);
  };

  const toDisplayableList = (list) => {
    let displayableList = " ";

    list.forEach((item) => {
      const checkbox = item.completed ? "[x]" : "[ ]";
      const date = item.dueDate === today ? "" : ` ${item.dueDate}`;
      displayableList += `${checkbox} ${item.title}${date}\n`;
    });

    return displayableList.trim();
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

// do net touch the below code as it is from the default template
// const todos = todoList();

// const formattedDate = (d) => {
//   return d.toISOString().split("T")[0];
// };

// var todaysdate = new Date();
// const today = formattedDate(todaysdate);
// console.log(today);
// const yesterday = formattedDate(
//   new Date(new Date().setDate(todaysdate.getDate() - 1))
// );
// console.log(yesterday);
// const tomorrow = formattedDate(
//   new Date(new Date().setDate(todaysdate.getDate() + 1))
// );
// console.log(typeof tomorrow);

// todos.add({ title: "Submit assignment", dueDate: yesterday, completed: false });
// todos.add({ title: "Pay rent", dueDate: today, completed: true });
// todos.add({ title: "Service Vehicle", dueDate: today, completed: false });
// todos.add({ title: "File taxes", dueDate: tomorrow, completed: false });
// todos.add({ title: "Pay electric bill", dueDate: tomorrow, completed: false });

// console.log("My Todo-list\n\n");

// console.log("Overdue");
// var overdues = todos.overdue();
// var formattedOverdues = todos.toDisplayableList(overdues);
// console.log(formattedOverdues);
// console.log("\n\n");

// console.log("Due Today");
// let itemsDueToday = todos.dueToday();
// let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday);
// console.log(formattedItemsDueToday);
// console.log("\n\n");

// console.log("Due Later");
// let itemsDueLater = todos.dueLater();
// let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater);
// console.log(formattedItemsDueLater);
// console.log("\n\n");
