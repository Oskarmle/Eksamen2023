window.onscroll = function() {myFunction()};
let header = document.getElementById("masthead");

function myFunction(){
	if (window.pageYOffset){
		header.style.position = "fixed"
		header.style.width = "100%"
	} else header.style.position = "relative"
}