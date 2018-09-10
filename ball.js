function Ball(radius, color){
	if(radius == undefined){radius = 40;}
	if(color == undefined){color = '#ffccdd';}
	this.x = 0;
	this.y = 0;
	this.vx = 0;
	this.vy = 0;
	this.radius = radius;
	this.rotation = 0;
	this.scaleX = 1;
	this.scaleY = 1;
	this.color = color;
	this.lineWidth = 2;
}
Ball.prototype.draw = function(context){
	context.save();
	context.translate(this.x, this.y);
	context.rotate(this.rotation);
	context.scale(this.scaleX, this.scaleY);
	context.fillStyle = this.color;
	context.lineWidth = this.lineWidth;
	context.beginPath();
	context.arc(0, 0, this.radius, 0, Math.PI/180 * 360, true)
	context.closePath();
	context.fill();
	if(this.lineWidth > 0){ context.stroke();}
	context.restore();
}

Ball.prototype.getBounds = function(){
	return {
		x: this.x - this.radius,
		y: this.y - this.radius,
		width: this.radius * 2,
		height: this.radius * 2
	}

}