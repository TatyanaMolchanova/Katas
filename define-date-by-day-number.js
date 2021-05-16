// const monthFormat = Intl.DateTimeFormat('en-US', { month: 'long' });
// const dayFormat = Intl.DateTimeFormat('en-US', { day: 'numeric' });

// console.log('monthFormat', monthFormat);
// console.log('dayFormat', dayFormat);

// function getDay(day, isLeap){
  
//   if(day > 365 + isLeap) {
//       console.log('wrong day 1')
//     return "wrong day";
//   }
  
//   let date = new Date(2005 - isLeap, 0, day);    
//   console.log('date', date);
//   return `${monthFormat.format(date)}, ${dayFormat.format(date)}`;
// }


// function getDay(day, isLeap){
//     let baseDate = new Date((isLeap ? "2020" : "2021") + "/01/01");

//     console.log('baseDate', baseDate);
//     baseDate.setDate(baseDate.getDate() + day - 1);
//     console.log('2 baseDate', baseDate);
//     console.log('res', baseDate.toLocaleString('en', { month: 'long' }) + ", " + baseDate.getDate());
//     return baseDate.toLocaleString('en', { month: 'long' }) + ", " + baseDate.getDate();
// }



function getDay(day, isLeap) {
    const calendar = {
      "January": 31,
      "February": 28+(isLeap?1:0),
      "March": 31,
      "April": 30,
      "May": 31,
      "June": 30,
      "July": 31,
      "August": 31,
      "September": 30,
      "October": 31,
      "November": 30,
      "December": 31
    };
    for (const month of Object.keys(calendar)) {
        console.log('day', day);
        console.log('calendar[month]', calendar[month]);
      if (day <= calendar[month]) return `${month}, ${day}`;
      day -= calendar[month];
    }
  }

// getDay(389, false)

getDay(59, false)
// getDay(60, false)
// getDay(60, true)
// getDay(365, false)
// getDay(366, true)












// function getDay(day, isLeap){
//     let result;

//     if (isLeap) {
//         switch (true) {
//             case day <= 31:
//                 result = `January, ${day}`;
//                 break; 
//             case day > 31 && day <= 60:
//                 result = `February, ${day - 31}`;
//                 break; 
//             case day > 60 && day <= 91:
//                 result = `March, ${day - 60}`;
//                 break; 
//             case day > 91 && day <= 121:
//                 result = `April, ${day - 91}`;
//                 break; 
//             case day > 121 && day <= 152:
//                 result = `May, ${day - 121}`;
//                 break; 
//             case day > 152 && day <= 182:
//                 result = `June, ${day - 152}`;
//                 break; 
//             case day > 182 && day <= 213:
//                 result = `July, ${day - 182}`;
//                 break; 
//             case day > 213 && day <= 244:
//                 result = `August, ${day - 213}`;
//                 break; 
//             case day > 244 && day <= 274:
//                 result = `September, ${day - 244}`;
//                 break; 
//             case day > 274 && day <= 305:
//                 result = `October, ${day - 274}`;
//                 break; 
//             case day > 305 && day <= 335:
//                 result = `November, ${day - 305}`;
//                 break; 
//             case day > 335 && day <= 366:
//                 result = `December, ${day - 335}`;
//                 break; 
//         }
//     } else {
//         switch (true) {
//             case day <= 31:
//                 result = `January, ${day}`;
//                 break; 
//             case day > 31 && day <= 59:
//                 result = `February, ${day - 31}`;
//                 break; 
//             case day > 59 && day <= 90:
//                 result = `March, ${day - 59}`;
//                 break; 
//             case day > 90 && day <= 120:
//                 result = `April, ${day - 90}`;
//                 break; 
//             case day > 120 && day <= 151:
//                 result = `May, ${day - 120}`;
//                 break; 
//             case day > 151 && day <= 181:
//                 result = `June, ${day - 151}`;
//                 break; 
//             case day > 181 && day <= 212:
//                 result = `July, ${day - 181}`;
//                 break; 
//             case day > 212 && day <= 243:
//                 result = `August, ${day - 212}`;
//                 break; 
//             case day > 243 && day <= 273:
//                 result = `September, ${day - 243}`;
//                 break; 
//             case day > 273 && day <= 304:
//                 result = `October, ${day - 273}`;
//                 break; 
//             case day > 304 && day <= 334:
//                 result = `November, ${day - 304}`;
//                 break; 
//             case day > 334 && day <= 365:
//                 result = `December, ${day - 334}`;
//                 break; 
//         }
//     }
//     return result;
//     console.log('result', result);
// }

// getDay(91, false)
// getDay(15, false)
// getDay(41, false)
// getDay(65, false)
// getDay(93, false)
// getDay(136, false)
// getDay(176, false)

// getDay(59, false)
// getDay(60, false)
// getDay(60, true)
// getDay(365, false)
// getDay(366, true)












// function getDay(day, isLeap){
//     let result;

//     if (isLeap) {
//         switch (true) {
//             case day <= 31:
//                 result = `January, ${day}`;
//                 break; 
//             case day > 31 && day <= 60:
//                 result = `February, ${day - 31}`;
//                 break; 
//             case day > 60 && day <= 91:
//                 result = `March, ${day - 60}`;
//                 break; 
//             case day > 91 && day <= 121:
//                 result = `April, ${day - 90}`;
//                 break; 
//             case day > 121 && day <= 152:
//                 result = `May, ${day - 121}`;
//                 break; 
//             case day > 152 && day <= 182:
//                 result = `June, ${day - 151}`;
//                 break; 
//             case day > 182 && day <= 213:
//                 result = `July, ${day - 182}`;
//                 break; 
//             case day > 213 && day <= 244:
//                 result = `August, ${day - 213}`;
//                 break; 
//             case day > 244 && day <= 274:
//                 result = `September, ${day - 244}`;
//                 break; 
//             case day > 274 && day <= 305:
//                 result = `October, ${day - 274}`;
//                 break; 
//             case day > 305 && day <= 335:
//                 result = `November, ${day - 305}`;
//                 break; 
//             case day > 335 && day <= 366:
//                 result = `December, ${day - 335}`;
//                 break; 
//         }
//     } else {
//         switch (true) {
//             case day <= 31:
//                 result = `January, ${day}`;
//                 break; 
//             case day > 31 && day <= 59:
//                 result = `February, ${day - 31}`;
//                 break; 
//             case day > 59 && day <= 90:
//                 result = `March, ${day - 59}`;
//                 break; 
//             case day > 90 && day <= 120:
//                 result = `April, ${day - 89}`;
//                 break; 
//             case day > 120 && day <= 151:
//                 result = `May, ${day - 120}`;
//                 break; 
//             case day > 151 && day <= 181:
//                 result = `June, ${day - 150}`;
//                 break; 
//             case day > 181 && day <= 212:
//                 result = `July, ${day - 181}`;
//                 break; 
//             case day > 212 && day <= 243:
//                 result = `August, ${day - 212}`;
//                 break; 
//             case day > 243 && day <= 273:
//                 result = `September, ${day - 243}`;
//                 break; 
//             case day > 273 && day <= 304:
//                 result = `October, ${day - 273}`;
//                 break; 
//             case day > 304 && day <= 334:
//                 result = `November, ${day - 304}`;
//                 break; 
//             case day > 334 && day <= 365:
//                 result = `December, ${day - 334}`;
//                 break; 
//         }
//     }
//     // return result;
//     console.log('result', result);
// }

// getDay(91, false)
// getDay(15, false)
// getDay(41, false)
// getDay(65, false)
// getDay(93, false)
// getDay(136, false)
// getDay(176, false)

// getDay(59, false)
// getDay(60, false)
// getDay(60, true)
// getDay(365, false)
// getDay(366, true)