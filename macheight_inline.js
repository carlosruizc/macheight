
const args = process.argv.slice(2);
let numbers = args[0].split(',').map(function (string) {
    return parseInt(string);
});
let targetSum = parseInt(args[1]);
let totalPairs = [];
let pair = [];
for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] + numbers[j] === targetSum) {
            console.log(numbers[i] + "," + numbers[j]);
        }
    }
}