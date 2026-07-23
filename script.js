let dino = document.getElementById("dino");


document.addEventListener("keydown", function(event){

if(event.code === "Space"){

jump();

}

});


function jump(){

dino.style.bottom = "80px";


setTimeout(function(){

dino.style.bottom = "0px";

},500);

}
