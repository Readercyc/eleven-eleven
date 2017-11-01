/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-10-27 23:42:23
 * @version $Id$
 */

var page = $(".page");
var height = parseInt($(".white-border").css('height'))
console.log(height);
var page_top = (height-408)/2;
console.log(page_top);
$("#test").css("top",page_top);
$(window).resize(function(){
	var height = parseInt($(".white-border").css('height'))
	var page_top = (height-408)/2;
	$("#test").css("top",page_top);
})
$("td").click(function(e) {
	var that = $(this);
	console.log(that);
	console.log(e);
	$(".white-border").animate({
		width:'95%',
		height:'95%',
		top:'2.5%',
		left:'2.5%',
		
	},100);
	$(".white-border").animate({
		width:'90%',
		height:'90%',
		top:'5%',
		left:'5%',
	},100)
	$(".page").animate({
		top:'-=91.5%',
	},500);
})
