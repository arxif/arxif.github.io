// TODO:
// Dynamic navigation bar filling
// Dynamic section filling

window.onload = function(){
	//nightmode
	var now = new Date();
	var hour = now.getHours();
	
	if (hour >= 19 && hour <= 23)
		setBGandColor("#616161", "black");
	
	//populate collection
	var sectionDiv = document.getElementById("sections");
		secs	= ["PPKn", "Kimia", "Sejarah", "Agama", "Inggris", "Ekonomi", "Biologi"];
		//I have no time to pull off the automation. JS sucks.
		//"OHMYGOD U BLAME THE LANGUAGE WHEN U JUST SUCK" shut up. learn Lisp then you can blame me however you wanted to.
		files = [["-,#"], //PPKN
		["-,#"], //KIMIA
		["Pengaruh Eropa,Pengaruh Eropa.pptx"], //SEJARAH
		["-,#"], //AGAMA
		["-,#"], //INGGRIS
		["-,#"], //EKONOMI
		["Sel,sel.pptx"] //BIOLOGI
		]
		
		collapSubDiv = document.getElementById("collapSub");
		
	secs.forEach(function(section) {
		// add section with id="subject"
		var subLi = document.createElement("li");
			
			subDivH = document.createElement("div");
			subDivH.className = "collapsible-header";
			subDivH.innerHTML = section;
			
			subDivB = document.createElement("div");
			subDivB.className = "collapsible-body";
			
			subContain = document.createElement("div");
			subContain.id = "subject";
			subContain.className = "collection";
			
			//iterate in subject.txt document name,downloadlink
			
			c = files[secs.indexOf(section)]
			c.forEach(function(dls) {
				mat = dls.split(",")
				var list = document.createElement("a");
					list.setAttribute("href", "sub/" + section + "/" + mat[1]);
					list.className = "collection-item";
					list.innerHTML = mat[0];
				subContain.appendChild(list);
			})
		subDivB.appendChild(subContain)
		subLi.appendChild(subDivH);
		subLi.appendChild(subDivB);
		collapSubDiv.appendChild(subLi);
	});
};

function setBGandColor(backgroundColor, txtColor) {
	document.body.style.backgroundColor = backgroundColor;
	document.body.style.color = txtColor;
}