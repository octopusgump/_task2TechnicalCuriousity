$(document).ready(function() {

	var audio = new Audio('assets/1-audio.mp3');
	var bg = new Audio('assets/night.mp3');
	bg.addEventListener('ended', function(){
		this.currentTime = 0;
		this.play();
	});
	
	var played = false;
//================cells================
	var bgimg = document.getElementById('bg_img');
	
	//alert(bgimg.naturalHeight);
	var ratio = 3641/675;
	var lastHeight = 0;

	var itemOne = $('#itemone');
	var itemTwo = $('#itemtwo');
	var itemThree = $('#itemthree');
	
	var bubbleOne = $('#bubbleone');
	var bubbleTwo = $('#bubbletwo');
	var bubbleThree = $('#bubblethree');
	
	function pxToFloat(pxVal)
	{
		return parseFloat(pxVal.substr(0, pxVal.indexOf('px')));
	}
	
	var xPosOne = pxToFloat(itemOne.css('left'))/675;
	var yPosOne = pxToFloat(itemOne.css('top'))/675;
	var widthOne = pxToFloat(itemOne.css('width'))/675;

	var xPosTwo = pxToFloat(itemTwo.css('left'))/675;
	var yPosTwo = pxToFloat(itemTwo.css('top'))/675;
	var widthTwo = pxToFloat(itemTwo.css('width'))/675;
	//var heightTwo = 0;
	
	var xPosThree = pxToFloat(itemThree.css('left'))/675;
	var yPosThree = pxToFloat(itemThree.css('top'))/675;
	var widthThree = pxToFloat(itemThree.css('width'))/675;
	//var heightThree = 0;
	
	var xPosOneBubble =  pxToFloat(bubbleOne.css('left'))/675;
	var yPosOneBubble =  pxToFloat(bubbleOne.css('top'))/675;
	var widthOneBubble =  pxToFloat(bubbleOne.css('width'))/675;
	//var heightOneBubble = 0;

	var xPosTwoBubble =  pxToFloat(bubbleTwo.css('left'))/675;
	var yPosTwoBubble =  pxToFloat(bubbleTwo.css('top'))/675;
	var widthTwoBubble =  pxToFloat(bubbleTwo.css('width'))/675;
	//var heightTwoBubble = 0;
	
	var xPosThreeBubble =  pxToFloat(bubbleThree.css('left'))/675;
	var yPosThreeBubble =  pxToFloat(bubbleThree.css('top'))/675;
	var widthThreeBubble =  pxToFloat(bubbleThree.css('width'))/675;
	//var heightThreeBubble = 0;
	
	
	var onResize = function(){
		var width = ratio * document.body.clientHeight;
		$(bgimg).css({'width' : width + 'px'
			,'height' : document.body.clientHeight + 'px'});
		
		itemOne.css({'left': xPosOne * document.body.clientHeight + 'px'
					,'top':yPosOne * document.body.clientHeight + 'px'
					,'width': widthOne * document.body.clientHeight + 'px'
					});
		
		itemTwo.css({'left': xPosTwo * document.body.clientHeight + 'px'
					,'top':yPosTwo * document.body.clientHeight + 'px'
					,'width': widthTwo * document.body.clientHeight + 'px'
					});
	
		itemThree.css({'left': xPosThree * document.body.clientHeight + 'px'
					,'top':yPosThree * document.body.clientHeight + 'px'
					,'width': widthThree * document.body.clientHeight + 'px'
					});

		bubbleOne.css({'left': xPosOneBubble * document.body.clientHeight + 'px'
					,'top':yPosOneBubble * document.body.clientHeight + 'px'
					,'width': widthOneBubble * document.body.clientHeight + 'px'
					});

		bubbleTwo.css({'left': xPosTwoBubble * document.body.clientHeight + 'px'
					,'top':yPosTwoBubble * document.body.clientHeight + 'px'
					,'width': widthTwoBubble * document.body.clientHeight + 'px'
					});
	
		bubbleThree.css({'left': xPosThreeBubble * document.body.clientHeight + 'px'
					,'top':yPosThreeBubble * document.body.clientHeight + 'px'
					,'width': widthThreeBubble * document.body.clientHeight + 'px'
					});
	};
	
	$( window ).resize(onResize);
	
	onResize();
	

$('#show_display_1').on('click touchend', function() {  
	if(played === false)
	{        
		audio.play();
		bg.play();
		played = true;

		$('#display_0').delay(audio.duration * 1000).animate({"opacity": '0'}, 600);
		window.setTimeout(function(){ $('#display_0').remove();}, audio.duration * 1000 + 600); 
		$('#display_1').delay(audio.duration * 1000).animate({"opacity": '1'}, 600); 
		$('#caption_1').attr('src', 'assets/1-caption.gif');
	}

});

$('#show_display_2').on('click touchend', function() {

	$('#display_1').stop();
	$('#display_1').animate({"opacity": '0'}, 500);
	window.setTimeout(function(){$('#display_1').remove()}, 500);
	$('#display_2').css({"opacity" : '1'});
	$('#display_2').delay(2000).animate({"opacity": '0'}, 500);
	window.setTimeout(function(){ $('#display_3').css({'opacity':'1', 'z-index':'0'});$('.overflow_control').css({'overflow-x': 'visible'});  }, 2000);
	window.setTimeout(function(){ $('#display_2').remove();  }, 2500);

});

$('#slider').on('click touchend', function() {
 	$('#slider').css({'opacity':'0'});
	$('#slider').css({'z-index':'0'});
});
$('#display_3').on('click touchend', function() {
 	$('#slider').css({'opacity':'0'});
	$('#slider').css({'z-index':'0'});
});

var click_icecream = false;
var click_computer = false;
var click_painting = false;

var CheckShowDisplay4 = function(){
	if((click_icecream === true) && (click_computer === true) && (click_painting === true))
	{
		$('#display_3').animate({'opacity':'0'}, 500);
		window.setTimeout(function(){$('#display_3').remove()}, 500);
		// $('#display_4').css({'opacity':'1'});
		// $('#display_4').css({'z-index':'1'});
		// $('#display_4').delay(9000).animate({'opacity':'0'}, 500);

		//$('#display_5').delay(9000).animate({'opacity':'1', 'z-index':'1'}, 0);
		$('#display_5').animate({'opacity':'1', 'z-index':'1'}, 400);
		$('.overflow_control').css({'overflow-x': 'hidden'});
	}
};

$('#itemone').on('click touchstart', function(){
	click_icecream = true;
	CheckShowDisplay4();
	$('#bubbleone').stop();
	$('#bubbleone').animate({'opacity':'1'});
});

$('#bubbleone').on('click touchstart', function(){
	$('#bubbleone').stop();
	$('#bubbleone').animate({'opacity':'0'});
	CheckShowDisplay4();
});

$('#itemtwo').on('click touchstart', function(){
	click_computer = true;
	$('#bubbletwo').stop();
	$('#bubbletwo').animate({'opacity':'1'});
});

$('#bubbletwo').on('click touchstart', function(){
	$('#bubbletwo').stop();
	$('#bubbletwo').animate({'opacity':'0'});
	CheckShowDisplay4();
});

$('#itemthree').on('click touchstart', function(){
	click_painting = true;
	$('#bubblethree').stop();
	$('#bubblethree').animate({'opacity':'1'});
});

$('#bubblethree').on('click touchstart', function(){
	$('#bubblethree').stop();
	$('#bubblethree').animate({'opacity':'0'});
	CheckShowDisplay4();
});

});
