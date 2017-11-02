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
var flag=0;
$("#test").css("top",page_top);
$(window).resize(function(){
	var height = parseInt($(".white-border").css('height'))
	var page_top = (height-408)/2;
	$("#test").css("top",page_top);
})
$(".button").click(function(){
	$(".index").fadeOut()
	$(".question").fadeIn()
})
$("td").click(function(e) {
	flag ++
	console.log(flag)
	var that = $(this);
	console.log(that);
	console.log(e);
	$(".white-border").animate({
		width:'85%',
		height:'85%',
		top:'7.5%',
		left:'7.5%',
		
	},100);
	$(".white-border").animate({
		width:'80%',
		height:'80%',
		top:'10%',
		left:'10%',
	},100)
	$(".page").animate({
		top:'-=100%',
	},500);
	if(flag==5)
	{
		$(".page").animate({
		top:'-=1%',
		},3000);
		$(".page").animate({
		top:'-=99%',
		},500);
	}

})


