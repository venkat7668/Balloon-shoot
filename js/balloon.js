(function(window){
	function Balloon(i,sx,sy,sw,sh,x,y,w,h,c){
		this.image=i;
		this.sx=sx || 0;
		this.sy=sy || 0;
		this.sw=sw;
		this.sh=sh;
		this.x=x || 0;
		this.y=y || 0;
		this.width=w;
		this.height=h;
		this.canvas=c;
		this.angle=0;	
	}
	Balloon.prototype.draw=function(){
		this.angle+=Math.random();
		this.y+=Math.cos(this.angle)*0.5;
		this.x+=Math.sin(this.angle)*1.5;
		this.canvas.save();
		this.canvas.translate(2,0);
		this.canvas.rotate(this.rotation*Math.PI/180);		
		this.canvas.drawImage(this.image,this.sx,this.sy,this.sw,this.sh,this.x,this.y,this.width,this.height);		
		this.canvas.restore();
		
	}
	Balloon.prototype.rotation=0;
	
	window.Balloon=Balloon;
}(window))