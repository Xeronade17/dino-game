let dino = document.getElementById("dino");

let scoreBox = document.getElementById("score");


let jumping = false;

let score = 0;



// LOMPAT

function jump(){


if(jumping){

return;

}


jumping=true;


let height=0;



let naik=setInterval(()=>{


height +=5;


dino.style.bottom =
(50+height)+"px";



if(height>=120){


clearInterval(naik);



let turun=setInterval(()=>{


height-=5;


dino.style.bottom =
(50+height)+"px";



if(height<=0){


clearInterval(turun);

jumping=false;


}


},20);



}


},20);



}



// SCORE

setInterval(()=>{


score++;


scoreBox.innerHTML=
"Score: "+score;


},500);




// LAPTOP

document.addEventListener("keydown",function(e){


if(e.code==="Space"){


jump();


}


});




// PHONE TOUCH

document.addEventListener("touchstart",function(){


jump();


});
