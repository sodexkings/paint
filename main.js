var mouseEvent="empty"
var lastPositionX,lastPositionY
var canvas = document.getElementById("myCanvas")

width=10
color="red"
ctx = canvas.getContext("2d")

width=10
color="red"
canvas.addEventListener("mousedown",my_mousedown)
function my_mousedown(e)
{
    mouseEvent="mouseDown;"
}

canvas.addEventListener("mouseleave",my_mouseleave)
function my_mouseleave(e)
{
    mouseEvent="mouseleave";
}
canvas.addEventListener("mouseup",my_mouseup)
function my_mouseup(e)
{
    mouseEvent="mouseUP;"
}

canvas.addEventListener("mousemove",my_mousemove)
function my_mousemove(e)
{
   current_position_of_mouse_x = e.clientX-canvas.offsetleft;
   current_position_of_mouse_Y = e.clientY-canvas.offsetTop;
    
   if(mouseEvent =="mouseDown"){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    console.log("last position of x and y coordinates =");
    console.log("x="+ lastPositionX+ "y="+ lastPositionY);
        ctx.moveTo(lastPositionX,lastPositionY);

        console.log("current position of x and y coordinates =");
    console.log("x="+ current_position_of_mouse_x+ "y="+ current_position_of_mouse_Y);
        ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_Y);
ctx.stroke();
   }
   lastPositionX=current_position_of_mouse_x
   lastPositionY=current_position_of_mouse_Y
}