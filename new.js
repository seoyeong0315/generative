window.addEventListener('load', () => {
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext('2d');
  const saveBtn = document.getElementById("jsSave");


  //Resizing
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  var background = new Image();
  background.src = "postergenerativeDevelop-05-01.png";

  background.onload = function(){
    ctx.drawImage(background,530,10);
  }

  let painting = false;

    function startPosition(e){
      painting = true;
      draw(e);
    }
    function finishedPosition(){
      painting = false;
      ctx.beginPath();
    }

    function draw(e){
      if(!painting) return;
      ctx.lineWidth = 40;
      ctx.lineCap = 'square';

      ctx.lineTo(e.clientX, e.clientY);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(e.clientX, e.clientY);
    }
    //EventListeners
    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishedPosition);
    canvas.addEventListener("mousemove", draw);





function preload(){
  img = loadImage('box.png');
}



})
