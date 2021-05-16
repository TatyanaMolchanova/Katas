// "not picking" --> "pot nicking"

// todo:
// 1) get 1-st letters of words 
// 2) change places
// 3) assing new values

function spoonerize(words) {

    const wordsArray = words.split(' ');
    const firstLetterArr = wordsArray.map(word => word.split('').shift());

    firstLetterArr.reverse()

    const wordsArr2 = wordsArray.map(word => word.split(''));

    const res = [];
    
    for (let i = 0; i < wordsArr2.length; i++) {

        wordsArr2[i].splice(0, 1, firstLetterArr[i]);

        res.push(wordsArr2[i].join(''));
    }

    return res.join(' ');
   
}

console.log('spoonerize("nit picking")', spoonerize("nit picking"))