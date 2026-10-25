const readline = require("readline");
let n1,n2;
let input;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Enter 1 Numbers: ", (n1) => {
    const num1 = Number(n1);
    rl.question("Enter Second Number: ", (n2) => {
        const num2 = Number(n2);
        rl.question("Enter the operation to be performed(+,-,*,/):", (op) => {
        if(op == '+'){
            console.log(num1 + num2)
        }
        if(op == '-'){
            console.log(num1 - num2)
        }
        if(op == '*'){
            console.log(num1 * num2)
        }
        if(op == '/'){
            console.log(num1 / num2)
        }
    })
    })
    
})