//Variáveis
var capture = ""

//Retorna Para o Início
function home(){
	document.getElementById("image").src="images/ceuma-mapa-0.png";
}

//Show Modal
function Btn(){
	changeColorT = document.getElementById("myModal").style.display = "block";
}

//Show Modal 1
function Btn1(){
	changeColorSl = document.getElementById("myModal-1").style.display = "block";	
}

//Show Modal 2
function Btn2(){
	document.getElementById("myModal-2").style.display = "block";
}

//Close Modal 1
function Span(){
	var modal = document.getElementById("myModal");
	document.getElementsByClassName("close")[0];
	modal.style.display = "none";
}

//Close Modal 2
function Span1(){
	var modal = document.getElementById("myModal-1");
	document.getElementsByClassName("close")[0];
	modal.style.display = "none";
}

//Close Modal 3
function Span2(){
	var modal = document.getElementById("myModal-2");
	document.getElementsByClassName("close")[0];
	modal.style.display = "none";
}
//----------Calls-----------

//Mostra Direção da Central
function callCentral(){
	document.getElementById("sl").style.background = "#091a5e";
	document.getElementById("sl").style.color = "#fff";

	document.getElementById("image").src = "images/ceuma-mapa-1.png";
	document.getElementById("t").style.background = "#fff";
	document.getElementById("t").style.color = "#091a5e";
	closeBox();
	showImage();
}

//Mostra Direção dos Banheiros
function callBanheiros(){
	document.getElementById("image").src = "images/ceuma-mapa-2.png";
	closeBox();
	showImage();
}

function callSalaProf(){
	document.getElementById("t").style.background = "#091a5e";
	document.getElementById("t").style.color = "#fff";

	document.getElementById("image").src = "images/mapa-sobreloja.png";
	document.getElementById("sl").style.background = "#fff";
	document.getElementById("sl").style.color = "#091a5e";
	closeBox();
	showImage();
} 

//Show Images
function showImage(){
	document.getElementById("image").style.display = "block";
}

//Fecha Caixa de Informação
function closeBox(){
	var modal = document.getElementById("myModal");
	modal.style.display = "none";
	
	var modal = document.getElementById("myModal-1");
	modal.style.display = "none";

	var modal = document.getElementById("myModal-2");
	modal.style.display = "none";
}

//Pular Caixa de Texto

function EnterTab(InputId,Evento){
	if(Evento.keyCode == 13){
		document.getElementById(InputId).focus();
	}
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	var modal  = document.getElementById("myModal");
	var modal1 = document.getElementById("myModal-1");
	var modal2 = document.getElementById("myModal-2");
	
	if (event.target == modal) {
		modal.style.display = "none";
	}else{
		if (event.target == modal1) {
			modal1.style.display = "none";
		} else {
			if (event.target == modal2) {
				modal2.style.display = "none";
			}
		}
	}
}

//Horario de Funcionamento
function startTime() {
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	m = checkTime(m);
	s = checkTime(s);
	//document.getElementById("txt").innerHTML =
	//h + ":" + m + ":" + s;
	var t = setTimeout(startTime, 500);

	funcionamento();
}

function checkTime(i) {
	if (i < 10) {
		i = "0" + i;
	}  // add zero in front of numbers < 10
	
	return i;
}

function funcionamento(){
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	
	if (h < 8 || h >17) {
		document.getElementById("current-time").innerHTML = "Fechado";
		document.getElementById("current-time").style.color = "#b01a1a";

	}else{
		document.getElementById("current-time").innerHTML = "Aberto";
		document.getElementById("current-time").style.color = "#36b01a";
	}
}
//Fim Horário de Funcionamento

//Captura as Informações da Busca
function Capture(){
	capture = document.getElementById("txtBusca").value;
	console.log(capture);

	if (capture == "" || capture == null) {
		alert("Informe um local!");
		return false;
	}

	if (capture == "banheiros - Terreo"  || capture == "banheiros" || capture == "banheiro") {
		Btn1();
		document.getElementById('txtBusca').value='';
	}

	if (capture == "banheiros - Andar I") {
		Btn1();
		document.getElementById('txtBusca').value='';
	}

	if (capture ==  "central de atendimento - Terreo" || capture == "central") {
		Btn();
		document.getElementById('txtBusca').value='';
	}

	if (capture ==  "sala dos professores - Sobreloja" || capture == "professores" || capture == "sala professores" || capture == "professor") {
		Btn2();
		document.getElementById('txtBusca').value='';
	}
}

// Alerta de descrição
function alertaDesc(){
	alert("Este é o meu trabalho de TCC. Um sistema de Localização Indoor.\n\nAs palavras-chave para testar são: central, professor(es) e banheiro(s). É só digitar aqui na sua direita ou abaixo desde aviso.\n\nA proposta desse trabalho é que com um código QR é possível chamar este webservice para ajudar alunos e visitantes a localizarem-se dentro do campus universitário.\n\nEsta é a maneira mais fácil de testar e validar essa ideia, então obrigado por contribuir! ;)")

	startTime()
}