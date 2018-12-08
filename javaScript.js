/*var hoy = new Date(); 
var dia=hoy.getDay();//1 lunes, 2 martes,...7 domingo
var h = hoy.getHours();
var m = hoy.getMinutes();
var s = hoy.getSeconds();*/

function f1(){
	hoy = new Date(); 
    s = hoy.getSeconds();
	//window.alert(s);
	document.getElementsByTagName('td')[s].style.border="4px solid red";						
}











function f5(){
	hoy = new Date(); 
    dia = hoy.getDay(); //window.alert(dia);dia=1;
	//window.alert(s);
	if(dia<6){
		document.getElementsByTagName('td')[dia].style.border="4px solid orange";
		document.getElementsByTagName('td')[dia].style.background="red";
	}else {	
		document.getElementsByTagName('td')[dia].style.border="4px solid black";
		document.getElementsByTagName('td')[dia].style.background="lightGray";
	}
}


var estadof2=0;
function f2(){
	//window.alert("hola");
	if(estadof2==0) {
		document.getElementById('id1').style.color = "orange";
		estadof2=1; //window.alert("1");
	}else if(estadof2==1){
		document.getElementById('id1').style.color = "black";
		estadof2=0;	//window.alert("0");
	}
	//window.alert("adios");	
}

function f3(){
	for(var i=0; i<3; i++){
		document.getElementsByClassName("tecno31")[i].style.color="yellow";
		document.getElementsByClassName("tecno31")[i].style.fontStyle = "italic";
		document.getElementsByClassName("tecno31")[i].style.borderRadius = "25px";
	}							
}
function f4(){
	for(var i=0; i<3; i++){
		document.getElementsByClassName("tic1")[i].style.color="yellow";
		document.getElementsByClassName("tic1")[i].style.fontStyle = "italic";
		document.getElementsByClassName("tic1")[i].style.borderRadius = "25px";
	}							
}

function muestraReloj() {
	fechaHora = new Date();
	var dia=hoy.getDay();
	horas = fechaHora.getHours();
	minutos = fechaHora.getMinutes();
	segundos = fechaHora.getSeconds();
				 
	if(horas < 10) { horas = '0' + horas; }
	if(minutos < 10) { minutos = '0' + minutos; }
	if(segundos < 10) { segundos = '0' + segundos; }
				 
		document.getElementById("reloj").innerHTML = horas+':'+minutos+':'+segundos;
	}

	
	function muestraDia(){
	hoy = new Date(); 
    dia = hoy.getDay(); //window.alert(dia);
	//dia=5;
	
	if(dia==1){//lunes
		document.getElementsByTagName('td')[dia].style.border="4px solid orange";
		document.getElementsByTagName('td')[dia].style.background="red";
	
		document.getElementsByTagName('td')[2].style.border="2px solid black";
		document.getElementsByTagName('td')[2].style.background="lightGray";
		document.getElementsByTagName('td')[3].style.border="2px solid black";
		document.getElementsByTagName('td')[3].style.background="lightGray";
		document.getElementsByTagName('td')[4].style.border="2px solid black";
		document.getElementsByTagName('td')[4].style.background="lightGray";
		document.getElementsByTagName('td')[5].style.border="2px solid black";
		document.getElementsByTagName('td')[5].style.background="lightGray";
	}
	if(dia==2){//Martes
		document.getElementsByTagName('td')[dia].style.border="4px solid orange";
		document.getElementsByTagName('td')[dia].style.background="red";
	
		document.getElementsByTagName('td')[1].style.border="2px solid black";
		document.getElementsByTagName('td')[1].style.background="lightGray";
		document.getElementsByTagName('td')[3].style.border="2px solid black";
		document.getElementsByTagName('td')[3].style.background="lightGray";
		document.getElementsByTagName('td')[4].style.border="2px solid black";
		document.getElementsByTagName('td')[4].style.background="lightGray";
		document.getElementsByTagName('td')[5].style.border="2px solid black";
		document.getElementsByTagName('td')[5].style.background="lightGray";
	}
	if(dia==3){//Miercoles
		document.getElementsByTagName('td')[dia].style.border="4px solid orange";
		document.getElementsByTagName('td')[dia].style.background="red";
	
		document.getElementsByTagName('td')[1].style.border="2px solid black";
		document.getElementsByTagName('td')[1].style.background="lightGray";
		document.getElementsByTagName('td')[2].style.border="2px solid black";
		document.getElementsByTagName('td')[2].style.background="lightGray";
		document.getElementsByTagName('td')[4].style.border="2px solid black";
		document.getElementsByTagName('td')[4].style.background="lightGray";
		document.getElementsByTagName('td')[5].style.border="2px solid black";
		document.getElementsByTagName('td')[5].style.background="lightGray";
	}
	
	if(dia==4){//Jueves
		document.getElementsByTagName('td')[dia].style.border="4px solid orange";
		document.getElementsByTagName('td')[dia].style.background="red";
	
		document.getElementsByTagName('td')[1].style.border="2px solid black";
		document.getElementsByTagName('td')[1].style.background="lightGray";
		document.getElementsByTagName('td')[2].style.border="2px solid black";
		document.getElementsByTagName('td')[2].style.background="lightGray";
		document.getElementsByTagName('td')[3].style.border="2px solid black";
		document.getElementsByTagName('td')[3].style.background="lightGray";
		document.getElementsByTagName('td')[5].style.border="2px solid black";
		document.getElementsByTagName('td')[5].style.background="lightGray";
	}
	if(dia==5){//viernes
		document.getElementsByTagName('td')[dia].style.border="4px solid orange";
		document.getElementsByTagName('td')[dia].style.background="red";
	
		document.getElementsByTagName('td')[1].style.border="2px solid black";
		document.getElementsByTagName('td')[1].style.background="lightGray";
		document.getElementsByTagName('td')[2].style.border="2px solid black";
		document.getElementsByTagName('td')[2].style.background="lightGray";
		document.getElementsByTagName('td')[3].style.border="2px solid black";
		document.getElementsByTagName('td')[3].style.background="lightGray";
		document.getElementsByTagName('td')[4].style.border="2px solid black";
		document.getElementsByTagName('td')[4].style.background="lightGray";
	}
	
	if( (dia==6)|| (dia==0)){//finde
		
	
		document.getElementsByTagName('td')[1].style.border="2px solid black";
		document.getElementsByTagName('td')[1].style.background="lightGray";
		document.getElementsByTagName('td')[2].style.border="2px solid black";
		document.getElementsByTagName('td')[2].style.background="lightGray";
		document.getElementsByTagName('td')[3].style.border="2px solid black";
		document.getElementsByTagName('td')[3].style.background="lightGray";
		document.getElementsByTagName('td')[4].style.border="2px solid black";
		document.getElementsByTagName('td')[4].style.background="lightGray";
		document.getElementsByTagName('td')[5].style.border="2px solid black";
		document.getElementsByTagName('td')[5].style.background="lightGray";
	}
	
	
	
	
	
	
	
	
	
	
	
	}
window.onload = function() {
				setInterval(muestraReloj, 1000);
				setInterval(muestraDia,1000);
}
			
			
			
			
