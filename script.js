let hour = 0;
let min = 0;
let sec = 0;
let milli = 0;

let timer = false;

function start() {
  timer = true;
  myFun();
}

function stop(){
    timer = false;
    myFun();
}

function reset(){
    location.reload()
}

function myFun() {
  if (timer == true) {
    milli++;
    if (milli == 100) {
      sec++;
      milli = 0;
    }
    if (sec == 60) {
      min++;
      sec = 0;
    }
    if (min == 60) {
      hour++;
      min = 0;
    }

    let getSec = sec;
    let getMin = min;
    let gethour = hour;

    if(sec < 10){
        getSec = "0" + sec;
    } if (min < 10){
        getMin = "0" + min;
    } if (hour < 10){
        gethour = "0" + hour;
    }

    setTimeout("myFun()", 10);
    document.querySelector(".miliSec").innerHTML = milli;
    document.querySelector(".sec").innerHTML = getSec;
    document.querySelector(".min").innerHTML = getMin;
    document.querySelector(".hour").innerHTML = gethour;

  }
}
