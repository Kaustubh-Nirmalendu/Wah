circle1 = document.getElementById('Circle1');
circle2 = document.getElementById('Circle2');
circle3 = document.getElementById('Circle3');
var WanderDistance = 3;

setInterval(Passive,100)
function Passive()
{
    //console.log("Circle1, top = "+circle1.style.top+", left = "+circle1.style.left+"Circle3, top = "+circle3.style.top+", left = "+circle3.style.left);
    circle1 = document.getElementById('Circle1');
    circle2 = document.getElementById('Circle2');
    circle3 = document.getElementById('Circle3');

    //circle1.style.position = 'absolute';
    circle1.style.top = 80 + (Math.floor(Math.random() * 2 * WanderDistance)-WanderDistance) + 'px';
    circle2.style.top = 100 + (Math.floor(Math.random() * 2 * WanderDistance)-WanderDistance) + 'px';
    circle3.style.top = 0 + (Math.floor(Math.random() * 2 * WanderDistance)-WanderDistance) + 'px';
    circle1.style.left = 1200 + (Math.floor(Math.random() * 2 * WanderDistance)-WanderDistance) + 'px';
    circle2.style.left = 1250 + (Math.floor(Math.random() * 2 * WanderDistance)-WanderDistance) + 'px';
    circle3.style.left = 1300 + (Math.floor(Math.random() * 2 * WanderDistance)-WanderDistance) + 'px';
    //console.log("moved");
}