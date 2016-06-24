function formclock() {
	var d = new Date()
	var hours = d.getHours()
	var min = d.getMinutes()
	var sec = d.getSeconds()
	var milli = d.getMilliseconds()

	function setTColor() {
			var formsub = document.getElementById("formsubmit");
			var formmonocolors=["white", "black"]
			if(sec % 2 == 1) {
				formsub.style.color=formmonocolors[0] 
			} else if(sec % 2 == 0) {
				formsub.style.color=formmonocolors[1] 
			}
	}
	setTColor()
}
setInterval(formclock, 1)
formclock()




