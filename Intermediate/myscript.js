$("form").submit(function(e) {

	e.preventDefault();
	
});


//$("#myform").remove();


var adddiv = `<div></div><div></div><div></div><div></div><div></div>`

$("article").prepend(adddiv);

$("#msg").val("Search for...");

$("div").addClass("box");

$("a").attr("href", "www.codefactory.wien");

