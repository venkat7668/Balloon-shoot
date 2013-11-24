var totalImgs=3;
var loadedImgs=0;
//contentManger
(function contentManager(canvas,width,height){
this.balloonImg=new Image();
this.gunImg=new Image();
this.bulletImg=new Image();
//loading
loadImage(this.balloonImg,"img/balloons.png");
loadImage(this.gunImg,"img/gun.png");
loadImage(this.bulletImg,"img/bullet.png");
}())


//Image loading Handler
function loadImage(element,src){
	element.src=src;
	element.onload =loadHandler;
	element.onerror=errorHandler;
}
//Imaage Error Handler
function errorHandler(){
	console.log("Problem in loding " + event.target.src);
}

//Image loaded Handler
function loadHandler(){
	loadedImgs++;
	if(loadedImgs==totalImgs){
		console.log("All Images are loaded :)");
		//init function from home page
		init();
		
	}
}