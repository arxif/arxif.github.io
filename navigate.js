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
	$("#changelog").click(function(){
		Materialize.toast("02.08.16: +sejarah, +bio", 2500);
	})
});