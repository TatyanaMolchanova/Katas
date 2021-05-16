function getSum( a,b ) {

    // if (a > b) {
    //     Array(a - b + 1).fill();
    //     console.log('Array(a - b + 1).fill()', Array(a - b + 1).fill().map((num, index) => b + index).reduce((prev, curr) => prev + curr));
    // }

    // if (a === b) {
    //     console.log('a', a);
    //     return a
    // } else if (a > b) {
    //     console.log('else if', Array(a - b + 1).fill().map((num, index) => b + index).reduce((prev, curr) => prev + curr));
    //     return Array(a - b + 1).fill().map((num, index) => b + index).reduce((prev, curr) => prev + curr);
    // } else {
    //     console.log('else', Array(b - a + 1).fill().map((num, index) => a + index).reduce((prev, curr) => prev + curr));
    //     return Array(b - a + 1).fill().map((num, index) => a + index).reduce((prev, curr) => prev + curr);
    // }


    
    // return a === b ? a : Array(a - b + 1).fill().map((num, index) => b + index).reduce((prev, curr) => prev + curr);

    return a === b ? a : a > b ? Array(a - b + 1).fill().map((num, index) => b + index).reduce((prev, curr) => prev + curr) : Array(b - a + 1).fill().map((num, index) => a + index).reduce((prev, curr) => prev + curr);


}

getSum(0,2)