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


// $(document).ready(function() {
// 	$(".main_img").click(function(event) {
// 		var imgUrl = $("event.target").data("imgurl")
// 		$("body").append("<div class='overlay'> <img src='"+ imgUrl +"'> </div>")
// 	}) 

// 	$("body").on("click", "img", function(event) { //why ("body")??
// 		$(event.target).hide()
// 		$(event.target).closest(".overlay").hide()
// 	})
// })








