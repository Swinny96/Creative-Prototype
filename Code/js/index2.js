var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var w = canvas.width/2;
var h = canvas.height/2;


var angle = 3 * Math.PI / 180;
var cx = canvas.width/2;
var cy = canvas.height/2;
var radius = 40;
var radius2 = 60;
var radius3 = 90;
var radius4 = 120;
var radius5 = 205;
var radius6 = 290;
var radius7 = 360;
var radius8 = 420;
var orbitRad =60;
var orbits=7;
var orbitDias = [20,40,60,80,100,120]; 
var sphereDias = [18,18,18,18,18,18,18,18,18,18,18]; 
var spherePositionX = [400,200,300,500,550,600,200,300,500,550,600];//randomSphereX(),randomSphereX(),randomSphereX(),randomSphereX(),randomSphereX(),randomSphereX()]; 
var spherePositionY = [400,600,350,300,425,355,600,350,300,425,355];//randomSphereY(),randomSphereY(),randomSphereY(),randomSphereY(),randomSphereY(),randomSphereY()]; 
var sphereColours = ["red","green","yellow","blue","cyan","purple", "burlywood", "teal", "darkgoldenrod", "deeppink","lightblue"];
var studentNames = ["John Readie","Geof Green","Mike Yelovski","Rebecca Blue","Janet Teale","Fred Pope", "Chris Wood", "Janet Teale", "Paul Gold", "Dave Axelrod","Lynne Sky"];
var rdmove= 0;
var change = -1;

var person;
var randomX=0;
var randomY=0;
var noOfStudents=0;

var together =0;

function randomStartPostion() {
   // positiveOrNegative();
     randomX = Math.random()*canvas.width ;
      randomY = Math.random()*canvas.height ;
}
function positiveOrNegative() {
     change = -1 + Math.round(Math.random()) * 2;  
    }
function randomMove() {
    positiveOrNegative();
     rdmove = Math.floor((Math.random()*.5 ) - 1)*change;
   
}
function randomSphereX() {
     rdmove = Math.floor((Math.random()* canvas.width) +0);
   
}
function randomSphereY() {
     rdmove = Math.floor((Math.random()* canvas.height) +0);
   
}
function sphere(radius,color,x,y)
{
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(x,y,radius,0,2*Math.PI);
    ctx.fill()

    ctx.closePath();
}
function removeStudents()
{
        for(i=1;i<=noOfStudents;i++)
    {
       removeElement("student"+i);
      
    }
}
function bringTogetherBtn(btn)
{
    
    if(together==0)
    {
        // var btn = document.getElementById(bringTogether);
         btn.value="Disperse Students";
        together=1;
    }
    else
    {
        // var btn = document.getElementById(bringTogether);
         btn.value="Come to Center";
         together=0;
    }
}
function removeElement(id) {
    var elem = document.getElementById(id);
    return elem.parentNode.removeChild(elem);
}

function ClearAndRefreshDocument()
{
    removeStudents();
     findStudentsFunction();
}

function keyup(studentNane)
{
   alert("Say Hi To: "+studentNane );
}
function findStudentsFunction() {


    noOfStudents=Math.floor((Math.random()* 10) +0);
    for(i=1;i<=noOfStudents;i++)
    {
        randomStartPostion();
        spherePositionX[i-1]=randomX;
       
        spherePositionY[i-1]=randomY;

         var btn = document.createElement("BUTTON" );
         btn.id="student"+i;
       
         var t = document.createTextNode(studentNames[i-1]);
         btn.appendChild(t);
         btn.onclick= function(){              
             alert("Say Hi To: "+this.textContent ); 
        };     
       
        // btn = document.createElement('input');
        // btn.type = 'button';
        // btn.value = studentNames[i-1];
        // btn.id = "student"+i;
        // btn.onclick = function () {
        //       alert('Say Hi To: '+this.value);             
        // };
        var d=document.createElement("div");
        d.appendChild(btn);
        document.body.appendChild(d);
          
    }
        
}

function mouseOver() {
    person.style.color = "red";
}

function orbitModel(rad, colour)
{
ctx.beginPath();
ctx.arc(w,h,rad,0,2*Math.PI); // draw the Orbit ctx.fillStyle = colour; // what colour?
ctx.stroke();


}
function crossHairs()
{
    ctx.beginPath();
ctx.moveTo(w, h- (orbits*orbitRad));
ctx.lineTo(w,h+(orbits*orbitRad));
ctx.moveTo(w- (orbits*orbitRad),h);
ctx.lineTo(w+(orbits*orbitRad),h);
ctx.stroke();
}

function mouseOver() {
    document.getElementById("person").style.color = "red";
}
 function mouseDown() {
   person.style.color = "red";
}
var currentRad = 20;
function draw()
{
  ctx.clearRect(0, 0, w*2, h*2);
crossHairs();
sphere(20, "orange",w,h);
 for(i=1;i<=orbits;i++)
{
 
    
    orbitModel(i*orbitRad,"#ff0033");

 
}


for(i=1;i<=noOfStudents;i++)
{
  //  if(e.clientX>=spherePositionX[i]-sphereDias[i] & e.clientX<=spherePositionX[i]+sphereDias[i] &e.clientY>=spherePositionY[i]-sphereDias[i] &e.clientX>=spherePositionY[i]-sphereDias[i] )
  //  sphere(sphereDias[i],"black",spherePositionX[i],spherePositionY[i]);
   // else
   person=  sphere(sphereDias[i-1],sphereColours[i-1],spherePositionX[i-1],spherePositionY[i-1]);


}
  
ctx.beginPath();
ctx.font = "30px Arial";
ctx.fillStyle = "black";
ctx.fillText("Kirkham Building",50,100);
ctx.closePath();

ctx.beginPath();
ctx.font = "30px Arial";
ctx.fillStyle = "black";
ctx.fillText("Media Factory",50,900);
ctx.closePath();

ctx.beginPath();
ctx.font = "30px Arial";
ctx.fillStyle = "black";
ctx.fillText("C&T Building",800,100);
ctx.closePath();

ctx.beginPath();
ctx.font = "30px Arial";
ctx.fillStyle = "black";
ctx.fillText("Car Park",800,900);
ctx.closePath();


};

function keepDrawing() {


    draw(newX, newY);


    setTimeout(keepDrawing, 250)
}

window.requestAnimFrame = (function (callback) {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
        window.setTimeout(callback, 1000 / 60);
    };
})();

var fps = 60;
var newX = cx + radius * Math.cos(angle);
        var newY = cy + radius * Math.sin(angle);

function animate() {
    setTimeout(function () {
        requestAnimationFrame(animate);

        // increase the angle of rotation
      //  angle += 1 * Math.PI / 180;

        // calculate the new ball.x / ball.y

        for(i=1;i<=noOfStudents;i++)
        {         
                if(together==0)
                {
                    randomMove();
                    spherePositionX[i-1]=spherePositionX[i-1]+(rdmove/2);
                    // newX = newX+(rdmove);
                    randomMove();

                    spherePositionY[i-1]=spherePositionY[i-1]+(rdmove/2);
                }
                else
                {
                    if(spherePositionX[i-1]==500 & spherePositionY[i-1]==500 )
                    {
                            spherePositionX[i-1]=500 ;
                          spherePositionY[i-1]=500 ;
                    }
                    else
                    {
                        spherePositionX[i-1]= spherePositionX[i-1]+(500 - spherePositionX[i-1])/100;
                          spherePositionY[i-1]=spherePositionY[i-1]+(500 - spherePositionY[i-1])/100;
                    }
                }
        }
        draw();

        // draw the centerpoint 
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2, false);
        ctx.closePath();

    }, 1000 / fps);
}


animate();






//init(); 

