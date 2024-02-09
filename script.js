const form = document.querySelector("form");
const model = document.querySelector(".model");
const gridContainer = document.querySelector(".grid-container");
const message = document.querySelector(".message");
let turn = true;
let player = ["player-1" , "player-2"];

form.addEventListener("submit" ,getForm);
function getForm(e){
	e.preventDefault();
	toggleForm();
	player = [form.p1.value , form.p2.value];
	form.reset();
	createCellGrid();
	toggleModel();
}
function toggleForm(){
	form.classList.toggle("hide");
	form.classList.toggle("show");
}
function toggleModel(){
	model.classList.toggle("hide");
	model.classList.toggle("show");
}
function createCellGrid(){
	for(let i=1 ; i<=9 ; i++){
		let cell = document.createElement("div");
		cell.className = "grid";
		cell.id = i;
		cell.addEventListener("click" ,addingText);
		gridContainer.append(cell);
	}
	message.textContent = `${player[0]}, you're up`;	
}
function addingText(e){
	if(!e.target.textContent){
		if(turn){
			message.textContent = `${player[1]}, you're up`;
			e.target.textContent = `O`;
		}else{
			message.textContent = `${player[0]}, you're up`;
			e.target.textContent = `X`;
		}
		turn = !turn;
	}
}