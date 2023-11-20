const timeleft = document.getElementById('time-left');
const birthday = new Date('12/10/2022');
const second = 1000;
const min = second*60;
const hour = minute*60;
const day = hour*24; 
const today = new Date();
console.log(birthday);

function countdown(){
    console.log("0101001010101");
}
setInterval(countdown,second);