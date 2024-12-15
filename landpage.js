//set the canvas
const myCanvas = document.getElementById('bg');
myCanvas.width = window.innerWidth;
myCanvas.height = window.innerHeight;
const ctx = myCanvas.getContext('2d');


//draw Canvas
drawCanvas();



//revise function
window.addEventListener('resize', function() {
  console.log("resized");
  drawCanvas();
})
