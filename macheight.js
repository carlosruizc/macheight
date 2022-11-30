const prompt = require('prompt-sync');
let inputNumbers = prompt('Input the list of numbers: ');
let inputTarget = prompt('Input the target value: ');
numbers = inputNumbers.split(',').map(function (string) {
    return parseInt(string);
});
let targetSum = parseInt(inputTarget);
let totalPairs = [];
let pair = [];
for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] + numbers[j] === targetSum) {
            console.log(numbers[i] + "," + numbers[j]);
        }
    }
}