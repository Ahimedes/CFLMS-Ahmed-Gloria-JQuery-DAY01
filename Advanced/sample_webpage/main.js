$(document).ready(function(){

$("body [href]").attr("href", "https://www.codefactory.wien");

$("code").css("color", "red");

$("ol > li").css("background-color", "#2a7b90");

$(":input").attr("placeholder", "Express your opinion");

$("img").attr("src", "https://codefactory.wien/wp-content/themes/hestia/cf-images/big-jpg/1-frontend.jpg");

$("blockquote").css({ "background-color": "orange", "font-style":  "italic" });

$("#logo").css("color", "black");

$("#logo > span").css("color", "white");

$(".date").remove();

$("#sidebar > ul:first-of-type").append("<li><a href=\"http://all-free-download.com/free-website-templates/\"><span>New Templates</span></a></li> <li><a href=\"http://all-free-download.com/free-website-templates/\"><span>Order Template</span></a></li> <li><a href=\"http://all-free-download.com/free-website-templates/\"><span>Contact Us</span></a></li>");

$("p:contains('Be not afraid')").text("\"When someone says: 'I want a programming language in which I need only to say what I wish, and done', give him a lollipop.\"")
});