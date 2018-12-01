//Calculate at same time
//Add reset
//Colors
//Size=1 pixel
//

canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
ctx.canvas.width  = window.innerWidth - 25;
ctx.canvas.height = window.innerHeight - 25;

var resolution = 20;
var speed = 1;
var maximumSpreadDistance = 1;
var spreadingProbability = 50;

//function reset(){
	var grid = [];
	for(i=0;i<canvas.width/resolution;i++){
		  grid.push([]);
		  for(j=0;j<canvas.height/resolution;j++){
				grid[i].push(0); //Value of 0 is a gray/empty cell
		  }
	}
	grid[0][Math.round(grid[0].length/2)] = 1; //Value of 1 is a white-filled cell
	grid[grid.length-1][Math.round(grid[0].length/2)] = 2; //Value of 2 is a black-filled cell
//}

//reset();
var random = 0;

function update(){
      for(i=0;i<grid.length;i++){
            for(j=0;j<grid[0].length;j++){
				  if(grid[i][j] == 0){
					ctx.fillStyle = "rgba(150,150,150,1)";
					ctx.fillRect(i*resolution,j*resolution,resolution,resolution);
				  }
				  if(grid[i][j] == 1){
						ctx.fillStyle = "rgba(255,255,255,1)";
						random = [Math.random(),Math.random()];
						if(Math.random() < spreadingProbability){
							if(i+Math.round((random[0]*maximumSpreadDistance*2)-maximumSpreadDistance)>-1 && j+Math.round((random[1]*maximumSpreadDistance*2)-maximumSpreadDistance)>-1 && i+Math.round((random[0]*maximumSpreadDistance*2)-maximumSpreadDistance)<grid.length && j+Math.round((random[1]*maximumSpreadDistance*2)-maximumSpreadDistance)<grid[0].length){
								grid[i+Math.round((random[0]*maximumSpreadDistance*2)-maximumSpreadDistance)][j+Math.round((random[1]*maximumSpreadDistance*2)-maximumSpreadDistance)] = 1;
							}
						}
						ctx.fillRect(i*resolution,j*resolution,resolution,resolution);
				  }
				  if(grid[i][j] == 2){
						ctx.fillStyle = "rgba(0,0,0,1)";
						random = [Math.random(),Math.random()];
						if(Math.random() < spreadingProbability){
							if(i+Math.round((random[0]*maximumSpreadDistance*2)-maximumSpreadDistance)>-1 && j+Math.round((random[1]*maximumSpreadDistance*2)-maximumSpreadDistance)>-1 && i+Math.round((random[0]*maximumSpreadDistance*2)-maximumSpreadDistance)<grid.length && j+Math.round((random[1]*maximumSpreadDistance*2)-maximumSpreadDistance)<grid[0].length){
								grid[i+Math.round((random[0]*maximumSpreadDistance*2)-maximumSpreadDistance)][j+Math.round((random[1]*maximumSpreadDistance*2)-maximumSpreadDistance)] = 2;
							}
						}
						ctx.fillRect(i*resolution,j*resolution,resolution,resolution);
				  }
            }
      }
}


var intervalID = window.setInterval(update,resolution*speed);
