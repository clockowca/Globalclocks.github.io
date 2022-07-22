const deg = 6;
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");

setInterval (() => {
    let date = new Date();
    let h = date.getHours() * 30;
    let m = date.getMinutes() * deg;
    let s = date.getSeconds() * deg;

    hr.style.transform = `rotateZ(${h+(m/12)}deg)`;
    mn.style.transform = `rotateZ(${(m)}deg)`;
    sc.style.transform = `rotateZ(${(s)}deg)`;
})

function clock() {
    var data = new Date();
    var hours = data.getHours();
    var minutes = data.getMinutes();
    var seconds = data.getSeconds();
    var now = hours + ":" + minutes + ":" + seconds;
    document.querySelector(".hrs").innerHTML = hours;
    document.querySelector(".mins").innerHTML = minutes;
    document.querySelector(".secs").innerHTML = seconds;
    setTimeout("clock()", 1000); }
clock();

var getIndiaTime = function() {
    document.getElementById("WarsawTime").innerHTML = new Date().toLocaleString("en-US", {timeZone :
    'Europe/Warsaw', timeStyle:'medium', hourCycle:'h24'});
}
getIndiaTime();
setInterval(getIndiaTime, 1000);

var getLondonTime = function() {
    document.getElementById("LondonTime").innerHTML = new Date().toLocaleString("en-US", {timeZone :
    'Europe/London', timeStyle:'medium', hourCycle:'h24'});
}
getLondonTime();
setInterval(getLondonTime, 1000);

var getSydneyTime = function() {
    document.getElementById("SydneyTime").innerHTML = new Date().toLocaleString("en-US", {timeZone :
    'Australia/Sydney', timeStyle:'medium', hourCycle:'h24'});
}
getSydneyTime();
setInterval(getSydneyTime, 1000);

var getTokyoTime = function() {
    document.getElementById("TokyoTime").innerHTML = new Date().toLocaleString("en-US", {timeZone :
    'Asia/Tokyo', timeStyle:'medium', hourCycle:'h24'});
}
getTokyoTime();
setInterval(getTokyoTime, 1000);

var getBerlinTime = function() {
    document.getElementById("BerlinTime").innerHTML = new Date().toLocaleString("en-US", {timeZone :
    'Europe/Berlin', timeStyle:'medium', hourCycle:'h24'});
}
getBerlinTime();
setInterval(getBerlinTime, 1000);

var getNewYorkTime = function() {
    document.getElementById("NewYorkTime").innerHTML = new Date().toLocaleString("en-US", {timeZone :
    'America/New_York', timeStyle:'medium', hourCycle:'h24'});
}
getNewYorkTime();
setInterval(getNewYorkTime, 1000);

var getBelfastTime = function() {
    document.getElementById("BelfastTime").innerHTML = new Date().toLocaleString("en-US", {timeZone :
    'Europe/Belfast', timeStyle:'medium', hourCycle:'h24'});
}
getBelfastTime();
setInterval(getBelfastTime, 1000);

var getTehranTime = function() {
    document.getElementById("TehranTime").innerHTML = new Date().toLocaleString("en-US", {timeZone :
    'Asia/Tehran', timeStyle:'medium', hourCycle:'h24'});
}
getTehranTime();
setInterval(getTehranTime, 1000);

var getDubaiTime = function() {
    document.getElementById("DubaiTime").innerHTML = new Date().toLocaleString("en-US", {timeZone :
    'Asia/Dubai', timeStyle:'medium', hourCycle:'h24'});
}
getDubaiTime();
setInterval(getDubaiTime, 1000)

var getMontrealTime = function() {
    document.getElementById("MontrealTime").innerHTML = new Date().toLocaleString("en-US", {timeZone :
    'America/Montreal', timeStyle:'medium', hourCycle:'h24'});
}
getMontrealTime();
setInterval(getMontrealTime, 1000)

var getOsloTime = function() {
    document.getElementById("OsloTime").innerHTML = new Date().toLocaleString("en-US", {timeZone :
    'Europe/Oslo', timeStyle:'medium', hourCycle:'h24'});
}
getOsloTime();
setInterval(getOsloTime, 1000)

var getSofiaTime = function() {
    document.getElementById("SofiaTime").innerHTML = new Date().toLocaleString("en-US", {timeZone :
    'Europe/Sofia', timeStyle:'medium', hourCycle:'h24'});
}
getSofiaTime();
setInterval(getSofiaTime, 1000)

var getPerthTime = function() {
    document.getElementById("PerthTime").innerHTML = new Date().toLocaleString("en-US", {timeZone :
    'Australia/Perth', timeStyle:'medium', hourCycle:'h24'});
}
getPerthTime();
setInterval(getPerthTime, 1000)

var getBaghdadTime = function() {
    document.getElementById("BaghdadTime").innerHTML = new Date().toLocaleString("en-US", {timeZone :
    'Asia/Baghdad', timeStyle:'medium', hourCycle:'h24'});
}
getBaghdadTime();
setInterval(getBaghdadTime, 1000)

var getRigaTime = function() {
    document.getElementById("RigaTime").innerHTML = new Date().toLocaleString("en-US", {timeZone :
    'Europe/Riga', timeStyle:'medium', hourCycle:'h24'});
}
getRigaTime();
setInterval(getRigaTime, 1000)

var getTijuanaTime = function() {
    document.getElementById("TijuanaTime").innerHTML = new Date().toLocaleString("en-US", {timeZone :
    'America/Tijuana', timeStyle:'medium', hourCycle:'h24'});
}
getTijuanaTime();
setInterval(getTijuanaTime, 1000)

var getDetroitTime = function() {
    document.getElementById("DetroitTime").innerHTML = new Date().toLocaleString("en-US", {timeZone :
    'America/Detroit', timeStyle:'medium', hourCycle:'h24'});
}
getDetroitTime();
setInterval(getDetroitTime, 1000)

var getDakarTime = function() {
    document.getElementById("DakarTime").innerHTML = new Date().toLocaleString("en-US", {timeZone :
    'Africa/Dakar', timeStyle:'medium', hourCycle:'h24'});
}
getDakarTime();
setInterval(getDakarTime, 1000)

var getNairobiTime = function() {
    document.getElementById("NairobiTime").innerHTML = new Date().toLocaleString("en-US", {timeZone :
    'Africa/Nairobi', timeStyle:'medium', hourCycle:'h24'});
}
getNairobiTime();
setInterval(getNairobiTime, 1000)

var getBogotaTime = function() {
    document.getElementById("BogotaTime").innerHTML = new Date().toLocaleString("en-US", {timeZone :
    'America/Bogota', timeStyle:'medium', hourCycle:'h24'});
}
getBogotaTime();
setInterval(getBogotaTime, 1000)

var getBakuTime = function() {
    document.getElementById("BakuTime").innerHTML = new Date().toLocaleString("en-US", {timeZone :
    'Asia/Baku', timeStyle:'medium', hourCycle:'h24'});
}
getBakuTime();
setInterval(getBakuTime, 1000)

var getParisTime = function() {
    document.getElementById("ParisTime").innerHTML = new Date().toLocaleString("en-US", {timeZone :
    'Europe/Paris', timeStyle:'medium', hourCycle:'h24'});
}
getParisTime();
setInterval(getParisTime, 1000)

var getZagrebTime = function() {
    document.getElementById("ZagrebTime").innerHTML = new Date().toLocaleString("en-US", {timeZone :
    'Europe/Zagreb', timeStyle:'medium', hourCycle:'h24'});
}
getZagrebTime();
setInterval(getZagrebTime, 1000)

var getNauruTime = function() {
    document.getElementById("NauruTime").innerHTML = new Date().toLocaleString("en-US", {timeZone :
    'Pacific/Nauru', timeStyle:'medium', hourCycle:'h24'});
}
getNauruTime();
setInterval(getNauruTime, 1000)

var getMaltaTime = function() {
    document.getElementById("MaltaTime").innerHTML = new Date().toLocaleString("en-US", {timeZone :
    'Europe/Malta', timeStyle:'medium', hourCycle:'h24'});
}
getMaltaTime();
setInterval(getMaltaTime, 1000)

var getSouthPoleTime = function() {
    document.getElementById("SouthPoleTime").innerHTML = new Date().toLocaleString("en-US", {timeZone :
    'Antarctica/South_Pole', timeStyle:'medium', hourCycle:'h24'});
}
getSouthPoleTime();
setInterval(getSouthPoleTime, 1000)

var getTaipeiTime = function() {
    document.getElementById("TaipeiTime").innerHTML = new Date().toLocaleString("en-US", {timeZone :
    'Asia/Taipei', timeStyle:'medium', hourCycle:'h24'});
}
getTaipeiTime();
setInterval(getTaipeiTime, 1000)




