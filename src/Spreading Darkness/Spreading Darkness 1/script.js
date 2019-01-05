canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
ctx.canvas.width  = window.innerWidth - 25;
ctx.canvas.height = window.innerHeight - 25;

var resolution = 5;
var speed = 10;
var maximumSpreadDistance = 1;

var grid = [];
for(i=0;i<canvas.width/resolution;i++){
      grid.push([]);
      for(j=0;j<canvas.height/resolution;j++){
            grid[i].push(0); //Value of 0 is a white/empty cell
      }
}
grid[Math.round(grid.length/2)][Math.round(grid[0].length/2)] = 1; //Value of 1 is a black/filled cell

function update(){
      for(i=0;i<grid.length;i++){
            for(j=0;j<grid[0].length;j++){
                  if(grid[i][j] == 0){
                        ctx.fillStyle = "rgba(255,255,255,1)";
                  }
                  if(grid[i][j] == 1){
                        ctx.fillStyle = "rgba(0,0,0,1)";
                        if(Math.random() < 1){
                              grid[i+Math.round((Math.random()*maximumSpreadDistance*2)-maximumSpreadDistance)][j+Math.round((Math.random()*maximumSpreadDistance*2)-maximumSpreadDistance)] = 1;
                        }
                  }
                  ctx.fillRect(i*resolution,j*resolution,resolution,resolution);
            }
      }
}


var intervalID = window.setInterval(update,speed);
