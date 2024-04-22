#! /usr/bin/env node
import inquirer from "inquirer";
let todoList = [];
let condition = true;
while (condition) {
    let userInput = await inquirer.prompt([
        {
            name: "goals",
            message: "What are your goals for the day?",
            type: "input"
        },
        {
            name: "addMore",
            message: "Do you want to add more?",
            type: "confirm",
            default: "false"
        }
    ]);
    todoList.push(userInput.goals);
    condition = userInput.addMore;
    console.log(todoList);
}
