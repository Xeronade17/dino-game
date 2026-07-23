let dino = document.getElementById("dino");

let position = 80;
let jumping = false;
let score = 0;


function jump(){

    if(jumping) return;

    jumping = true;

    let height = 0;

    let up = setInterval(()=>{

        height += 5;
        dino.style.bottom = (50 + height) + "px";


        if(height >= 100){

            clearInterval(up);


            let down = setInterval(()=>{

                height -= 5;
                dino.style.bottom = (50 + height) + "px";


                if(height <= 0){

                    clearInterval(down);
                    jumping=false;

                }

            },20);

        }

    },20);

}



function moveLeft(){

    position -= 20;
    dino.style.left = position+"px";

}


function moveRight(){

    position += 20;
    dino.style.left = position+"px";

}



setInterval(()=>{

    score++;
    document.getElementById("score").innerHTML =
    "Score: " + score;

},500);



document.addEventListener("keydown",(e)=>{

    if(e.code==="Space"){
        jump();
    }


    if(e.code==="ArrowLeft"){
        moveLeft();
    }


    if(e.code==="ArrowRight"){
        moveRight();
    }

});
