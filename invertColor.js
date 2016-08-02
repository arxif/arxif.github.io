var i = 0;
	lastBGColor = null;
	lastFontColor = null;

function invertColor(){
	if (i == 0) {
		lastBGColor = document.body.style.backgroundColor;
		lastFontColor = document.body.style.color;
		setBGandColor("#616161", "#FFFFFF");
		i = 1;
	} else {
		setBGandColor(lastBGColor, lastFontColor);
		i = 0;
	}
};

function setBGandColor(backgroundColor, txtColor) {
	document.body.style.backgroundColor = backgroundColor;
	document.body.style.color = txtColor;
}