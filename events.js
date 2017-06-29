$(document).ready(function() {

	var audio = new Audio('assets/night.mp3');
	var bg = new Audio('assets/night.mp3');
	bg.addEventListener('ended', function(){
		this.currentTime = 0;
		this.play();
	});
	
	var played = false;
//================cells================

	
    $('#show_display_1').on('click touchend', function() {  
		if(played === false)
		{        
			audio.play();
			bg.play();
			played = true;
			
			$('#display_0').delay(audio.duration * 1000).animate({"opacity": '0'}, 600);
			window.setTimeout(function(){ $('#display_0').remove();}, audio.duration * 1000 + 600); 
			$('#display_1').delay(audio.duration * 1000).animate({"opacity": '1'}, 600); 
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
			
			$('#display_5').delay(9000).animate({'opacity':'1', 'z-index':'1'}, 0);
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
