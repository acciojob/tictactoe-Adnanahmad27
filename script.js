//your JS code here. If required.
const form = document.querySelector("form");
function toggleForm(){
	form.classLList.toggle("hide");
	form.classLList.toggle("show");
}
function getForm(e){
	e.preventDefault();
	toggleForm();
}
form.addEventListener("submit" , getForm );