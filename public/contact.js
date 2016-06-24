function formclock() {
	var d = new Date()
	var hours = d.getHours()
	var min = d.getMinutes()
	var sec = d.getSeconds()


	function setTColor() {
			var formsub = document.getElementById("formsubmit");
			var formmonocolors=["white", "black"]
			//6:00am-5:59pm WHITE SUBMIT BACKGROUND AT DAYTIME
			if(hours > 5 && hours < 18) {        
				formsub.style.color=formmonocolors[1] 
				formsub.style.backgroundColor=formmonocolors[0] 
			//6:00pm-5:59am BLACK SUBMIT BACKGROUND AT NIGHT	
			} else if(hours >= 18 && hours <= 5 ) {   
				formsub.style.color=formmonocolors[0]
				formsub.style.backgroundColor=formmonocolors[1] 
			}
	}
	setTColor()
}
setInterval(formclock, 100)
formclock()


//BLINKING SUBMIT
// if(sec % 2 == 1) {
// 				formsub.style.color=formmonocolors[1] 
// 				formsub.style.backgroundColor=formmonocolors[0] 
// 			} else if(sec % 2 == 0) {
// 				formsub.style.color=formmonocolors[0]
// 				formsub.style.backgroundColor=formmonocolors[1] 
// 			}

