
var can = document.getElementById("canvas");
var ctx = can.getContext('2d');
ctx.font="bold 20px Ubuntu";



function drawTank(x,y,angle,radius,color,barrels,bodyType,name) {
	ctx.save();
	
	
	var time = new Date().getTime()
	
	//transformation
	ctx.translate(x,y);
	ctx.rotate(degToRad(angle));
	ctx.scale(radius/48,radius/48);
	//settings
	ctx.lineJoin = "round";
	ctx.strokeStyle = "#555555";
	ctx.fillStyle = "#999999";
	ctx.lineWidth = 4/(radius/48);
	
	
	
	//bases
	if (bodyType == "smasher") { //smasher base

	
		ctx.beginPath();
		ctx.fillStyle = "#555555";
		ctx.strokeStyle = "#555555";
		ctx.lineJoin = "round";
		var hA = ((Math.PI * 2)/6);
		ctx.moveTo(Math.cos((hA*hI) - degToRad(angle) + degToRad((time/6)%360) )*58,Math.sin((hA*hI) - degToRad(angle) + degToRad((time/6)%360) )*58);
		for (var hI = 1; hI < 8; hI++) {
			ctx.lineTo(Math.cos((hA*hI) - degToRad(angle) + degToRad((time/6)%360) )*58,Math.sin((hA*hI) - degToRad(angle) + degToRad((time/6)%360) )*58);
		};
		ctx.fill();
		ctx.stroke();
	
		ctx.closePath();

		
		
	};
	
	
		if (bodyType == "landmine") { //landmine base

	
		ctx.beginPath();
		ctx.fillStyle = "#555555";
		ctx.strokeStyle = "#555555";
		ctx.lineJoin = "round";
		var hA = ((Math.PI * 2)/6);
		ctx.moveTo(Math.cos((hA*hI) - degToRad(angle) + degToRad((time/6)%360) )*58,Math.sin((hA*hI) - degToRad(angle) + degToRad((time/6)%360) )*58);
		for (var hI = 1; hI < 8; hI++) {
			ctx.lineTo(Math.cos((hA*hI) - degToRad(angle) + degToRad((time/6)%360) )*58,Math.sin((hA*hI) - degToRad(angle) + degToRad((time/6)%360) )*58);
		};
		ctx.fill();
		ctx.stroke();
		ctx.moveTo(Math.cos((hA*hI) - degToRad(angle) + degToRad((time/12)%360) )*58,Math.sin((hA*hI) - degToRad(angle) + degToRad((time/12)%360) )*58);
		for (var hI = 1; hI < 8; hI++) {
			ctx.lineTo(Math.cos((hA*hI) - degToRad(angle) + degToRad((time/12)%360) )*58,Math.sin((hA*hI) - degToRad(angle) + degToRad((time/12)%360) )*58);
		};
		ctx.fill();
		ctx.stroke();
	
		ctx.closePath();
		
		
	};
	
	
	
	if (bodyType == "spike") { //spike base

	
		ctx.beginPath();
		ctx.fillStyle = "#555555";
		ctx.strokeStyle = "#555555";
		ctx.lineJoin = "round";
		var hA = ((Math.PI * 2)/3);
		ctx.moveTo(Math.cos((hA*hI) - degToRad(angle) + degToRad((time/3)%360))*60,Math.sin((hA*hI) - degToRad(angle) + degToRad((time/3)%360))*64);
		for (var hI = 1; hI < 5; hI++) {
			ctx.lineTo(Math.cos((hA*hI) - degToRad(angle) + degToRad((time/3)%360) )*60,Math.sin((hA*hI) - degToRad(angle) + degToRad((time/3)%360) )*64);
		};
		ctx.moveTo(Math.cos((hA*hI) - degToRad(angle-90) + degToRad((time/3)%360) )*60,Math.sin((hA*hI) - degToRad(angle-90) + degToRad((time/3)%360) )*64);
		for (var hI = 1; hI < 5; hI++) {
			ctx.lineTo(Math.cos((hA*hI) - degToRad(angle-90) + degToRad((time/3)%360) )*60,Math.sin((hA*hI) - degToRad(angle-90) + degToRad((time/3)%360) )*64);
		};
		ctx.moveTo(Math.cos((hA*hI) - degToRad(angle-180) + degToRad((time/3)%360) )*60,Math.sin((hA*hI) - degToRad(angle-180) + degToRad((time/3)%360) )*64);
		for (var hI = 1; hI < 5; hI++) {
			ctx.lineTo(Math.cos((hA*hI) - degToRad(angle-180) + degToRad((time/3)%360) )*60,Math.sin((hA*hI) - degToRad(angle-180) + degToRad((time/3)%360) )*64);
		};
		ctx.moveTo(Math.cos((hA*hI) - degToRad(angle-270) + degToRad((time/3)%360) )*60,Math.sin((hA*hI) - degToRad(angle-270) + degToRad((time/3)%360) )*64);
		for (var hI = 1; hI < 5; hI++) {
			ctx.lineTo(Math.cos((hA*hI) - degToRad(angle-270) + degToRad((time/3)%360) )*60,Math.sin((hA*hI) - degToRad(angle-270) + degToRad((time/3)%360) )*64);
		};
		
		
		
		ctx.fill();
		ctx.stroke();
	
		ctx.closePath();

		
		
	};

		if (bodyType == "dominator") { //dominator base

	
		ctx.beginPath();
		ctx.fillStyle = "#555555";
		ctx.strokeStyle = "#555555";
		ctx.lineJoin = "round";
		var hA = ((Math.PI * 2)/6);
		ctx.moveTo(Math.cos(0-degToRad(angle))*58,Math.sin(0-degToRad(angle))*58);
		for (var hI = 1; hI < 8; hI++) {
			ctx.lineTo(Math.cos((hA*hI) - degToRad(angle))*58,Math.sin((hA*hI) - degToRad(angle))*58);
		};
		ctx.fill();
		ctx.stroke();
	
		ctx.closePath();	
		
	};
	//barrels
	ctx.fillStyle = "#999999";
	
	
	for (i = 0; i < barrels.length; i++) { //basic rectangle
		if (barrels[i].barrelType == 0) {
			ctx.save();
			ctx.rotate(degToRad(barrels[i].angle));
			ctx.fillRect(0,(48-barrels[i].width)-48+barrels[i].offsetX,barrels[i].length*2,barrels[i].width*2);
			ctx.strokeRect(0,(48-barrels[i].width)-48+barrels[i].offsetX,barrels[i].length*2,barrels[i].width*2);
			ctx.restore();
		};
		
		if (barrels[i].barrelType == 1) { //drone spawner / machine gun
			ctx.save();
			ctx.rotate(degToRad(barrels[i].angle));
			ctx.beginPath();
			ctx.moveTo(0,((-1*barrels[i].width)/2)+barrels[i].offsetX);
			ctx.lineTo(barrels[i].length*2,((-1*barrels[i].width*2)/2)+barrels[i].offsetX);
			ctx.lineTo(barrels[i].length*2,((barrels[i].width*2)/2)+barrels[i].offsetX);
			ctx.lineTo(0,((barrels[i].width)/2)+barrels[i].offsetX);
			ctx.lineTo(0,((-1*barrels[i].width)/2)+barrels[i].offsetX);
			ctx.fill();
			ctx.stroke();
			ctx.closePath();
			ctx.restore();
		};
		if (barrels[i].barrelType == 2) { //trap launcher
			ctx.save();
			ctx.rotate(degToRad(barrels[i].angle));
			ctx.fillRect(0,(48-barrels[i].width/2)-48+barrels[i].offsetX,barrels[i].length*2,barrels[i].width);
			ctx.strokeRect(0,(48-barrels[i].width/2)-48+barrels[i].offsetX,barrels[i].length*2,barrels[i].width);
			ctx.beginPath();
			ctx.moveTo(barrels[i].length*1.6,((-1*barrels[i].width)/2)+barrels[i].offsetX);
			ctx.lineTo(barrels[i].length*2,((-1*barrels[i].width*2)/2)+barrels[i].offsetX);
			ctx.lineTo(barrels[i].length*2,((barrels[i].width*2)/2)+barrels[i].offsetX);
			ctx.lineTo(barrels[i].length*1.6,((barrels[i].width)/2)+barrels[i].offsetX);
			ctx.lineTo(barrels[i].length*1.6,((-1*barrels[i].width)/2)+barrels[i].offsetX);
			ctx.fill();
			ctx.stroke();
			ctx.closePath();
			ctx.restore();
		};
		if (barrels[i].barrelType == 3) { //power barrel
			ctx.save();
			ctx.rotate(degToRad(barrels[i].angle));
			ctx.beginPath();
			ctx.moveTo(0,((-1*barrels[i].width)/2)+barrels[i].offsetX);
			ctx.lineTo(0,((-1*barrels[i].width*2)/1)+barrels[i].offsetX);
			ctx.lineTo(0,((-1*barrels[i].width*2)/1)+barrels[i].offsetX);
			ctx.lineTo(0,(barrels[i].width*2)+barrels[i].offsetX);
			ctx.lineTo(barrels[i].length*1.8,((barrels[i].width))+barrels[i].offsetX);
			ctx.lineTo(barrels[i].length*1.8,((-1*barrels[i].width))+barrels[i].offsetX);
			ctx.lineTo(0,((-1*barrels[i].width*2))+barrels[i].offsetX);
			ctx.fillRect(barrels[i].length*1.8,(48-barrels[i].width)-48+barrels[i].offsetX,barrels[i].length*0.5,barrels[i].width*2);
			ctx.strokeRect(barrels[i].length*1.8,(48-barrels[i].width)-48+barrels[i].offsetX,barrels[i].length*0.5,barrels[i].width*2);
			ctx.fill();
			ctx.stroke();
			ctx.closePath();
			ctx.restore();
		};
	};

	//main body
	ctx.rotate(0);
	//ctx.scale(radius/48,radius/48);
	ctx.fillStyle = color;
	ctx.lineJoin = "round";
	if (bodyType == "circle" || bodyType == "smasher" || bodyType == "landmine" || bodyType == "spike" || bodyType == "dominator") { //circle for all circular types
		ctx.beginPath();
		ctx.arc(48-48,48-48,48,0,2*Math.PI);
		
		ctx.fill();
		ctx.stroke();
		
		ctx.closePath();
		ctx.fillStyle = "#000000";
	};
	if (bodyType == "square") { //square
		
		ctx.fillRect(-1*radius,-1*radius,radius*2,radius*2);
		ctx.strokeRect(-1*radius,-1*radius,radius*2,radius*2);
	};
	if (bodyType == "triangle") { //triangle
		
		ctx.beginPath();
		var hA = ((Math.PI * 2)/3);
		ctx.moveTo(Math.cos(hA/2)*64,Math.sin(hA/2)*64);
		for (var hI = 1; hI < 5; hI++) {
			ctx.lineTo(Math.cos((hA*hI)+(hA/2))*64,Math.sin((hA*hI)+(hA/2))*64);
		};
		ctx.fill();
		ctx.stroke();
	
		ctx.closePath();
	};
	if (bodyType == "pentagon") { //square for bodyType 1
		
		ctx.beginPath();
		var hA = ((Math.PI * 2)/5);
		ctx.moveTo(Math.cos(hA/2)*58,Math.sin(hA/2)*58);
		for (var hI = 1; hI < 7; hI++) {
			ctx.lineTo(Math.cos((hA*hI)+(hA/2))*58,Math.sin((hA*hI)+(hA/2))*58);
		};
		ctx.fill();
		ctx.stroke();
	
		ctx.closePath();
	};
	if (bodyType == "mothership") { //mothership

	
		ctx.beginPath();
		var hA = ((Math.PI * 2)/16);
		ctx.moveTo(Math.cos(hA/2)*48,Math.sin(hA/2)*48);
		for (var hI = 1; hI < 18; hI++) {
			ctx.lineTo(Math.cos((hA*hI)+(hA/2))*48,Math.sin((hA*hI)+(hA/2))*48);
		};
		ctx.fill();
		ctx.stroke();
	
		ctx.closePath();

	};

	ctx.restore();
	ctx.save();
	ctx.translate(x,y);
	ctx.scale(radius/32,radius/32);
	drawText(name,0,0-32-12);
	ctx.restore();
};




function drawText(text,x,y) {
	ctx.save();
	ctx.lineWidth = 5;
	ctx.textAlign = "center";
	ctx.translate(x,y);
	ctx.strokeStyle = "#555555";
	ctx.strokeText(text,0,0,200);
	ctx.fillStyle = "#ffffff";
	ctx.fillText(text,0,0,200);
	ctx.restore();
};



function drawCircle(x,y,radius,color) {
	ctx.save();
	ctx.lineWidth = 4;
	ctx.beginPath();
	ctx.arc(x,y,radius,0,2*Math.PI);
	ctx.fillStyle = color;
	ctx.fill();
	ctx.strokeStyle = "#555555";
	ctx.stroke();
	ctx.closePath();
	ctx.restore();
};


function drawSquare(x,y,angle,radius,color) {
	ctx.save();
	ctx.translate(x,y);
	ctx.rotate(angle*Math.PI/180);
	ctx.lineWidth = 4;
	ctx.lineJoin = "round";
	ctx.fillStyle = color;
	ctx.strokeStyle = "#555555";
	ctx.fillRect(-1*radius,-1*radius,radius*2,radius*2);
	ctx.strokeRect(-1*radius,-1*radius,radius*2,radius*2);
	ctx.restore();
};


function drawPenta(pentaX,pentaY,pentaAng,pentaSize,pentaColor) {

	ctx.save();
	ctx.fillStyle = "#7777ff";
	ctx.strokeStyle = "#555555";
	ctx.lineJoin = "round";
	ctx.beginPath();
	var pentaA = ((Math.PI * 2)/5);
	ctx.translate(pentaX,pentaY);
	ctx.rotate(degToRad(pentaAng));
	ctx.moveTo(pentaSize,0);
	for (var pentaI = 1; pentaI < 7; pentaI++) {
		ctx.lineTo(pentaSize*Math.cos(pentaA*pentaI),pentaSize*Math.sin(pentaA*pentaI));
	}
	ctx.lineWidth = 4/(pentaSize/40);
	ctx.fill()
	ctx.stroke();
	ctx.translate(-1*pentaX,-1*pentaY);
	
	ctx.closePath();
	ctx.restore();
};








function drawGrid(x,y,width,height,slotSize,lineColor) {
	ctx.save();
	ctx.beginPath();
	ctx.strokeColor = lineColor;
	ctx.lineWidth = 1;
	
	for(var i = 0; i < width || i < height; i += slotSize) {
		ctx.moveTo(0,i);
		ctx.lineTo(width,i);
		ctx.moveTo(i,0);
		ctx.lineTo(i,height);
	};
	ctx.strokeStyle = lineColor;
	ctx.stroke();
	ctx.closePath();
	ctx.restore();
};



function renderStep(){
	ctx.clearRect(0,0,canvas.width,canvas.height);
	ctx.fillStyle = "#cdcdcd";
	ctx.fillRect(0,0,canvas.width,canvas.height);
	drawGrid(0,0,canvas.width,canvas.height,24,"#c0c0c0");
	
	
	for(var i=0;i<entity.length;i++){
		var ent = entity[i];
		drawTank(ent.x,ent.y,ent.angle,levelToSize(ent.level),ent.color,ent.barrels,ent.bodyType,ent.name,ent.health/100);
	};
	if (isMakingTank){
		ctx.globalAlpha = 0.6;
		drawTank(makeTankX,makeTankY,makeTankAngle,levelToSize(makeTankLevel),makeTankColor,makeTankBarrels,makeTankBodyType,makeTankName,1);
		ctx.globalAlpha = 1;
	};
};

setInterval(renderStep,50);
