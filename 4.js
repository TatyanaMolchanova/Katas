function noonerize(numbers) {

    if (typeof numbers[0] !== 'number' || typeof numbers[1] !== 'number') {
        return "invalid array"
    }

    const res = parseInt(numbers[1].toString()[0] + numbers[0].toString().slice(1)) - parseInt(numbers[0].toString()[0] + numbers[1].toString().slice(1))

   return res > 0 ?  res : -res 
}



console.log('noonerize([12, 34])', noonerize([1000000, 9999999]))