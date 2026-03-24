// Swap two numbers without using a third variable.

function swapNum() {
    let num1 = 10;
    let num2 = 15;

    [num1, num2] = [num2, num1]
    console.log(num1,num2)
}

swapNum();