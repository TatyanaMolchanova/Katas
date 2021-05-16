// Best decision - less code
const flip = (d, a) => a.sort((a, b) => d === 'R' ? a - b : b - a)



// My decision
// const flip = (d, a) =>{
//     d === 'R' ? a.sort((a, b) => a - b) : a.sort((a, b) => b - a)
//     return a
// }

console.log('Right', flip('R', [3, 2, 1, 2]))
console.log('Left', flip('L', [1, 4, 5, 3, 5]))