function formclock() {
	var d = new Date()
	var sec = d.getSeconds()


	function setTColor() {
			var formsub = document.getElementById("formsubmit");
			var formmonocolors=["white", "black"]
			// BLINKING SUBMIT
			if(sec % 2 == 1) {
				formsub.style.color=formmonocolors[1] 
				formsub.style.backgroundColor=formmonocolors[0] 
			} else if(sec % 2 == 0) {
				formsub.style.color=formmonocolors[0]
				formsub.style.backgroundColor=formmonocolors[1] 
			}
	}
	setTColor()
}
setInterval(formclock, 100)
formclock()


//when clicking submit, it validates
document.getElementById("formsubmit").onclick = function validate() {
		//checks to see if email has an '@' symbol 
		var Eform = document.getElementById('formemail').value
		if (Eform.indexOf('@') == -1) {
	      alert("Please provide a valid email.");
	      return false; //forces to stay on page
		}
		//checks to see that text isn't blank
		var Bform = document.getElementById('formbody').value
		if (Bform==null || Bform=="") {
	      alert("Please fill out text form.");
	      return false;
	    }
	
}


// 			//6:00am-5:59pm WHITE SUBMIT BACKGROUND AT DAYTIME
// 			if(hours > 5 && hours < 18) {        
// 				formsub.style.color=formmonocolors[1] 
// 				formsub.style.backgroundColor=formmonocolors[0] 
// 			//6:00pm-5:59am BLACK SUBMIT BACKGROUND AT NIGHT	
// 			} else if(hours >= 18 && hours <= 5 ) {   
// 				formsub.style.color=formmonocolors[0]
// 				formsub.style.backgroundColor=formmonocolors[1] 
// 			}
