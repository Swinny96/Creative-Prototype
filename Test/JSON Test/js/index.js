var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var w = canvas.width/2;
var h = canvas.height/2;
function init()
{
var Orbit = JSON.parse( '{"radius": 40, "colour": "none"}' ); // simmple object
ctx.beginPath();
ctx.arc(w,h,Orbit.radius,0,2*Math.PI); // draw the Orbit
ctx.fillStyle = Orbit['colour']; // what colour?
ctx.stroke();

var Orbit2 = JSON.parse( '{"radius": 60, "colour": "none"}' ); // simmple object
ctx.beginPath();
ctx.arc(w,h,Orbit2.radius,0,2*Math.PI); // draw the Orbit
ctx.fillStyle = Orbit2['colour']; // what colour?
ctx.stroke();

var Orbit3 = JSON.parse( '{"radius": 90, "colour": "none"}' ); // simmple object
ctx.beginPath();
ctx.arc(w,h,Orbit3.radius,0,2*Math.PI); // draw the Orbit
ctx.fillStyle = Orbit3['colour']; // what colour?
ctx.stroke();

var Orbit3 = JSON.parse( '{"radius": 120, "colour": "none"}' ); // simmple object
ctx.beginPath();
ctx.arc(w,h,Orbit3.radius,0,2*Math.PI); // draw the Orbit
ctx.fillStyle = Orbit3['colour']; // what colour?
ctx.stroke();

var Orbit4 = JSON.parse( '{"radius": 205, "colour": "none"}' ); // simmple object
ctx.beginPath();
ctx.arc(w,h,Orbit4.radius,0,2*Math.PI); // draw the Orbit
ctx.fillStyle = Orbit4['colour']; // what colour?
ctx.stroke();

var Orbit5 = JSON.parse( '{"radius": 290, "colour": "none"}' ); // simmple object
ctx.beginPath();
ctx.arc(w,h,Orbit5.radius,0,2*Math.PI); // draw the Orbit
ctx.fillStyle = Orbit5['colour']; // what colour?
ctx.stroke();

var Orbit6 = JSON.parse( '{"radius": 360, "colour": "none"}' ); // simmple object
ctx.beginPath();
ctx.arc(w,h,Orbit6.radius,0,2*Math.PI); // draw the Orbit
ctx.fillStyle = Orbit6['colour']; // what colour?
ctx.stroke();

var Orbit7 = JSON.parse( '{"radius": 420, "colour": "none"}' ); // simmple object
ctx.beginPath();
ctx.arc(w,h,Orbit7.radius,0,2*Math.PI); // draw the Orbit
ctx.fillStyle = Orbit7['colour']; // what colour?
ctx.stroke();

var Sphere = JSON.parse( '{"radius": 25, "colour": "grey"}' ); // simmple object
ctx.beginPath();
ctx.arc(w,h,Sphere.radius,0,2*Math.PI); // draw the Sphere
ctx.fillStyle = Sphere['colour']; // what colour?
ctx.fill();

var Sphere2 = JSON.parse( '{"radius": 3.8, "colour": "#ff0033"}' ); // simmple object
ctx.beginPath();
ctx.arc(w-40,h,Sphere2.radius,0,2*Math.PI); // draw the Sphere
ctx.fillStyle = Sphere2['colour']; // what colour?
ctx.fill();

var Sphere3 = JSON.parse( '{"radius": 9, "colour": "#ff0033"}' ); // simmple object
ctx.beginPath();
ctx.arc(w-60,h,Sphere3.radius,0,2*Math.PI); // draw the Sphere
ctx.fillStyle = Sphere3['colour']; // what colour?
ctx.fill();

var Sphere4 = JSON.parse( '{"radius": 10, "colour": "#ff0033"}' ); // simmple object
ctx.beginPath();
ctx.arc(w-90,h,Sphere4.radius,0,2*Math.PI); // draw the Sphere
ctx.fillStyle = Sphere4['colour']; // what colour?
ctx.fill();

var Sphere5 = JSON.parse( '{"radius": 15, "colour": "#ff0033"}' ); // simmple object
ctx.beginPath();
ctx.arc(w-120,h,Sphere5.radius,0,2*Math.PI); // draw the Sphere
ctx.fillStyle = Sphere5['colour']; // what colour?
ctx.fill();

var Sphere6 = JSON.parse( '{"radius": 45, "colour": "#ff0033"}' ); // simmple object
ctx.beginPath();
ctx.arc(w-200,h,Sphere6.radius,0,2*Math.PI); // draw the Sphere
ctx.fillStyle = Sphere6['colour']; // what colour?
ctx.fill();

var Sphere7 = JSON.parse( '{"radius": 35, "colour": "#ff0033"}' ); // simmple object
ctx.beginPath();
ctx.arc(w-290,h,Sphere7.radius,0,2*Math.PI); // draw the Sphere
ctx.fillStyle = Sphere7['colour']; // what colour?
ctx.fill();

var Sphere8 = JSON.parse( '{"radius": 23, "colour": "#ff0033"}' ); // simmple object
ctx.beginPath();
ctx.arc(w-360,h,Sphere8.radius,0,2*Math.PI); // draw the Sphere
ctx.fillStyle = Sphere8['colour']; // what colour?
ctx.fill();

var Sphere9 = JSON.parse( '{"radius": 20, "colour": "#ff0033"}' ); // simmple object
ctx.beginPath();
ctx.arc(w-420,h,Sphere9.radius,0,2*Math.PI); // draw the Sphere
ctx.fillStyle = Sphere9['colour']; // what colour?
ctx.fill();

}
init();