canvas = document.getElementById('myCanvas');
ctx = canvas.getContext('2d');

r_height = 90;
r_width = 100;

rover_x = 50;
rover_y = 60;

var nasa_images = ["n1.jpeg","n2.jpeg","n3.jpeg","n4.jpeg"];
r = Math.floor(Math.random() * 4);


r_img = 'rover.png';
bg_img = nasa_images[r];

function add() {
bg = new Image();
bg.onload = bgUpload;
bg.src = bg_img;

r = new Image();
r.onload = rUpload;
r.src = r_img;
}

function bgUpload() {

ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);

}

function rUpload() {

ctx.drawImage(r, rover_x, rover_y, r_width, r_height);


}

window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
keyPressed = e.keyCode;

if(keyPressed == '37'){
left();

}

else if(keyPressed == '38'){
up();

}
else if(keyPressed == '39'){
    right();

}
else if(keyPressed == '40'){
    down();

}

}

function up()
{
if(rover_y >=0)
{
rover_y = rover_y -10;
bgUpload();
rUpload();
}
}

function down()
{
if(rover_y <=500)
{
rover_y = rover_y +10;
bgUpload();
rUpload();
}
}

function left()
{
if(rover_x >= 0)
{
rover_x = rover_x -10;
bgUpload();
rUpload();
}
}

function right()
{
if(rover_x <= 700)
{
rover_x = rover_x +10;
bgUpload();
rUpload();
}
}



