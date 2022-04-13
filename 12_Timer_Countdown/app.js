/* Wednesday, 04/13/2022

make a countdown clock which can be used when a new product
is coming out or a sale is about to end on an ecommerce site.

Key concepts covered:

getFullYear()
getMonth()
getDate()
Math.floor()
setInterval()
clearInterval()
*/

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');


//current date : new Date()
//to setup specific date -> for a month, its start from zer0 index based (for example 4 = mai)

let futureDeadline = new Date(2022, 11, 13, 12, 30, 0)
//attempt to output 00:00:00 or midnight -> futureDeadline.setHours(24,0,0,0);
//console.log(futureDeadline);


const year = futureDeadline.getFullYear();
const hours = futureDeadline.getHours();
const minutes = futureDeadline.getMinutes();
//to access month names, use the array at line 16.
//because futureDeadline.getMonth() will only give you the index number (ex: '4' instead of 'May').
let month = months[futureDeadline.getMonth()];
const date = futureDeadline.getDate();
//getDay() return valur is 0 - 6, corresponding to the day of the week of the given date
//then use array at line 30
const weekday = weekdays[futureDeadline.getDay()];


//deadline time phrase
giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;



//under this line, substract the value of futureTime by presentTime to get the difference/remainingTime
//? get futureDeadline value in millisecond, getTime(); returns date as ms since Jan 1, 1970.
const futureTime = futureDeadline.getTime();

function getRemainingTime() {
  const presentTime = new Date().getTime();
  const differenceTime = futureTime - presentTime;
  //console.log(differenceTime);
  
  // 1second = 1000ms, 1minute = 60s, 1hour = 60min, 1 day = 24hr.
  //calculate how many milliseconds are in one day etc (ex : 1d = 86400000 milliseconds)
  const oneDay = 24 * 60 * 60 * 1000; 
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  //countdown values (remaining times)
  let days = Math.floor(differenceTime / oneDay);
  let hours = Math.floor((differenceTime % oneDay) / oneHour);
  let minutes = Math.floor((differenceTime % oneHour) / oneMinute);
  let seconds = Math.floor((differenceTime % oneMinute) / 1000);

  //set countdown values array;
  const countdownValues = [days, hours, minutes, seconds]

    //function to transform all countdownValues into xx digit clock-like format numbers
    function format(item) {
      if (item < 10 ){
        return item = `0${item}`
      }
      return item;
    }

  items.forEach( (item, index) => {
    item.innerHTML = format(countdownValues[index]);
  } )

  //create a function to stop when countdown is less than 0 (event has expired)
  if (differenceTime < 0){
    /*The global clearInterval() method cancels a timed,
    repeating action which was previously established by a call to setInterval() .*/
    clearInterval(automateCountdown);
    deadline.innerHTML = `Sorry :( this event has expired.)`
  }
}
//automate the countdown without refreshing browser manually
/*https://developer.mozilla.org/en-US/docs/Web/API/setInterval :
The setInterval() method repeatedly calls a function with a fixed time delay between each call.
*/
let automateCountdown = setInterval(getRemainingTime, 1000);







