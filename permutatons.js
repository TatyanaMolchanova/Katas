// Algorithms

function permutations(string) {


    const swap = (string, x, y) => {
        const stringArray = string.split('')
        const swapVar = stringArray[x]
        stringArray[x] = stringArray[y]
        stringArray[y] = swapVar
        return stringArray.join('')
      }
    
      const permutate = (k, arr) => {
        if (k === 1) {
          return arr
        } else {
            console.log('k', k)
            console.log('string', string);
            // console.log('i', i);
          for (let i = 0; i < k - 1; i++) {
            if (k % 2 === 0) {
              arr.push(swap(string, i, k-1))
            } else {
              arr.push(swap(string, 0, k-1))
            }
          }
         return permutate(k - 1, arr)
        }
      }
      
      return permutate(string.length, [string])
    }

// permutations('aabb')

console.log('permutations', permutations('aabb'));