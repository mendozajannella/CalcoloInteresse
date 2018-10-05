function calcolo(){
	var C = document.forms.crt.C.value;
	var r = document.forms.crt.r.value;
	var T = document.forms.crt.T.value;
	var U = document.forms.crt.U.value;
	var I;
	
	if(U=0){ document.getElementById("risultato").innerHTML="Errore";
		
	}
	else if(U=1){
		var d =36500;
		}
	else if(U=2){
		var d =1200;
		}
	else if(U=3){
		var d =100;
		}
	I = (C+r+T)/d;
	
	document.getElementById("risultato").innerHTML="interesse" I + "€";
}
function annulla(){
	document.getElementById("risultato").innerHTML="";
}
