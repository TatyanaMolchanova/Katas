// Best solution
function schoolSelection(array) {
  return {
    'Kindergarten': array.filter(age => age === 5).length,
    '1st grade':  array.filter(age => age === 6).length,
    '2nd grade':  array.filter(age => age === 7).length,
    '3rd grade':  array.filter(age => age === 8).length, 
    '4th grade':  array.filter(age => age === 9).length
  }
}

console.log('schoolSelection', schoolSelection([5, 7, 4, 9, 10, 5, 15, 9, 5]))


// My solution
// function schoolSelection(array) {
//     const children = {
//       'Kindergarten': 0,
//       '1st grade': 0,
//       '2nd grade': 0, 
//       '3rd grade': 0, 
//       '4th grade': 0
//     }
    
//     for (let i = 0; i < array.length; i++) {
  
//       if (array[i] == 5) {
//           children['Kindergarten'] = (children['Kindergarten'] + 1) || 1
//       } else if (array[i] === 6) {
//           children['1st grade'] = (children['1st grade'] + 1) || 1
//       } else if (array[i] === 7) {
//           children['2nd grade'] = (children['2nd grade'] + 1) || 1
//       } else if (array[i] === 8) {
//           children['3rd grade'] = (children['3rd grade'] + 1) || 1
//       } else if (array[i] === 9) {
//           children['4th grade'] = (children['4th grade'] + 1) || 1
//       } 
//     }
  
//     return children
  
//   }
  
//   console.log('schoolSelection', schoolSelection([5, 7, 4, 9, 10, 5, 15, 9, 5]))