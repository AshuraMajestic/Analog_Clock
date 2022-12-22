var hour = 0;
var minute = 0;
var second = 0;
var milisecond = 0;
var d = new Date();
setInterval(
    function() {
        d = new Date();
        hour = d.getHours();
        if ((hour) >= 6 && (hour < 18)) {
            document.getElementById("container").style.boxShadow = "none";
            document.getElementById("body").style.backgroundColor = "rgb(10,142,219)";
            document.getElementById("container").style.backgroundColor = "rgb(21 , 196, 239)";
            document.getElementById("star").style.display = "none";
            document.getElementById("sun").style.display = "block";


        } else {
            document.getElementById("container").style.boxShadow = "inset 100px -120px 0px #F5F3CE, -10px 10px 20px gold";
            document.getElementById("container").style.backgroundColor = "black";
            document.getElementById("star").style.display = "block";
            document.getElementById("sun").style.display = "none";
        }
        hour = d.getHours() * 30 + Math.round(minute / 12);
        minute = d.getMinutes() * 6;
        second = d.getSeconds() * 6;
        document.getElementById("hour-hand").style.transform = "rotate(" + hour + "deg)";
        document.getElementById("minute-hand").style.transform = "rotate(" + minute + "deg)";

        document.getElementById("second-hand").style.transition = "transform 1s linear 0s";
        document.getElementById("second-hand").style.transform = "rotate(" + second + "deg)";

    }, 1000
);
/*=========================
==========Star=============
==========================*/
var looper;
var degrees = 0;

function rotateAnimation(el, speed) {
    var cog1 = document.getElementById(el);
    cog1.style.transition = "transform 0s linear 0s";
    cog1.style.transform = "rotateY(" + degrees + "deg)";

    looper = setTimeout('rotateAnimation(\'' + el + '\',' + speed + ')', speed);
    degrees++;
    if (degrees > 359) {
        degrees = 1;
    }
};
rotateAnimation("star", 5);