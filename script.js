// 1. Arrow Function და ორი რიცხვის დაჯამება:
// დაწერე Arrow Function, რომელიც მიიღებს ორ რიცხვს და დააბრუნებს მათ ჯამს. მაგალითად: const add = (a, b) => a + b;

const sum1 = (a,b) => a+b;
console.log(sum1(2,3));

const sum2 = (c,d) => {
    console.log(c+d);
}
sum2(2,3)

// 2. დაწერე Anonymous ფუნქცია, რომელიც მიიღებს ორ რიცხვს და დააბრუნებს მათ შორის სხვაობას. მაგალითად: (function(a, b) { return a - b; })(8, 3);

const difference = function (a,b) {
    return a-b;
}
console.log(difference(5,4));


// 3. Arrow Function
// დაწერე რომელიც მიიღებს ერთ რიცხვს და შეამოწმებს, არის თუ არა ის ლუწი (თუ ლუწია დააბრუნებს true). მაგალითად: const isEven = (num) => num % 2 === 0;

const isEven = (num) => num % 2 === 0;
console.log(isEven(5));

// 4. Callback Function და გამრავლება:
// დაწერე ფუნქცია, რომელიც მიიღებს ორ რიცხვს და Callback ფუნქციას, რომელიც გამოიყენებს ამ რიცხვების ნამრავლის დასათვლელად:

function multiply(callback) {
    const num1 = 2
    return callback(num1)
}

function numbers(num1) {
    const num2 = 3
    return num1 * num2
}

console.log(multiply(numbers));

// 5. Arrow Function და რიცხვის დადებითობის შემოწმება:
// Arrow Function, რომელიც მიიღებს ერთ რიცხვს და შეამოწმებს, არის თუ არა ის დადებითი. მაგალითად: const isPositive = (num) => num > 0;

const isPositive = (num) => num > 0;
console.log(isPositive(2));

// 6. დაწერე Anonymous ფუნქცია, რომელიც მიიღებს რიცხვს და დააბრუნებს მის გაორმაგებულ მნიშვნელობას. მაგალითად: (function(n) { return n * 2; })(5);

const double = function (n) {
    return n * 2;
}

console.log(double(3));

// 7. დაწერე ფუნქცია, რომელიც მიიღებს რიცხვს და Callback ფუნქციას, რომელიც დააბრუნებს ამ რიცხვის გაორმაგებულ მნიშვნელობას:

function doublee(callback) {
    const num = 3;
    return callback(num)
}

function numbers(num) {
    return num * 2
}
console.log(doublee(numbers));

// 8. Arrow Function და რიცხვის ნაშთის შემოწმება:
// Arrow Function, რომელიც შეამოწმებს, თუ ნაშთია რიცხვის გაყოფისას 3-ზე (მაგალითად, არის თუ არა რიცხვი 3-ზე გაყოფადი). მაგალითად: const isDivisibleByThree = (num) => num % 3 === 0;

const isDivisibleByThree = (num) => num % 3 === 0;
console.log(isDivisibleByThree(9));

// 9. Callback Function და რიცხვის გადამოწმება:
// დაწერე ფუნქცია, რომელიც მიიღებს რიცხვს და Callback ფუნქციას, და გამოიძახებს Callback-ს, რომ შეამოწმოს, არის თუ არა ეს რიცხვი ლუწი.

function isEvenn(callback) {
    const num = 5;
    return callback(num)
}

function number(num) {
    return num % 2 === 0;
}

console.log(isEvenn(number));

// 10. Arrow Function და რიცხვის კუბის გამოთვლა:
// Arrow Function, რომელიც მიიღებს რიცხვს და დააბრუნებს მის კუბს. მაგალითად: const cube = (num) => num * num * num;

const cube = (num) => num * num * num;
console.log(cube(3));

// 11. Callback Function და მარტივი გამრავლება:
// დაწერე ფუნქცია, რომელიც მიიღებს ორ რიცხვს და Callback ფუნქციას, რომელიც დააბრუნებს მათ ნამრავლს.

function multiply2(callback) {
    const num1 = 2;
    return callback(num1)
}

function numbers2(num1) {
    const num2 = 10;
    return num1 * num2
}

console.log(multiply2(numbers2));

// 12. Arrow Function და რიცხვის დადებითობის შემოწმება:
// Arrow Function, რომელიც შეამოწმებს, არის თუ არა რიცხვი ნულზე მეტი. მაგალითად: const isGreaterThanZero = (num) => num > 0;

const isGreaterThanZero = (num) => num > 0;
console.log(isGreaterThanZero(-5));

// 13. დაწერე Anonymous ფუნქცია, რომელიც მიიღებს ერთ რიცხვს და დააბრუნებს მის ნახევარს. მაგალითად: (function(n) { return n / 2; })(10);

const divide = function (a) {
    return a/2
}
console.log(divide(10));

// Callback Function და რიცხვის დამატება:

// 14. დაწერე ფუნქცია, რომელიც მიიღებს ორ რიცხვს და Callback ფუნქციას, რომელიც შეაჯამებს ამ რიცხვებს.

function sum(callback) {
    const num1 = 4;
    return callback(num1)
}

function numbers(num1) {
    const num2 = 5;
    return num1 + num2
}

console.log(sum(numbers));

// 15. Arrow Function, რომელიც მიიღებს ერთ რიცხვს და დააბრუნებს მის კვადრატს. მაგალითი: const square = (num) => num * num;

const square = (num) => num * num;
console.log(square(5));
