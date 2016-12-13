(function($){
	$(document).ready(function(event){
      
       
		var canvas = document.getElementById('body_canvas');
		var context = canvas.getContext('2d');
		var img = new Image();
		img.src = 'http://localhost/~mangore/diccionario/assets/images/body.png';
		var circles = [];
		img.onload = function(){
						context.drawImage(img,0,0,338,647);
						/*drawCircle(context, 50, canvas.height / 2, "yellow", 5, 1, "#003300", "white", "center", "bold 32px Arial", "", circles);
						drawCircle(context, 50, canvas.height / 3, "yellow", 5, 1, "#003300", "white", "center", "bold 32px Arial", "", circles);
						drawCircle(context, 200, 500, "red", 5, 1, "#003300", "white", "center", "bold 32px Arial", "", circles);*/
				};
		
		var draw = function (context, x, y, fillcolor, radius, linewidth, strokestyle, fontcolor, textalign, fonttype, filltext) {
		    context.beginPath();
		    context.arc(x, y, radius, 0, 2 * Math.PI, false);
		    context.fillStyle = fillcolor;
		    context.fill();
		    context.lineWidth = linewidth;
		    context.strokeStyle = strokestyle;
		    context.stroke();
		    
		    context.fillStyle = fontcolor;
		    context.textAlign = textalign;
		    context.font = fonttype;
		    context.fillText(filltext, x, y);    
		};
		
		var Circle = function(x, y, radius) {
		    this.left = x - radius;
		    this.top = y - radius;
		    this.right = x + radius;
		    this.bottom = y + radius;
		};
		
		var drawCircle = function (context, x, y, fillcolor, radius, linewidth, strokestyle, fontcolor, textalign, fonttype, filltext, circles) {
		    draw(context, x, y, fillcolor, radius, linewidth, strokestyle, fontcolor, textalign, fonttype, filltext);
		    var circle = new Circle(x, y, radius);
		    circles.push(circle);  
		};
		

		
		$('#body_canvas').click(function (e) {
		    var clickedX = e.offsetX;//e.pageX - this.offsetLeft;
		    var clickedY = e.offsetY;//e.pageY - this.offsetTop;
			console.log("coordenada Click X: " + e.offsetX);
			console.log("coordenada Click Y: " + e.offsetY);
			/*console.log("Circulo lado derecho: " + circles[3].right);
			console.log("Circulo lado derecho: " + circles[3].left);
			console.log("Circulo lado arriba: " + circles[3].top);
			console.log("Circulo lado abajo: " + circles[3].bottom);*/
		    for (var i = 0; i < circles.length; i++) {
		        if (clickedX <= circles[i].right && clickedX >= circles[i].left && clickedY > circles[i].top && clickedY < circles[i].bottom) {
		            alert ('clicked number ' + (i+1));
		        }
		    }
		});
		
		
		
		$('#btn_6').on('click',function(e){
			alert("asdfasdf");
		});
		
		
		
	});
	
	
		
})($);
