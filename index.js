/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-10-27 23:42:23
 * @version $Id$
 */
//预加载
var images = [
	'./img/button.jpg',
    './img/cat.png',
    './img/dog.png',
    './img/cat_ask.png',
    './img/color.png',
    './img/dog_ask.png',
    './img/dog_bg.jpg',
    './img/dq.png',
    './img/analyze.png',
    './img/loading.png',
    './img/tmail.png',
]
function Preload(n) {
    var loadingImg = new Image()
    loadingImg.src = images[n]
    loadingImg.onload = function () {
        n++

        if (n <= images.length) {
            Preload(n)
            ShowProgress( n / images.length * 100 )
            $(".loading_value").css("background-size",n / images.length * 100+"%" + " 100%")
        }
    }
}
function ShowProgress(progress) {

    $('.loading_value').text("京东，天猫即将抵达二手街...")
    if(progress == 100)
    {
       
    	$('.loading_value').text("前往打斗现场！");
    	
    	$('.preload').fadeOut();
    }
}
Preload(0)
/*预加载结束*/

/*动效开始*/
var page = $(".page");
var height = parseInt($(".white-border").css('height'))
console.log(height);
var page_top = (height-408)/2;
console.log(page_top);
var flag=0;
var judge_string = "";
/*$("#test").css("top",page_top);*/
/*$(window).resize(function(){
	var height = parseInt($(".white-border").css('height'))
	var page_top = (height-408)/2;
	$("#test").css("top",page_top);
})*/
$(".button").click(function(){
	clearInterval(int);
	$(".sky").css("z-index","1");
	$(".index").hide()
	$(".question").fadeIn()
	$(".white-border").fadeIn()


})
$("td").click(function(e) {
	flag ++
	/*var select_second = $(this)[0].innerHTML;
	var third_second = $(this)[0].innerHTML;*/
	if(flag == 2)
	{
		judge_string = ($(this)[0].innerHTML)[0];
	}
	if(flag == 3)
	{
		judge_string = judge_string + ($(this)[0].innerHTML)[0];
		console.log(judge_string);
		judge(judge_string);
	}
	$("#test").css("z-index",0);
	$(".white-border").animate({
		width:'85%',
		height:'85%',
		top:'12.5%',
		left:'7.5%',
		
	},100);
	$(".white-border").animate({
		width:'80%',
		height:'80%',
		top:'15%',
		left:'10%',
	},100)
	$(".page").animate({
		top:'-=100%',

	},500);
	$("#test").css("z-index",2);
	if(flag==5)
	{
		$(".sky").fadeOut();
		$(".question").hide();
		$(".white-border").hide();
		$(".loading").fadeIn()
		$("#comment").fadeIn()
		console.log(product[result-1])
		$("#product").html(product[result-1]);
		$("#why").html(comment[result-1]);
		$(".loading").animate({
			top:"-=0.1%"
		},5000);
		$(".loading").animate({
			top:"-=100%"
		},1000);
		$("#comment").animate({
			opacity:"+=0.1"
		},5000);
		$("#comment").animate({
			opacity:"+=0.9"
		},3000);
		if(time%2 == 0)
		{
			$("body").css("background-image","url('./img/cat_bg.jpg')");

		}
		else
		{
			$("body").css("background-image","url('./img/dog_bg.jpg')");
			$(".maincontent").css("color","white");
			$("#comment").css("color","white");
			$("#product").css("color","white");
			$("#why").css("color","white");
		}


	}

})

//动效结束
//
//测评开始
var product = new Array();
var answer;
var result;
//测评内容
product[1] = "防脱发洗发水<br/>Kindle<br/>风油精<br/>极简风文具"
product[2] = "创意星空投影灯<br/>包子充电暖手宝<br/>亚克力变色杯<br/>趣蛋加湿器"
product[3] = "火山石苔藓微景观盆栽<br/>合金创意茶垫<br/>黑陶禅风茶具套组<br/>混凝土简约台钟"
product[4] = "空心龙凤手工雪花足银筷<br/>野外露营帐篷<br/>富士拍立得<br/>《寻路中国》"
product[5] = "可爱动物连体睡衣<br/>暖手捂<br/>USB充电暖手宝<br/>鞋面防水喷雾剂"
product[6] = "木质拼图<br/>立体手工<br/>制作模型鲁班<br/>锁九连环"
product[7] = "迷你手机麦克风<br/>电动平衡车<br/>烹饪小锅<br/>瑜伽垫"
product[8] = "网易春风系列情趣用品<br/>五星级酒店套房房卡<br/>Jo Malone蜡烛<br/>82年拉菲"
product[9] = "cherry机械键盘<br/>罗技竞技耳机<br/>雷蛇电竞鼠标<br/>Surfacebook2"
product[0] = "Oral-B电动牙刷<br/>小米AI音响<br/>华为体脂秤<br/>自能扫地机"

var comment = new Array();
comment[1] = "身为学霸的你总是在深夜里学习，你需要神器风油精来帮你驱赶袭来的睡意。熬夜所引发的脱发危机使你担忧，所以防脱发洗发水绝对是你的不二选择。当然学习效率的提高也少不了与你学霸气质相符的性冷淡风文具，还有像kindle这种可以帮你随时补充精神电量宝贝也可以考虑入手一台啦~"
comment[2] = "人人都有公主梦！想象一下，在一个漆黑的寒冬夜晚，你躺在柔软的床上，抬眼望着充满浪漫气息的星空海洋，手上握有外型可爱的包子充电暖手宝，你的心情随着放在桌边的亚克力变色杯的色彩而变化，置在房间里的趣蛋加湿器使空气中弥漫着微香的气息。这，就是你少女心公主梦的爆发！"
comment[3] = "你拥有隐藏的暗黑系属性，看过生活的阴暗面。但不论是火山石，凝土还是合金、黑陶，这些都是看起来冷冰冰的东西，毫无生机，但当我们用双手去挖掘他们的内涵，给予它们新的生命时，一切都变得富有生机与活力了。再灰暗的事物，只要你舍得用心去呵护，同样也会大放异彩，何况你的生活呢？"
comment[4] = "放荡不羁爱自由的你，肯定会在最适合旅游的秋天来场说走就走的旅行。旅行最重要的一个核心当然就是吃吃吃了，而一套具有民族风的筷子则会给你带来许多便利；若是想去野外探险，那露营帐篷是你的必备品；拍立得是很多人想要的，它的立即出片让其成为一个很棒的选择。至于火车上的漫漫时光，那就来本书解闷吧～"
comment[5] = "搞怪，可爱，懒癌患者说的就是你。可是寒冷的冬天，也要萌萌哒。穿上怪兽连体睡衣，可爱又暖和；冬天玩手机既要风度又要温度，拿着小巧的暖手充电宝，既不用担心手会被妖风“恐吓”，又不用担心不方便携带。在南方总是阴雨绵绵的冬天里，你的小白鞋还好吗？别担心！喷上防水喷雾，再大的雨我也不怕不怕啦～"
comment[6] = "你经常思考，善于发现问题，拥有一颗IQ爆表非常灵活的大脑，同时也拥有超强的动手能力以及一颗耐得住寂寞的心。双十一来临，当其他人还幻想着能够在此之前脱单，而你，早已准备好了自己的装备....在安静的寝室，一个人捧着那么多块拼图手工模型也是很有安全感了。"
comment[7] = "迷你麦克风嗨爆你的大学生活，让电动平衡车抢回被浪费的大学时间，让万能小锅烹饪出温馨的大学宿舍，让简易瑜伽垫点燃起潜在的运动细胞。大学就是要有自己的freestyle，就是要燃起来！双十一到了，正是你将这些纳入囊中的最好时机，你还在等什么呢？"
comment[8] = "拥抱爱情的你，从来都不想与光棍节有任何联系。82年的拉菲和Jo Malone蜡烛营造出的氛围，是情与爱纠缠最好的温床。那种朦胧又美好的感受就像春风在耳边的呢喃细语，而Ta就是你最好的礼物。"
comment[9] = "“双十一”战场血雨腥风，你作为被选召的一员，手握雷蛇电竞鼠标，耳戴罗技竞技耳机，背靠cherry机械键盘，拿起Surfacebook2，既可以在召唤师峡谷当一名carry全场，拯救世界的英雄，也可以历经枪林弹雨后体会到大吉大利，今晚吃鸡的快感，keep your dream and never give up！"
comment[0] = "你可能早已厌倦了千篇一律的牙刷、扫把、音箱、电子秤吧？但科技让这一切重新变得有趣。无论是可以智能控速、控时、指导刷牙的Oral-B电动牙刷，解放生产力的智能扫地机，可以讲故事当闹钟做助理的小米AI音箱，还是能一键得出体脂率等健康数据的体脂秤。热爱科技的你一定不会想要错过，就让你身边的杂货也变得聪明起来吧！"
/*var c[10] = {"防脱发洗发水<br/>Kindle<br/>风油精<br/>极简风文具"，"创意星空投影灯<br/>包子充电暖手宝<br/>亚克力变色杯<br/>趣蛋加湿器"，"火山石苔藓微景观盆栽<br/>合金创意茶垫<br/>黑陶禅风茶具套组<br/>混凝土简约台钟"，"空心龙凤手工雪花足银筷<br/>野外露营帐篷<br/>富士拍立得<br/>《寻路中国》"，"可爱动物连体睡衣<br/>暖手捂<br/>USB充电暖手宝<br/>鞋面防水喷雾剂"，"木质拼图<br/>立体手工<br/>制作模型鲁班<br/>锁九连环"，"迷你手机麦克风<br/>电动平衡车<br/>烹饪小锅<br/>瑜伽垫"，"网易春风系列情趣用品，五星级酒店套房房卡<br/>Jo Malone蜡烛<br/>82年拉菲"，"cherry鼠标键盘<br/>雷蛇电竞鼠标<br/>罗技竞技耳机<br/>Surfacebook2"}*/
//测评判断
function judge(e){
	switch(e)
	{
		case "AA":
			var math = new Array(1,2,8);
			answer =  rnd(0,2)
			result = math[answer];
			console.log(answer);
			console.log(math[answer]);
			break;
		case "AB":
			var math = new Array(4,7,10);
			answer =  rnd(0,2)
			result = math[answer];
			console.log(answer);
			console.log(math[answer]);
			break;
		case "AC":
			var math = new Array(3,5,6,8);
			answer =  rnd(0,3)
			result = math[answer];
			console.log(answer);
			console.log(math[answer]);
			break;
		case "AD":
			var math = new Array(4,5,7);
			answer =  rnd(0,2)
			result = math[answer];
			console.log(answer);
			console.log(math[answer]);
			break;
		case "AE":
			var math = new Array(1,2,3,4,5,6,7,8);
			answer =  rnd(0,7)
			result = math[answer];
			console.log(answer);
			console.log(math[answer]);
			break;
		case "BA":
			var math = new Array(1,3,8,9);
			answer =  rnd(0,3)
			result = math[answer];
			console.log(answer);
			console.log(math[answer]);
			break;
		case "BB":
			var math = new Array(4,9,10);
			answer =  rnd(0,2)
			result = math[answer];
			console.log(answer);
			console.log(math[answer]);
			break;
		case "BC":
			var math = new Array(3,6,8,9);
			answer =  rnd(0,3)
			result = math[answer];
			console.log(answer);
			console.log(math[answer]);
			break;
		case "BD":
			var math = new Array(4,9);
			answer =  rnd(0,1)
			result = math[answer];
			console.log(answer);
			console.log(math[answer]);
			break;
		case "BE":
			var math = new Array(3,9);
			answer =  rnd(0,1)
			result = math[answer];
			console.log(answer);
			console.log(math[answer]);
			break;
		case "CA":
			var math = new Array(1,4,8,9);
			answer =  rnd(0,3)
			result = math[answer];
			console.log(answer);
			console.log(math[answer]);
			break;
		case "CB":
			var math = new Array(4,9,10);
			answer =  rnd(0,2)
			result = math[answer];
			console.log(answer);
			console.log(math[answer]);
			break;
		case "CC":
			var math = new Array(3,6,8,9);
			answer =  rnd(0,3)
			result = math[answer];
			console.log(answer);
			console.log(math[answer]);
			break;
		case "CD":
			var math = new Array(4,5,9);
			answer =  rnd(0,2)
			result = math[answer];
			console.log(answer);
			console.log(math[answer]);
			break;
		case "CE":
			var math = new Array(6,9);
			answer =  rnd(0,1)
			result = math[answer];
			console.log(answer);
			console.log(math[answer]);
			break;
		case "DA":
			var math = new Array(1,2);
			answer =  rnd(0,1)
			result = math[answer];
			console.log(answer);
			console.log(math[answer]);
			break;
		case "DB":
			var math = new Array(4,10);
			answer =  rnd(0,1)
			result = math[answer];
			console.log(answer);
			console.log(math[answer]);
			break;
		case "DC":
			var math = new Array(6,7);
			answer =  rnd(0,1)
			result = math[answer];
			console.log(answer);
			console.log(math[answer]);
			break;
		case "DD":
			var math = new Array(4,7);
			answer =  rnd(0,1)
			result = math[answer];
			console.log(answer);
			console.log(math[answer]);
			break;
		case "DE":
			var math = new Array(1,2,4,5,6,7);
			answer =  rnd(0,5)
			result = math[answer];
			console.log(answer);
			console.log(math[answer]);
			break;
		default:
			result = 1;

	}
	console.log(result);
}

 function rnd(n, m){
        var random = Math.floor(Math.random()*(m-n+1)+n);
        return random;
    }

//测评渲染

var time=0;
if(time%2==0)
	{
		$("html").css("background-color","#8d99ad")
		$("body").css("background-color","#8d99ad")
		$(".left").css("background-color","#838ea4")
		$(".right").css("background-color","#7f8ca0")
	}
	else
	{
		$("html").css("background-color","#464440")
		$("body").css("background-color","#464440")
		$(".left").css("background-color","#4a4a4a")
		$(".right").css("background-color","#4d4d4d")
	}
var int = self.setInterval("get_color()",2000)
function get_color(){
	time++;
	console.log(time);
	if(time%2==0)
	{
		$("html").css("background-color","#8d99ad")
		$("body").css("background-color","#8d99ad")
		$(".left").css("background-color","#838ea4")
		$(".right").css("background-color","#7f8ca0")
	
	}
	else
	{
		$("html").css("background-color","#464440")
		$("body").css("background-color","#464440")
		$(".left").css("background-color","#4a4a4a")
		$(".right").css("background-color","#4d4d4d")

	}
}
