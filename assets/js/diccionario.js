(function($){
	
	var img;
	var datacnf;
	var datapofc;
	var datapalabras;
	var canvas;
	var context;
	var pofcArray = [];
	var cnfmselected;
	var host;
	var selection = {
		idcnf_manual: null,
		idpofc: null
	};
	
	var draw = function (context, x, y, fillcolor, radius, linewidth, strokestyle, fontcolor, textalign, fonttype, filltext) {
	    context.beginPath();
	    context.arc(x, y, radius, 0, 2 * Math.PI, false);
	    context.fillStyle = fillcolor;
	    context.fill();
	    context.lineWidth = linewidth;
	    context.strokeStyle = strokestyle;
	    context.stroke();    
	};
	
	var Circle = function(idpofc, x, y, radius) {
		var intX = parseInt(x);
		var intY = parseInt(y);
		var intRadius = parseInt(radius);
		this.idpofc = idpofc;
	    this.left = intX - intRadius;
	    this.top = intY - intRadius;
	    this.right = intX + intRadius;
	    this.bottom = intY + intRadius;
	};
	
	var drawPofc = function (data) {
		var circle = new Circle(data.idpofc,data.x,data.y,data.radius);
		pofcArray.push(circle);
	    context.beginPath();
	    context.fillStyle = data.color;
	    context.arc(data.x,data.y,data.radius,0,2*Math.PI,false);
	    context.fill();
	    context.lineWidth = 1;
	    context.strokeStyle = "#000000";
	    context.stroke();
	    context.closePath();
	};
	
	
	var bindClickInPofc = function (e) {
		    var clickedX = e.offsetX;//e.pageX - this.offsetLeft;
		    var clickedY = e.offsetY;//e.pageY - this.offsetTop;
		    for (var i = 0; i < pofcArray.length; i++) {
		        if (clickedX <= pofcArray[i].right && clickedX >= pofcArray[i].left && clickedY > pofcArray[i].top && clickedY < pofcArray[i].bottom) {
		            console.log(pofcArray[i]);
		            selection.idpofc = pofcArray[i].idpofc;
		            console.log(selection);
		            getPalabras(selection.idpofc, selection.idcnf_manual);
		        }
		    }
	};
	
	var getCnfManual = function(fingers){
		$.ajax({
			url: host + "index.php/services/getCnfmanual/" + fingers,
			method: "POST",
  			dataType: "json"
		}).done(function( data, textStatus, jqXHR ){
			datacnf = data;
			insertCnfManualBtn();
		});
	};
	
	var getPofcByIdCnfm = function( idCnfm ){
		$.ajax({
			url: host + "index.php/Services/getPofcByIdCnfm/" + idCnfm,
			method: "POST",
  			dataType: "json"
		}).done(function( data, textStatus, jqXHR ){
			datapofc = data;
			insertPofc();
			console.log(pofcArray);
		});
	};
	
	var getPalabras = function( idpofc, idcnfm ){
		$.ajax({
			url: host + "index.php/Services/getPalabras/" + idcnfm + '/' + idpofc,
			method: "POST",
  			dataType: "json"
		}).done(function( data, textStatus, jqXHR ){
			datapalabras = data;
			console.log(datapalabras);
			insertVideos();
		});
	};
	
	var insertCnfManualBtn = function(idcontent, data){
		var str = '';
		for(i = 0; i < datacnf.length; i++){
			str = str + '<div class="col-xs-6 col-md-3 cnfmanual_btn" id="' + datacnf[i].idcnf_manual + '"><a href="#" class="thumbnail"><img src="'+ host +'assets/images/configuraciones/' + datacnf[i].path + '" alt="..."></a></div>';	
		}
		$('#cnfmanual_container').html(str);
		$('#cnfmanual_container').off('click');
		$('#cnfmanual_container').on('click','.cnfmanual_btn',function(event){
			selection.idcnf_manual = $(this).attr('id');
			getPofcByIdCnfm($(this).attr('id'));
		});
	};
	
	var insertPofc = function(){
		for(i = 0; i < datapofc.length; i++){
			drawPofc({
				idpofc: datapofc[i].idpofc,
				x: datapofc[i].coor_x,
				y: datapofc[i].coor_y,
				radius: 5,
				color: "yellow"
			});
		}
		
	};
	var insertVideos = function(){
		var str = '';
		for(i = 0; i < datapalabras.length; i++){
			videosrc = host + "/assets/videos/" + datapalabras[i].video;
			str = str + '<div class="col-md-4"<div class="panel panel-default"><div class="panel-body"><video id="idvideo" autoplay loop controls width="290" height="180"><source src="'+ videosrc +'" type="video/mp4" codecs="avc1.42E01E, mp4a.40.2"></source></video></div><div class="panel-footer">' + datapalabras[i].palabra + '</div></div></div>';
		}
		$("#panel_videos").html(str);
	};
	
	
	$(document).ready(function(event){
		$host = $("#host");
		host = $host.data("host");
		console.log("Host: " + host);
		canvas = document.getElementById('body_canvas');
		context = canvas.getContext('2d');
		img = new Image();
		img.src =  host + 'assets/images/body.png';
		img.onload = function(){
			context.drawImage(img,0,0,340,canvas.height);
		};
		
		$('#btn_0').on('click',{dedos:0},function(event){
			getCnfManual(event.data.dedos);
		});
		$('#btn_1').on('click',{dedos:1},function(event){
			getCnfManual(event.data.dedos);
		});
		$('#btn_2').on('click',{dedos:2},function(event){
			getCnfManual(event.data.dedos);
		});
		$('#btn_3').on('click',{dedos:3},function(event){
			getCnfManual(event.data.dedos);
		});
		$('#btn_4').on('click',{dedos:4},function(event){
			getCnfManual(event.data.dedos);
		});
		$('#btn_5').on('click',{dedos:5},function(event){
			getCnfManual(event.data.dedos);
		});
		
		$('#body_canvas').off('click');
		$('#body_canvas').on('click',bindClickInPofc);
		
	});
	
	
	
})($);
