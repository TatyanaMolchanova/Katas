var summation = function (num) {

    const sum = []
   
    for (var i = 1; i < num + 1; i++) {
        sum.push(i)
    }

    console.log(sum.reduce((prev, curr) => prev + curr))
}

summation(8)

summation(8)

// const summation = n => n * (n + 1) / 2;