const btn = document.getElementsByClassName("btn")[0];
const hr = document.getElementsByClassName("hr")[0];
const min = document.getElementsByClassName("min")[0];
const sec = document.getElementsByClassName("sec")[0];
const pausebtn = document.getElementsByClassName("pausebtn")[0];
const hrInput = document.getElementsByClassName("input")[0];
const minInput = document.getElementsByClassName("input")[1];
const secInput = document.getElementsByClassName("input")[2];


const hrDisplay = document.getElementsByClassName("hrDisplay")[0];
const minDisplay = document.getElementsByClassName("minDisplay")[0];
const secDisplay = document.getElementsByClassName("secDisplay")[0];

let hrValue;
let minValue;
let secValue;
let intervalId;

const resetInputValue = ()=> {
    hrInput.value = "";
    minInput.value = "";
    secInput.value = "";
}

const updateAlarmDisplay = () => {
    hrDisplay.innerHTML = hrValue < 10 ? "0"+ hrValue : hrValue;
    minDisplay.innerHTML = minValue < 10 ? "0"+ minValue : minValue;
    secDisplay.innerHTML =secValue < 10 ? "0"+ secValue : secValue;

}

const executeAlarm = ()=> {
    if (!intervalId) {
        intervalId = setInterval(() => {
            if (secValue === 0) {
                if (minValue === 0) {
                    if (hrValue === 0) {
                        clearInterval(intervalId);
                        intervalId = null;
                        alert("Time's up..!")
                    } else {
                        hrValue -=1;
                        minValue = 59;
                    }
                } else {
                    minValue -=1;
                }
                secValue = 59;
            } else {
                secValue -=1;
            }
            updateAlarmDisplay();
        }, 1000);
    }
}
btn.addEventListener("click", ()=>{
    hrValue = parseInt(hrInput.value , 10);
    minValue = parseInt(minInput.value , 10);
    secValue = parseInt(secInput.value , 10);
    updateAlarmDisplay();
    resetInputValue();
    executeAlarm();
})

pausebtn.addEventListener("click", ()=>{
    clearInterval(intervalId);
    intervalId = null;
})



