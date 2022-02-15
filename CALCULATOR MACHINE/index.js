//alert("javascript loaded successfully");
const calculator = (num1, num2) => {
    let sum = num1 + num2;
    let diff = num1 - num2;
    let product = num1 * num2;
    let quotient = num1 / num2;
    console.log("sum:" + sum);
    console.log("difference:" + diff);
    console.log("product:" + product);
    console.log("quotient:" + quotient);
};


const btn = document.getElementById('calculate')

btn.addEventListener("click", function() {
    let num1 = document.getElemenmtById("num1").value;
    let num2 = document.getElementById("num2").value;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    calculator(num1, num2);
});