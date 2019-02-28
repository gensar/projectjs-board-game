var start = function(){
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');

var CreateRectangle = function(context, x, y, fillStyle, strokeStyle) {
    context.beginPath();
    context.rect(x, y, 70, 70);
    context.fillStyle = fillStyle;
    context.strokeStyle = strokeStyle;
    context.fill();
    context.stroke();
    context.closePath();
};

var initializeBoard = function(){ 

	var coordX = 0;
	var coordY = 0;
	var previousStyle = null;
	var currentStyle = null;
	var strokeStyle = null;
	var playZoneStylesCollection = ['lightgrey', 'darkgrey'];

	for(var i=0; i<=6; i++){
		for(var k=0; k <=8; k++){
			if(i <= 1 || i >=5){
				for(var j=0; j< playZoneStylesCollection.length; j++){
					if(currentStyle != playZoneStylesCollection[j]){
						currentStyle = playZoneStylesCollection[j];
						break;
					}
				}
				strokeStyle = "black";
			}else{
				currentStyle = 'white';
				strokeStyle = 'lightgrey';
			}
			CreateRectangle(context, coordX, coordY, currentStyle, strokeStyle);
			coordX = (k == 8) ? 0 : coordX + 70;
		}
		coordY += 70;
	}
}
initializeBoard();


var players = [];

var Player = function(){
	this.figures = [];
	this.result = result;
}

var Figure = function(){
	this.name
}
};

