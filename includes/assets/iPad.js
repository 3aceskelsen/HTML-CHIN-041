var isiPad = navigator.userAgent.indexOf('iPad') != -1;

	$(document).ready(function() {							
	$(function() {
    $.stayInWebApp();
	
	/*checkDevice();*/ 		/*Calls function to see if it is an iPad*/
		/*checkiPadStandAlone();*/
});
		var characters;		/*Imports the chinese characters*/
		$.getJSON("includes/assets/characters.json", function(json){
			characters = json;
			var targetHolder = $("#character-list");
			targetHolder.html("");
			for(var objNumber in characters) {
				var newDiv = $("<div></div>");
				newDiv.attr("class", "thumbnails");
				newDiv.attr("character-index", objNumber);
				var newH3 = $("<h3>"+characters[objNumber]["chinese-character"]+"</h3>");
				newDiv.append(newH3);
				targetHolder.append(newDiv);
				newDiv.bind("click touch touchstart", function(){  /*binds the 'click' 'touch' and 'touchstart' abilities so all can work*/
					var selectedCharacterIndex = $(this).attr("character-index");
					
					$("#lesson-title").html(characters[selectedCharacterIndex]["lesson"]);
					$("#chinese-character").html(characters[selectedCharacterIndex]["chinese-character"]);
					if(characters[selectedCharacterIndex]["chinese-character"].length >= 4) {
						$("#chinese-character").css("font-size", "5em");
					} else if(characters[selectedCharacterIndex]["chinese-character"].length >= 3) {
						$("#chinese-character").css("font-size", "6em");
					} else if(characters[selectedCharacterIndex]["chinese-character"].length >= 2) {
						$("#chinese-character").css("font-size", "7em");
					} else {
						$("#chinese-character").css("font-size", "auto");
					}
					$("#pronunciation").html(characters[selectedCharacterIndex]["pronunciation"]);
					$("#translation").html(characters[selectedCharacterIndex]["translation"]);
					
					$(".click_background").removeClass("click_background");
					$(this).addClass("click_background");
					IsLog.c("this: "+this);
					IsLog.c("$(this): "+$(this));
					IsLog.c("this class: "+$(this).attr("class"));
					IsLog.c("Click handler fired"); // problem solving
					
				});
		}
		});
	});
	
function checkDevice(){  /*if it isn't an ipad, a message will be displayed saying to visit on ipad*/
	if(window.isiPad) {
		//do nothing
	}else{
		$('.page').css('display','none');
		$('body').css('background-color','#fff').append('<a href="mailto:?subject=Check%20out%20this%20Chinese%20Web%20App%20for%20iPad&amp;body=Email%20yourself%20this%20link%20and%20open%20it%20in%20your%20iPad%20to%20add%20this%20Web%20App%20to%20your%20iPad"><img src="images/backgrounds/byu_no_ipad.png"/></a>');
	}
}
function checkiPadStandAlone(){			/*if iPad is in a navigator, will show message saying add to home screen*/
	if(window.navigator.standalone == false) {
		$('.page').css('display','none');
		$('body').css('background-color','#fff').append('<img src="images/backgrounds/add_to_homescreen.png"/>')	
	}
}