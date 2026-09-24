 // dates

let myDate = new Date()
/* console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString()); */

console.log(typeof myDate);

// let createNewDate = new Date(2026, 8, 22); 
// let createNewDate = new Date(2026, 8, 22 , 2 , 16);
// let createNewDate = new Date("2026-8-22");
let createNewDate = new Date("08-22-2026");

// console.log(createNewDate.toLocaleString());

let myTimeStamp = Date.now()

/* console.log(myTimeStamp);
console.log(createNewDate.getTime());
console.log(Math.floor(Date.now()/1000)); */

let newDate = new Date()
/* console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay()); */

// `${newDate.getDate()} and the time`

newDate.toLocaleString('default ',{
    weekday: "long"
});