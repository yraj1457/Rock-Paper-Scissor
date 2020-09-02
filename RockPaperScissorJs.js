

var rock = document.getElementById("Rock");



rock.addEventListener('click', rockfunc);

function rockfunc(){
	
	var arr = ["Rock", "Paper", "Scissor"];
    var comp1 = arr[Math.floor(Math.random() * arr.length)];
	
	if(comp1 === "Rock"){
		var choose = "Opponent: Rock";
		document.querySelector('.disp2').textContent = choose;
		var res1 = "Damn, it's a tie";
		document.querySelector('.display').innerHTML = res1;
	}
	
	else if(comp1 === "Scissor"){
		var choose = "Opponent: Scissor";
		document.querySelector('.disp2').textContent = choose;
		var res2 = "Wo Hoo, you win !!";
		document.querySelector('.display').innerHTML = res2;
	}
	
	else{
		var choose = "Opponent: Paper";
		document.querySelector('.disp2').textContent = choose;
		var res3 ="Alas, you lost !!" ;
		document.querySelector('.display').innerHTML = res3;
	}
	
	
}

var paper = document.getElementById("Paper");

paper.addEventListener('click', paperfunc);

function paperfunc(){
	
	var arr = ["Rock", "Paper", "Scissor"];
    var comp1 = arr[Math.floor(Math.random() * arr.length)];
	
	if(comp1 === "Rock"){
		var choose = "Opponent: Rock";
		document.querySelector('.disp2').textContent = choose;
		var res1 = "Paper kills !!";
		document.querySelector('.display').innerHTML = res1;
	}
	
	else if(comp1 === "Scissor"){
		var choose = "Opponent: Scissor";
		document.querySelector('.disp2').textContent = choose;
		var res2 = "Oouch, lost !!";
		document.querySelector('.display').innerHTML = res2;
	}
	
	else{
		var choose = "Opponent: Paper";
		document.querySelector('.disp2').textContent = choose;
		var res3 ="That was close" ;
		document.querySelector('.display').innerHTML = res3;
	}
	
	
}

var scissor = document.getElementById("Scissor");
scissor.addEventListener('click', scissorfunc);

function scissorfunc(){
	
	var arr = ["Rock", "Paper", "Scissor"];
    var comp1 = arr[Math.floor(Math.random() * arr.length)];
	
	if(comp1 === "Rock"){
		var choose = "Opponent: Rock";
		document.querySelector('.disp2').textContent = choose;
		var res1 = "Shoot, hard luck !!";
		document.querySelector('.display').innerHTML = res1;
	}
	
	else if(comp1 === "Scissor"){
		var choose = "Opponent: Scissor";
		document.querySelector('.disp2').textContent = choose;
		var res2 = "Close call !!";
		document.querySelector('.display').innerHTML = res2;
	}
	
	else{
		var choose = "Opponent: Paper";
		document.querySelector('.disp2').textContent = choose;
		var res3 ="Cheers winner !!" ;
		document.querySelector('.display').innerHTML = res3;
	}
	
	
}

var ta = document.querySelector('#tagain');

ta.addEventListener('click', clear);

function clear(){
	
	
	document.querySelector('.display').innerHTML = ' ';
	
	document.querySelector('.disp2').innerHTML = ' ';
	
}

