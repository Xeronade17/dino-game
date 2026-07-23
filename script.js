let dino=document.getElementById("dino");
let obstacle=document.getElementById("obstacle");

let x=80;
let score=0;
let jumping=false;



function jump(){

if(jumping)return;

jumping=true;

let h=0;


let up=setInterval(()=>{

h+=5;

dino.style.bottom=(50+h)+"px";


if(h>=120){

clearInterval(up);


let down=setInterval(()=>{

h-=5;

dino.style.bottom=(50+h)+"px";


if(h<=0){

clearInterval(down);
jumping=false;

}

},20);


}

},20);

}



function moveLeft(){

x-=20;
dino.style.left=x+"px";

}


function moveRight(){

x+=20;
dino.style.left=x+"px";

}



setInterval(()=>{

score++;

document.getElementById("score").innerHTML=
"Score: "+score;


},500);





let cactusX=-50;


function moveObstacle(){

cactusX+=5;

obstacle.style.right=cactusX+"px";


if(cactusX>window.innerWidth){

cactusX=-50;

}

}


setInterval(moveObstacle,30);



document.addEventListener("keydown",(e)=>{


if(e.code==="Space")
jump();


if(e.code==="ArrowLeft")
moveLeft();


if(e.code==="ArrowRight")
moveRight();


});
