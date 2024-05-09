#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"
console.log(chalk.blue.bold("\n\t Welcome to amnas-currency-converter\n") )


let exchangeRate :{[key:string] :number} ={

    "USD": 1.0,   // US Dollar
    "EUR": 0.83,  // Euro
    "GBP": 0.72,  // British Pound
    "JPY": 109.42, // Japanese Yen
    "AUD": 1.29,  // Australian Dollar
    "CAD": 1.25,// Canadian Dollar
    "PAK": 277.7,
};
let userAnswer = await inquirer.prompt([{
    name: "fromCurrency",
    type: "list",
    message: "select currency to convert from ",
    choices: ["USD", "EUR", "GBP", "JPY","AUD", "CAD" , "PAK"]
},
{
    name: "toCurrency",
    type: "list",
    message: "select currency to convert to ",
    choices: ["USD", "EUR", "GBP", "JPY","AUD", "CAD" , "PAK"]
    
},
{
    name: "amount",
    type: "input",
    message: "enter amount to convert"
}]);

let fromAmount = exchangeRate[userAnswer.fromCurrency];
let toAmount = exchangeRate[userAnswer.toCurrency];
let amount = userAnswer.amount;

let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;

console.log(`converted amount = ${convertedAmount}`);