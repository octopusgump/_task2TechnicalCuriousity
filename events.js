$(document).ready(function() {

	var audio = new Audio('assets/1-audio.m4a');
	var played = false;
//================cells================

	var allow_scrolling =  false;
	
	document.body.addEventListener('touchstart', function(e)
	{ 
		e.preventDefault();
	});
	
    $('#show_display_1').on('click touchstart', function() {  
		if(played === false)
		{        
			audio.play();
			played = true;
			
			$('#display_0').delay(audio.duration * 1000).animate({"opacity": '0'}, 600);
			window.setTimeout(function(){ $('#display_0').remove();}, audio.duration * 1000 + 600); 
			$('#display_1').delay(audio.duration * 1000).animate({"opacity": '1'}, 600); 
		}
      
    });

    $('#show_display_2').on('click touchstart', function() {

		$('#display_1').stop();
        $('#display_1').animate({"opacity": '0'}, 500);
		window.setTimeout(function(){$('#display_1').remove()}, 500);
        $('#display_2').css({"opacity" : '1'});
		$('#display_2').delay(2000).animate({"opacity": '0'}, 500);
		window.setTimeout(function(){$('#display_3').css({'opacity':'1'});}, 2500);
	
	});
	
	var click_icecream = false;
	var click_computer = false;
	var click_painting = false;
	
	var CheckShowDisplay4 = function(){
		if((click_icecream === true) && (click_computer === true) && (click_painting === true))
		{
			$('#display_3').animate({'opacity':'0'}, 500);
			window.setTimeout(function(){$('#display_3').remove()}, 500);
			$('#display_4').css({'opacity':'1'});
			$('#display_4').css({'z-index':'1'});
			$('#display_4').delay(9000).animate({'opacity':'0'}, 500);
			$('#display_5').delay(9000).animate({'opacity':'1'}, 0);
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
	
	
	
    // close event
    // $body.on('click', '.bx-triangle', function() {
    //     $('.bxc').removeClass('bx-impress');
    // });

});
