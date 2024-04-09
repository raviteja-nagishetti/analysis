console.log("Hello world")

let add = (num1, num2) => {
    let sum = 0;
    if (num1 > 0)
        sum += num1;
    if (num2 > 0)
        sum += num2;
    return sum;
}

console.log(add(5, 4));
