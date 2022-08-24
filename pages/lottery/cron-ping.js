var schedule = require('node-schedule');
var date = new Date(2022, 7, 24, 16, 8, 0);


const today = Date.now();
newtoday = new Date(today);

const expire = today + 5000;
const convert = new Date(expire);

function formatDate(date) {
   //   return `${date.getYear()} ${date.getMinutes() + 1} ${date.getHours()} ${date.getDate()} ${date.getMonth() + 1} ${date.getDay()}`;
//    return `${date.getFullYear()} ${date.getMonth()} ${date.getDate()} ${date.getHours()} ${date.getMinutes()} ${date.getSeconds()}`;
   //   return (x += 360000);
}

// console.log(formatDate(convert));
// console.log(newtoday);
// console.log(convert);
// console.log(date);

var j = schedule.scheduleJob(convert, function(){
    console.log('The world is going to end today.');
});
