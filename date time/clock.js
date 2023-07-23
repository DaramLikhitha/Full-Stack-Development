setInterval(()=>{
    d=new Date();
    htime=d.getHours();
    mtime=d.getMinutes();
    stime=d.getSeconds();

    hrot = 30*htime+mtime/2;
    mrot = 6*mtime;
    srot = 6*stime;

    hour.style.transform = `rotate(${hrot}deg)`;
    min.style.transform = `rotate(${mrot}deg)`;
    sec.style.transform = `rotate(${srot}deg)`;
    // console.log(d);

    var median = "AM";

    function digitaltimedisplay(){
        if(htime>12){
            median = "PM";
            htime -= 12;
        }
    }
    digitaltimedisplay();

    var dtime = document.getElementById("dtime");
    dtime.innerHTML = htime+":"+mtime+":"+stime+" "+median;

    let week = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var day = document.getElementById("day");
    day.innerHTML = d.getDate()+" "+months[d.getMonth()]+" "+d.getFullYear()+" , "+week[d.getDay()];

},1000);