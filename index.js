#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Welcome to Your Personal ATM");
console.log("----------------------------");
let Balance = 20000;
let mypin = 45672;
let answerpin = await inquirer.prompt([
    {
        message: "Enter Your Pin Please !!",
        type: "number",
        name: "pin",
    },
]);
console.log("----------------------------");
if (answerpin.pin === mypin) {
    let options = await inquirer.prompt([
        {
            message: "Please Select one Option !!",
            name: "operation",
            type: "list",
            choices: ["Withdraw", "Check Balance"],
        },
    ]);
    console.log("----------------------------");
    if (options.operation === "Withdraw") {
        let amount = await inquirer.prompt([
            {
                message: "Select Your Amount!!",
                name: "money",
                type: "list",
                choices: [500, 1000, 5000, 10000, 50000],
            },
        ]);
        console.log("----------------------------");
        if (amount.money >= Balance) {
            console.log("Insufficient Amount");
        }
        else {
            let Remain = Balance - amount.money;
            console.log(`Withdraw!!\nYour Remaining Amount is ${Remain}`);
        }
    }
    else {
        console.log(`Your Current Balance is ${Balance}`);
    }
}
else {
    console.log("Invalid Pin");
}
console.log("----------------------------");
console.log("Thanks For Using Our Services! \n See You Soon !!");
console.log("----------------------------");
