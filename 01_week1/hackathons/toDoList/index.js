/* Todo List (Mini Hackathon) */
import chalk from "chalk";
import { stdin as input, stdout as output } from "node:process";
import readline from "node:readline/promises";

const rl = readline.createInterface({ input, output });

const error = chalk.red;

async function getInput(prompt) {
  const reply = await rl.question(prompt);
  return reply;
}

function menuDisplay() {
  let menu = `
    ${chalk.bold.underline("MENU")}
    1. Display to-do list
    2. Add new task
    3. Mark task as complete
    4. Delete task
    5. Edit task description
    6. Exit
    `;
  console.log(menu);
}

function createTask(desc, id) {
  return { desc, id, isComplete: false };
}

function displayTaskList(tasks) {
  if (tasks.length === 0) {
    console.log(error("\nYou have no tasks."));
  } else {
    console.log(chalk.bold.underline("\nTO-DO"));

    for (let task of tasks) {
      console.log(
        `[${task.id}]: [ ${task.isComplete ? chalk.bold.red("X") : " "} ] ${
          task.desc
        }`
      );
    }
  }
}

let exit = false;
let todoList = [];
let currId = 1;

console.log(chalk.redBright.bgRed.bold.underline("Welcome to the To-do list!"));
do {
  menuDisplay();
  let userInput = await getInput("Please choose an option (1-6): ");
  //console.log(userInput);
  switch (userInput) {
    case "1":
      displayTaskList(todoList);
      break;
    case "2":
      let addTask = false;
      do {
        const taskDescription = await getInput("Enter new task: ");
        todoList.push(createTask(taskDescription, currId));
        currId++;
        let input = await getInput("Add another task? (Y/n): ");
        addTask = input === "Y" || input === "y";
      } while (addTask);
      //console.log(todoList);
      break;
    case "3":
      let valid1 = false;
      let selectedTaskComplete;
      do {
        displayTaskList(todoList);
        let input = await getInput("Which task is complete?: ");
        for (let i = 0; i < todoList.length; i++) {
          //console.log(input, todoList[i].id);
          //console.log(input == todoList[i].id);
          if (input == todoList[i].id) {
            selectedTaskComplete = i;
            valid1 = true;
          }
        }
        if (!valid1) console.log(error("Please enter a valid task ID."));
      } while (!valid1);
      todoList[selectedTaskComplete].isComplete = true;
      displayTaskList(todoList);
      break;

    case "4":
      let valid2 = false;
      let selectedTaskDelete;
      do {
        displayTaskList(todoList);
        let input = await getInput("Which task would you like to delete: ");
        for (let i = 0; i < todoList.length; i++) {
          //console.log(input, todoList[i].id);
          //console.log(input == todoList[i].id);
          if (input == todoList[i].id) {
            selectedTaskDelete = i;
            valid2 = true;
          }
        }
        if (!valid2) console.log(error("Please enter a valid task ID."));
      } while (!valid2);
      let valid3 = false;
      do {
        let input = await getInput(
          `Delete "${todoList[selectedTaskDelete].desc}" task? (Y/n): `
        );
        if (input == "Y" || input == "y" || input == "N" || input == "n") {
          valid3 = true;
          if (input == "Y" || input == "y") {
            //todoList.indexOf((id==)
            todoList.splice(selectedTaskDelete, 1);
            //console.log("yes selected");
          } else {
            //console.log("no selected");
          }
        }
      } while (!valid3);
      displayTaskList(todoList);
      break;
    case "5":
      let editTask = false;
      let selectedTaskEdit;
      displayTaskList(todoList);
      do {
        let input = await getInput("Which task would you like to edit: ");
        for (let i = 0; i < todoList.length; i++) {
          if (input == todoList[i].id) {
            selectedTaskEdit = i;
            editTask = true;
          }
        }
        if (!editTask) {
          console.log(error("Please enter a valid task ID."));
        }
      } while (!editTask);
      let newDesc = await getInput("Please enter a new task description: ");
      todoList[selectedTaskEdit].desc = newDesc;
      displayTaskList(todoList);

      //console.log(todoList);
      break;
    case "6":
      console.log("Goodbye");
      exit = true;
      break;
    default:
      console.log(error("Invalid input, please enter a number from 1 to 6."));
      break;
  }
} while (!exit);

rl.close();