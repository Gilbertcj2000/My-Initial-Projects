const hourEl = document.getElementById("hour")

const minuteEl = document.getElementById("minutes");

const  secondEl = document.getElementById("seconds");

const ampmEl  = document.getElementById("ampm");

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "PM"
    
    // Adjust hours to be 12-hour format
    if(h > 12){
        h = h - 12;
        ampm =  "PM";
    }

    hourEl.innerText = h;

}
