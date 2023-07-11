const playboard =document.querySelector(".play-board");

let foodx, foody ;
let snakex= 5 ,snakey=5;
let vx=0,vy=0 ;
let sb=[];
let setIntervalId;
var gameOver =false;
let ss= 0
let s3 = new Audio("s3.wav");
s3.src = "s3.wav"

window.onload = function (){
    board = document.getElementById("play-board");
    changefoodposition();
    setInterval(initGame,125);
    document.addEventListener("keydown",changedirection);}

function changefoodposition () {
    foodx= Math.floor(Math.random() * 30 ) + 1;
    foody= Math.floor(Math.random() * 30 ) + 1;
}
function sss(){ss+=1;
document.getElementById('ss').innerHTML=ss*5}
function changedirection  (e) {
    if(e.key ==="ArrowUp"){
        vx = 0;
        vy = -1;
    }
    else if(e.key ==="ArrowDown"){
        vx = 0;
        vy =1;
    }
    else if(e.key ==="ArrowLeft"){
        vx =-1;
        vy=0;
    }
    else if(e.key ==="ArrowRight"){
        vx =1;
        vy=0;
    }
    
}
initGame = ()  => {
    let htmlMarkup = `<div class="food" style="grid-area: ${foody} / ${foodx }"></div>`;   
    if( snakey === foody && snakex === foodx ){
       
    
        s3.play()
        sb.push([foody, foodx])
        changefoodposition();
        sss();
        
        
    }
    for (let i= sb.length-1;i>0;i--){
        sb[i] = sb[i - 1];
    }
    sb[0]=[snakex,snakey]
    snakex += vx
    snakey += vy

    if(snakex<0||snakex>=31.5||snakey<0||snakey>=31){
        alert(`game-over🥲 & score: ${ss*5}`)
    }

    for(let i = 0 ; i < sb.length ; i++){
        if (i==0){
        htmlMarkup += `<div class="head1" style="grid-area: ${sb[i][1]} / ${sb[i][0]}"></div>`;}
        else if(i%2==0)
        {htmlMarkup += `<div class="head" style="grid-area: ${sb[i][1]} / ${sb[i][0]}"></div>`;}
        else 
        {htmlMarkup += `<div class="head2" style="grid-area: ${sb[i][1]} / ${sb[i][0]}"></div>`;}
    }   
    playboard.innerHTML = htmlMarkup;
}
