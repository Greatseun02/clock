setInterval(showTime, 1000);
// localStorage.setItem("lastname", "Smith");


function showTime(){
    let date = new Date();
    let todayDate = date.toLocaleString("en-GB",{day:"2-digit", month:"long" ,year:"numeric"})
    let minute = date.toLocaleString("en-GB",{minute:"2-digit"})
    let hour = date.toLocaleString("en-GB",{hour:"2-digit"})
    let second = date.toLocaleString("en-GB",{second:"2-digit"})
    document.querySelector(".date").innerHTML=todayDate;
    console.log(second.length)
    if(hour.length==2){
        document.querySelector(".hour").textContent=hour;
    }else{
        document.querySelector(".hour").textContent= "0" + hour;
    }
    if(minute.length==2){
        document.querySelector(".minute").innerHTML=minute;
    }else{
        document.querySelector(".minute").innerHTML= "0" + minute;
    }
    if(second.length==2){
        document.querySelector(".second").innerHTML=second;
    }else{
        document.querySelector(".second").innerHTML= "0" + second;
    }
   
}
setInterval(function(){
    let backgroundCount = localStorage.getItem("backgroundCount");
    if(backgroundCount == null){
        localStorage.setItem("backgroundCount", 0);
        backgroundCount = localStorage.getItem("backgroundCount");
    }

    if(backgroundCount < 3){
        backgroundCount++
        console.log(backgroundCount)
        localStorage.setItem("backgroundCount", backgroundCount);
        console.log(localStorage.getItem("backgroundCount"))
        console.log(typeof(backgroundCount))
    }else{
        localStorage.setItem("backgroundCount", 0);
    }

    document.querySelector("body").className="body" + backgroundCount
}, 15000)
showTime()

