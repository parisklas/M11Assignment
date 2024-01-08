//STEP 1
// function daysInMonth(month, year) {
//   // here January is 1 based
//   // Day 0 is the last day of the previous month
//   return new Date(year, month, 0).getDate();
//   // here January is 0 based
//   // return new Date(year, month+1, 0)..
// }
// console.log(daysInMonth(1, 2024));
// console.log(daysInMonth(2, 2024));
// console.log(daysInMonth(11, 2024));
// console.log(daysInMonth(12, 2024));

//STEP 2
// function monthName(dt){
//   monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//     return monthList[dt.getMonth()];
// }
// console.log(monthName(new Date('1/11/2020')));
// console.log(monthName(new Date('2/3/2024')));

//STEP 3
// function dayName(dt){
//   dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     return dayList[dt.getDay()];
// }
// console.log(dayName(new Date('1/11/2020')));
// console.log(dayName(new Date('10/07/1992')));

//STEP 4
// let d = new Date();
// function days(dt){
//   dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     return dayList[dt.getDay() - 1];
// }
// console.log(days(d));

//STEP 5
// let d = new Date();
// function days(dt){
//   dayList = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
//     return dayList[dt.getDay()];
// }
// console.log(days(d));

