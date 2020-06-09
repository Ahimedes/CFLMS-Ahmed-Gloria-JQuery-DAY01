$(document).ready(function(){

var ourMembers = JSON.parse(members);

console.log(ourMembers);

for(let i = 0; i < ourMembers.length; i++) {
	$("body").append("<div id=\"member" + [i] + "\"></div>")

	$("#member"+ [i]).append("<img src=\"" + ourMembers[i].image + "\"><br>" + ourMembers[i].name + "<br>" + ourMembers[i].relation + "<br><hr>")
 
 if (ourMembers[i].relation == "Friend") {
	$("#member"+ [i]).css("background-color","yellow")
 } 
 else if (ourMembers[i].relation == "Brother" || ourMembers[i].relation =="Sister" ){
 	$("#member"+ [i]).css("background-color","pink")
 	}
}

$("body > div").addClass("people");

$("div > img").addClass("peopleimg").css("width", "150px")
});