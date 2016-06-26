$(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});

	$('#movedown').click(function() {
        $('#side_menu').slideToggle("slow");
    }); 

});

// -----------------------Index Page --------------------
// Text Changes and color change according to the words
var textArry = [".passion", ".joy", ".people", ".design", ".confidence"]
var texttt = document.getElementById("textChanged")
var index = 1

function textChange() {
	console.log(texttt)
	if (index > 4) {
		colorChange = texttt.innerText = textArry[0]
		index = 0
	} else if (index != 0) {
		colorChange = texttt.innerText = textArry[index]
		index = index + 1
	} else if (index == 0) {
		colorChange = texttt.innerText = textArry[1]
		index = 2
	}

	if (colorChange == ".passion") {
		texttt.style.color = "red"
	} else if (colorChange == ".joy") {
		texttt.style.color = "mediumpurple"
	} else if (colorChange == ".people") {
		texttt.style.color = "green"
	} else if (colorChange == ".design") {
		texttt.style.color = "#f7da0b" 
	} else if (colorChange == ".confidence") {
		texttt.style.color = "blue"
	}
}
setInterval(textChange,3000)

// Modals  -----------Not working why!!!!!!!!!!! T_T

// var port_img = document.getElementById("port_imgs")
// var anchor = document.getElementsByClassName("anchor") 
// var bodyDiv = document.getElementsByTagName("body")[0]
// var image = document.getElementsByTagName("img")
// var imgUrl = port_img.getAttribute("data-imgurl")

// port_img.onclick= function() {
//   var imgModal = bodyDiv.innerHTML = "<div class='overlay'><img src='"+ imgUrl +"'></div>"
//   console.log(imgModal)
// }