(function (window){
	function Bullet(i,sx,sy,sw,sh,x,y,w,h,c){
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
		this.angle=0;
		this.vx=25;
		this.vy=25;
		this.fire=false;
	}
	Bullet.prototype.draw=function(){
		this.x+=Math.cos(-this.angle*Math.PI/180)*this.vx;
		this.y+=Math.sin(-this.angle*Math.PI/180)*this.vy;
		this.canvas.save();
		this.canvas.translate(this.x,this.y);
		//180*Math.atan2(mouseY-ball_mc.y,mouseX-ball_mc.x)/Math.PI + 90
		this.canvas.rotate(-this.angle*Math.PI/180);		
		//this.canvas.drawImage(this.image,this.sx,this.sy,this.sw,this.sh,this.x,this.y,this.width,this.height);
		this.canvas.drawImage(this.image,-7,-11);
		this.canvas.restore();
	}
	Bullet.prototype.isHit=function(obj){
		for(var b in obj){
			if(this.x>obj[b].x&&this.x<obj[b].x+obj[b].width&&this.y>obj[b].y&&this.y<obj[b].y+obj[b].height){
				obj.splice(b,1);
				console.log(obj);
			}
		}
	}
	window.Bullet=Bullet;	
}(window))