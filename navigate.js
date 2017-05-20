var tg = 1
$(function(){
  $("#collapSubOne").hide();
  $("#collapSubTwo").show();
	
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
  $("#semester").click(function(){
    if (tg == 1) {
      $("#collapSubOne").fadeToggle('fast','swing',
      $("#collapSubTwo").fadeToggle());
      } else {
      $("#collapSubTwo").fadeToggle('fast','swing',
      $("#collapSubOne").fadeToggle());
    }
  });
  
	document.getElementById("loading-row").remove()
});