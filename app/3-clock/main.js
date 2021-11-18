// let hoursElement = document.getElementById('hours');
// let minutesElement = document.getElementById('minutes');
// let secondsElement = document.getElementById('seconds');


// //how to get current Date & time
// function currentMoment(){
// let currentDate = new Date().getTime(); // current Date & time
// // console.log(currentDate);

// // hoursElement.innerHTML = timestamp.getHours();
// // minutesElement.innerHTML = timestamp.getMinutes();
// // secondsElement.innerHTML = timestamp.getSeconds();

// //how to get current Year
// console.log('Year:' + currentDate.getFullYear());
// //how to get current Month
// console.log('Month:' + currentDate.getMonth());
// //how to get current Date
// console.log('Date:' + currentDate.getDate());
// //how to get current Hours
// console.log('Hours:' + currentDate.getHours());
// //how to get current Minutes
// console.log('Minutes:' + currentDate.getMinutes());
// //how to get current Seconds
// console.log('Seconds:' + currentDate.getSeconds());
// //how to get current Day
// console.log('Day:' + currentDate.getDay()); 
// //how to get current Time
// console.log('Time:' + currentDate.getTime());

// return currentDate;


// }

// function targetMoment (){
//     let targetDate = new Date("Jan 1, 2022 11:00:00").getTime();
//     // console.log(targetDate);

    //how to get current Year
// console.log('Year:' + targetDate.getFullYear());
// //how to get current Month
// console.log('Month:' + targetDate.getMonth());
// //how to get current Date
// console.log('Date:' + targetDate.getDate());
// //how to get current Hours
// console.log('Hours:' + targetDate.getHours());
// //how to get current Minutes
// console.log('Minutes:' + targetDate.getMinutes());
// //how to get current Seconds
// console.log('Seconds:' + targetDate.getSeconds());
// //how to get current Day
// console.log('Day:' + targetDate.getDay()); 
// //how to get current Time
// console.log('Time:' + targetDate.getTime());

// return targetDate;
// }

function difference(){
    let now = new Date().getTime();
    let countDownDate = new Date("Jan 1, 2022 11:00:00").getTime();
    
    
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));

    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

console.log(days, hours, minutes, seconds);
document.querySelector('.days').innerHTML = days;
document.querySelector('.hours').innerHTML = hours;
document.querySelector('.minutes').innerHTML = minutes;
document.querySelector('.seconds').innerHTML = seconds;
}


// how to call a function in regular interval
setInterval(difference, 1000);
