// Best solution - less code and better logic I guess
function largestPairSum(numbers) {
    numbers.sort((a, b) => b - a)
    return numbers[0] + numbers[1]
}

console.log('largestPairSum([10,14,2,23,19])', largestPairSum([10,14,2,23,19]))


// I strived to this solution, but was wrong console output
// function largestPairSum(numbers) {
//     return numbers.sort((a, b) => a - b).slice(-2).reduce((prev, next) => prev + next)
// }

// console.log('largestPairSum([10,14,2,23,19])', largestPairSum([10,14,2,23,19]))



// My solution
// function largestPairSum(numbers) {
//     numbers.sort((a, b) => a - b)
//     console.log('numbers', numbers)

//     const max = numbers.slice(numbers.length - 2).reduce((prev, next) => prev + next)
//     console.log('max', max)
//     return max
// }

// console.log('largestPairSum([10,14,2,23,19])', largestPairSum([10,14,2,23,19]))