canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
canvas.addEventListener("mousemove",mymove);
current_X=0;
current_Y=0;
previous_X=0;
previous_Y=0;
Mouse_Event="";
function mymove(e){
    console.log(e)
    current_X=e.clientX-canvas.offsetLeft;
    current_Y=e.clientY-canvas.offsetTop;
    if(Mouse_Event=="mousedown"){
    ctx.beginPath();
    ctx.moveTo(previous_X,previous_Y);
    ctx.lineTo(current_X,current_Y);
    ctx.stroke()}
    previous_X=current_X;
    previous_Y=current_Y;
}
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(){
    Mouse_Event="mousedown";


}


canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(){
    Mouse_Event="mouseleave";
}
canvas.addEventListener("mouseup",mymouseup);
function mymouseup(){
    Mouse_Event="mouseup";


}