(function(window){
	
	function Gun(i,sx,sy,sw,sh,x,y,w,h,c){
		
		this.image=i;
		this.x=x || 0;
		this.y=y || 0;
		this.width=w;
		this.height=h;
		this.sx=sx || 0;
		this.sy=sy || 0;
		this.sw=sw;
		this.sh=sh;
		this.canvas=c;
		this.rotation=90;
	}
	Gun.prototype.draw=function(){
		//Rotation lock
		//this.rotation= Math.abs(this.rotation) > 35 ? this.rotation < 0 ? -35 : 35 : this.rotation
		this.rotation= this.rotation  < 145 ? this.rotation < 35 ? 35 : this.rotation : 145;
		this.canvas.save();
		this.canvas.translate(250,520);
		this.canvas.rotate(-this.rotation*Math.PI/180);
		//this.canvas.drawImage(this.image,this.sx,this.sy,this.sw,this.sh,this.x,this.y,this.width,this.height);
		this.canvas.drawImage(this.image,0,-20);
		this.canvas.restore();
		//this.canvas.drawImage(this.image,this.x,this.y,this.width,this.height);
	}
	
	window.Gun=Gun;
}(window))