$(function(){
	$(".button-collapse").sideNav({
		closeOnClick: true
	});
	$("#subject").change(function(){
		//load TEXT.html or do something, parsing something
		alert("clicked");
	});
	$("#about").click(function(){
		Materialize.toast("contact: steve", 2500);
	});
  
	document.getElementById("loading-row").remove()
});