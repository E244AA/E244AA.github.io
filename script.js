var canvas = document.getElementById("c1");
var ctx = canvas.getContext("2d");
var score = document.getElementById("score");
var time = document.getElementById("time");

var h = window.innerHeight;
var w = window.innerWidth;

canvas.height = h;
canvas.width = w;

var cnt = (w-h)/3.14;
var tmp = 0;
var max = w/h + 3.14;
var min = w/h;
var change = 0;
var size = w/h;
var ideal = (h + 2*w)/2;
var t = ideal;
var x = [cnt];
var dx = [cnt];
var y = [cnt];
var dy = [cnt];
var color = ["red", "yellow", "green", "white"];
var color1 = ["black", "white"];
var timer;

for(var i = 0; i < cnt; i++){
	x[i] = Math.floor(Math.random() * (w - 0)) + 0;
	y[i] = Math.floor(Math.random() * (h - 0)) + 0;
	dx[i] = Math.floor(Math.random() * (max - min)) + min;
	dy[i] = Math.floor(Math.random() * (max - min)) + min;
	//dx[i] = 3;
	//dy[i] = 5;
	y[i] = (i+1)*size;
	//y[i] = 0;
}

ctx.fillStyle = color1[0];

f();

function f(){
	
	for(var i = 0; i < cnt; i++){
		ctx.fillRect(x[i], y[i], size, size);
		
		if(x[i] + dx[i] > w) dx[i] *= -1;
		if(y[i] + dy[i] > h) dy[i] *= -1;
		if(y[i] + dy[i] < 0) dy[i] *= -1;
		if(x[i] + dx[i] < 0) dx[i] *= -1;
		
		x[i] += dx[i];
		y[i] += dy[i];
	}
	
	//ctx.fillStyle = color1[Math.floor(Math.random() * (2 - 0)) + 0];
	//ctx.fillStyle = color[Math.floor(Math.random() * (4 - 0)) + 0];
	
	/*if(((tmp / 1000) % 10 >= 0 && (tmp / 1000) % 10 < 3)  | ((tmp / 1000) % 10 >= 6 && (tmp / 1000) % 10 < 9)){
		//ctx.fillStyle = "white";
		ctx.fillStyle = color[Math.floor(Math.random() * (4 - 0)) + 0];
	}
	else{
		ctx.fillStyle = "black";
	}*/
	
	if(change == 0){
		ctx.fillStyle = "white";
	}
	else if(change == 1){
		ctx.fillStyle = "black";
	}
	
	t--;
	
	if(t == 0){
		t = ideal;
		if(change == 0) change = 1;
		else change = 0;
	}
	
	tmp++;
	
	score.innerHTML = t;
	time.innerHTML = tmp;
	
	timer = setTimeout(f, 10);
}