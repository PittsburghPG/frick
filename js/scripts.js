var width = $(window).width();
var height = $(window).height();
	
	
//FUNCTIONS FOR WHEN DOM LOADS (images not completely loaded!)
$(document).ready(function() {
	//var firstsong = $('#firstheartthrobs')[0]; 
	//$('#firstheartthrobs')[0].play();
	documentReady();	
});
$(window).load(function(){
	
	windowLoad();
	
	$(window).resize(function(){
		$("body").find(".section, .picture.positionThis, .section .content .right, .quote.positionThis, .slideshowWrapper").removeAttr('style');
		documentReady();
		windowLoad();
	});
	
});


//
// DOCUMENT READY
//
function documentReady()
{
	var invitationW = $('#invitation1').width();
	var invitationBGWidth = width - invitationW;
	if (invitationBGWidth < 400) {
		invitationBGWidth = 400;
		
	} 
	$('#invitation_textBG, #veranda_textBG, #purplebar, #brownbar').css('width', invitationBGWidth + 'px');
	console.log(height);
	$("#invitation_textBG").css('height', height+'px');
	$('#invitation_textBG, #veranda_textBG, #purplebar, #brownbar').css('right', -(invitationBGWidth) + 'px');
	var invitation2Right = invitationBGWidth/2 - $('#invitation2').width()/2;
	$('#invitation2').css('right', invitation2Right +'px');
	$('#coyneimage').css('height', ($('#coyne').height() - 10) + 'px');
}

//
// WINDOW LOAD
//
function windowLoad()
{
	//make first image appear, then the text, then ENTER. Pulse ENTER.
		$("#first1").animate({"opacity":"1"},300, function(){
			
		$("#first1a").delay( 800 ).animate({"opacity":"1"},1000, function(){
				$("#first1b").delay( 800 ).animate({"opacity":"1"},1000, function(){
					$('#first').append('<div id="firstclick"></div>');
									var picWidth = $('#first1a').width();
									var newLeft = width - picWidth;
									var newTop = height/2 - 100;
									$('#firstclick').css('right', newLeft);
									$('#firstclick').css('height', height);
									$( "#firstclick" ).hover(
									  function() {
										$("#first1b").css('opacity','.5');
									  }, function() {
										$("#first1b").css('opacity','1');
									  }
									);
									
									$( "#firstclick" ).click(function() {
										$('#invitation1').css('opacity', '1');
										$.scrollTo( '#invitation', { //scroll to the header that has the next number in its name
											duration: 1000,
											axis: 'y'
										});
										$("#invitation_textBG").delay( 1500 ).animate({"right":"0"},1000, function(){
											$("#invitation_textBG").css('background-color', '#c4a2a0');
											$("#invitation2").delay(1000).animate({"opacity":"1"},1000, function(){});
										});
										$( "#invitation2" ).hover(
										  function() {
											$("#invitation2").css('opacity','.5');
										  }, function() {
											$("#invitation2").css('opacity','1');
										  }
										);
									});
									
									$( "#invitation2" ).click(function() {
										$('#firstheartthrobs')[0].pause();
										//start sound of clopping hooves
										$('#clayton').css('opacity', '1');
										$.scrollTo( '#doorway', { //scroll to the header that has the next number in its name
											duration: 1000,
											axis: 'y'
										});
										
										$("#cochere").delay( 1500 ).animate({"opacity":"1"},1000, function(){
											var fullW = $('#cochere').width();
											$("#cochere2").css('left', (fullW - $('#cochere2').width() - 20) + 'px');
											$("#cochere2").css('z-index', '30');
											$("#cochere2").delay( 1000 ).fadeIn('300');
											$("#cochereenter").delay( 1500 ).animate({"opacity":"1"},1000, function(){
											});
											$('#doorway').append('<div id="cochereclick"></div>');
											
											$( "#cochereclick" ).click(function() {
												//sound of door opening
												$('body').prepend('<div id="mask"></div>');
												$('#mask').css('filter', 'alpha(opacity=50)');
												$('#mask').css('z-index', '45');
												$('#mask').fadeIn();
												$("#coyne").delay( 500 ).animate({"opacity":"1"},1000, function(){});
												$( "#cochereclick" ).remove();
												
												$('.coyneclose').click(function(){
													$('#mask').fadeOut('fast');
													$('#mask').remove();
													$.scrollTo( '#entry', { //scroll to the header that has the next number in its name
														duration: 1000,
														axis: 'y'
													});
													//sound of door closing
													$("#chagrin").delay( 100 ).animate({"opacity":"1"},1000, function(){});
													//Mrs. Coyne: Sad little painting.
													$("#chagrin_next").delay( 3000 ).animate({"opacity":"1"},1000, function(){});
												});
												
												$("#chagrin_next").click(function(){ 
													$.scrollTo( '#blueroom', { //scroll to the header that has the next number in its name
														duration: 1000,
														axis: 'y'
													});
													$("#blueroom1").delay( 100 ).animate({"opacity":"1"},1000, function(){
														$("#blueroom_bar").delay( 500 ).animate({"left":"0"},1000, function(){});
														$("#blueroom_bar2").delay( 2000 ).animate({"opacity":"1"},1000, function(){});
													});
													
													$('#askdog').click(function(){
														$('body').prepend('<div id="mask"></div>');
														$('#mask').fadeIn();
														$("#dog").delay( 500 ).fadeIn('slow');
													});
																
													
													$('#blueroom_bar2').click(function(){
														$.scrollTo( '#breakfastroom', { //scroll to the header that has the next number in its name
														duration: 1000,
														axis: 'y'
														});
														$("#breakfastroom1").delay( 1500 ).animate({"opacity":"1"},1000, function(){
															$("#breakfastroom_bar").delay( 500 ).animate({"left":"0"},1000, function(){});
															$("#breakfastroom .dot").animate({"opacity":"1"},1000, function(){});
															$( ".dot, #get_dressed" ).hover(
															  function() {
																$( this ).css('opacity', '.7');
															  }, function() {
																$( this ).css('opacity', '1');
															  }
															);
															$("#breakfastroom .get_dressed").delay( 2500 ).animate({"opacity":"1"},1000, function(){});
															
															$('#seetable').click(function(){
																$('body').prepend('<div id="mask"></div>');
																$('#mask').fadeIn();
																$("#breakfast_menu").delay( 500 ).fadeIn('slow');
															});
															$('#seepeaches').click(function(){
																$('body').prepend('<div id="mask"></div>');
																$('#mask').fadeIn();
																$("#peaches").delay( 500 ).fadeIn('slow');
															});
															$('#askpresent').click(function(){
																$('body').prepend('<div id="mask"></div>');
																$('#mask').fadeIn();
																$("#present").delay( 500 ).fadeIn('slow');
															});
															$('#askhouse').click(function(){
																$('#present .floatimage img').attr('src', 'img/FrickNY.jpg');
																$('#present .floatimage .caption').empty();
																$('#present .floatimage .caption').html("Image courtesy of the Frick Art &amp; Historical Center");
																$('#present .text').html("<p>After the Homestead strike of 1892, Frick and Carnegie struggled for power at Carnegie Steel. The struggle ended with Frick resigning from the company's board and suing Carnegie. In 1913 Frick built his New York City marble palace of a home, determined to outdo Carnegie's 64-room mansion, both on Fifth Avenue, New York. Outdoing Carnegie was not a new idea for Frick. He had designed his New York office so that it blotted out the sun from Carnegie's office next door.</p>");
															});
															
															$('#get_dressed').click(function(){
																$.scrollTo( '#sink', { //scroll to the header that has the next number in its name
																	duration: 1000,
																	axis: 'y'
																});
																$("#sink1").delay( 1500 ).animate({"opacity":"1"},1000, function(){
																	$("#sink .dot").delay( 1000 ).animate({"opacity":"1"},1000, function(){});
																	$("#sink2").delay( 1500 ).animate({"opacity":"1"},1000, function(){});
																});
																
																$('#seepuff').click(function(){
																	$('body').prepend('<div id="mask"></div>');
																	$('#mask').fadeIn();
																	$("#puff").delay( 500 ).fadeIn('slow');
																});
																$('#sink .clickhere').click(function(){
																	$.scrollTo( '#medicine', { //scroll to the header that has the next number in its name
																		duration: 1000,
																		axis: 'y'
																	});
																	$("#medicine1").delay( 1500 ).animate({"opacity":"1"},1000, function(){});
																	$("#greenbar").delay( 2500 ).animate({"left":"20px"},1000, function(){});
																	$("#medicine2").delay( 2500 ).animate({"opacity":"1"},1000, function(){});
																});
																$('#medicine .clickhere').click(function(){
																	$.scrollTo( '#dresser', { //scroll to the header that has the next number in its name
																		duration: 1000,
																		axis: 'y'
																	});
																	
																	$("#dresser1").delay( 1500 ).animate({"opacity":"1"},1000, function(){
																		var imageWidth = jQuery(this).width();
																		$("#dresser .dot").delay( 300 ).animate({"opacity":"1"},1000, function(){});
																		$("#dresser2").delay( 1500 ).animate({"opacity":"1"},1000, function(){});
																		//$('#seeundergarments').css({'bottom':'150px', 'left': '1200px'}); //was 1323
																		$('#seeundergarments').css({'top':'500px', 'left': imageWidth-123 + 'px'});
																		$('#seedress').css({'top':'390px', 'left': imageWidth-103 + 'px'});
																		$("#dresser .clickhere").css({'bottom':'0px', 'right': imageWidth + 'px'});
																	});
																	$('#seedresser').click(function(){
																		$('body').prepend('<div id="mask"></div>');
																		$('#mask').fadeIn();
																		$("#dresserdetail").delay( 500 ).fadeIn('slow');
																	});
																	$('#askhair').click(function(){
																		$('#dresserdetail .text').html("<p>Miss Frick dropped friends who bobbed their hair, according to a 1939 profile in the <em>New Yorker</em> magazine.</p>");
																	});
																	$('#seeundergarments').click(function(){
																		$('body').prepend('<div id="mask"></div>');
																		$('#mask').fadeIn();
																		$("#corset").delay( 500 ).fadeIn('slow');
																		$("#corset .floatimage img").css('cursor', 'pointer');
																		$( "#corset .floatimage img" ).hover(
																		  function() {
																			$( this ).attr('src', 'img/Corset-back640.jpg');
																		  }, function() {
																			$( this ).attr('src', 'img/Corset.jpg');
																		  }
																		);	
																	});
																	$('#seedress').click(function(){
																		$('body').prepend('<div id="mask"></div>');
																		$('#mask').fadeIn();
																		$("#dress").delay( 500 ).fadeIn('slow');
																		
																	});
																	$('#dresser .clickhere').click(function(){
																		$.scrollTo( '#reception', { //scroll to the header that has the next number in its name
																			duration: 1000,
																			axis: 'y'
																		});
																		$("#receptionBG").delay( 300 ).animate({"opacity":"1"},1000, function(){});
																		$('#askreception').click(function(){
																			$("#receptionroom")
																				.fadeOut(400, function() {
																					$("#receptionroom").attr('src','img/receptionroom-then.jpg');
																				})
																				.fadeIn(400);
																				$("#receptionroom").css('cursor', 'pointer');
																				$('#receptionroom_bar .text').html("<p>From ''The Social Mirror'', published 1888:</p>\
																				<p>''The wife of Mr. H.C. Frick, the two or three times millionaire, is young and fair and charming. She was the daughter of the late Asa Childs, of this city. Her home in the East End is one of the handsomest in the city, and she is the fortunate owner of carriages, horses, diamonds and all the beautiful things that money can buy.''</p>\
																				<p>By 1908 Mrs. Frick had witnessed the deaths of two of her children in one year, and endured the fear-filled aftermath of an assassination attempt on her husband. She had become depressed and emotionally distant.</p>\
																				");
																		});
																		$("#receptionroom").click(function(){
																			$('body').prepend('<div id="mask"></div>');
																			$('#mask').fadeIn();
																			$("#dress2").delay( 500 ).fadeIn('slow');
																			$("#dress2 .floatimage img").css('cursor', 'pointer');
																			$( "#dress2 .floatimage img" ).hover(
																			  function() {
																				$( this ).attr('src', 'img/Debut-Gown-Back1003.jpg');
																			  }, function() {
																				$( this ).attr('src', 'img/Debut-Gown.jpg');
																			  }
																			);
																		});
																		$('#reception .clickhere').click(function(){
																			$.scrollTo( '#veranda', { //scroll to the header that has the next number in its name
																				duration: 1000,
																				axis: 'y'
																			});
																			$("#veranda1").delay( 300 ).animate({"opacity":"1"},1000, function(){});
																			$("#veranda_textBG").delay( 1500 ).animate({"right":"0"},1000, function(){});
																			$("#veranda_next").delay( 2500 ).animate({"opacity":"1"},1000, function(){});
																			$('#askveranda').click(function(){
																				$('body').prepend('<div id="mask"></div>');
																				$('#mask').fadeIn();
																				$("#orchestra").delay( 500 ).fadeIn('slow');
																				
																			});
																			$('#veranda_next').click(function(){
																				$.scrollTo( '#diningroom', { //scroll to the header that has the next number in its name
																					duration: 1000,
																					axis: 'y'
																				});
																				$("#diningroom1").delay( 300 ).animate({"opacity":"1"},1000, function(){});
																				$("#diningroom_text").fadeIn('slow');
																				$("#seemenu").delay( 1300 ).animate({"opacity":"1"},1000, function(){});
																				$("#seemenu").click(function(){
																					$('body').prepend('<div id="mask"></div>');
																					$('#mask').fadeIn();
																					$('#menu .text').css({'max-height': height + "px", "overflow": "scroll"});
																					$("#menu").delay( 500 ).fadeIn('slow');
																				});
																				$("#clickfriends").click(function(){
																					$.scrollTo( '#friends', { //scroll to the header that has the next number in its name
																						duration: 1000,
																						axis: 'y'
																					});
																					$("#friends1").delay( 300 ).animate({"opacity":"1"},1000, function(){});
																					$("#clickdancing").click(function(){
																						$.scrollTo( '#dancing', { //scroll to the header that has the next number in its name
																							duration: 1000,
																							axis: 'y'
																						});
																						$("#dancing1").delay( 300 ).animate({"opacity":"1"},1000, function(){});
																						$("#dancecard").delay( 1000 ).animate({"opacity":"1"},1000, function(){});
																						if (($("#dancing .full").width()- 330) < 1000) {
																							$("#dancecard").css('width', $("#dancing .full").width()- 330-20 + 'px'); //20 for margin
																						}
																						$('#dancing_text').fadeIn('slow');
																						var i = 1;
																						$("#dancecard").click(function() {
																							if (i < 3) { i++} else { i=1; }
																							$("#dancecard")
																							.fadeOut(150, function() {
																								$("#dancecard").attr('src','img/dancecard' + i + '.png');
																							})
																							.fadeIn(300);
																						});
																						
																						$('#askchilds').click(function(){
																							$('body').prepend('<div id="mask"></div>');
																							$('#mask').fadeIn();
																							$("#childs").delay( 500 ).fadeIn('slow');
																						});
																						$('#clickparties').click(function(){
																							$.scrollTo( '#parties', { //scroll to the header that has the next number in its name
																								duration: 1000,
																								axis: 'y'
																							});
																							var screenW = $("#parties .full").width();
																							var membookW = $("#parties1").width();
																							$("#parties1").css('left', (screenW - membookW) /2 + 'px'); //get proper position for memory  book
																							$("#parties1").delay( 300 ).animate({"opacity":"1"},1000, function(){});
																							$("#membook").css('height', $("#parties .full").height()- 60 + 'px'); //30 for top and bottom margins
																							$("#membook").delay( 1000 ).animate({"opacity":"1"},1000, function(){});
																							$("#purplebar").delay( 1500 ).animate({"right":"0"},1000, function(){});
																							$("#purple-next").delay( 2000 ).fadeIn();
																							$('#askpark').click(function(){
																								$('body').prepend('<div id="mask"></div>');
																								$('#mask').fadeIn();
																								$("#frickpark").delay( 500 ).fadeIn('slow');
																							});
																							var j = 1;
																							$("#membook").click(function() {
																								if (j < 10) { j++} else { j=1; }
																								$("#membook")
																								.fadeOut(150, function() {
																									$("#membook").attr('src','img/membook' + j + '.png');
																								})
																								.fadeIn(300);
																							});
																							$("#purple-next").click(function() {
																								$.scrollTo( '#card', { //scroll to the header that has the next number in its name
																									duration: 1000,
																									axis: 'y'
																								});
																								$("#brownbar").delay( 1500 ).animate({"right":"0"},1000, function(){});
																							});
																						});
																					});
																				});
																			});
																		});
																		
																	});
																});
															});
														});
													});
												});
												
												
											});
											
										});
									});
									
									
									
						/*$("#first1b").animate({"opacity":"0"},500, function(){
						$("#first1b").animate({"opacity":"1"},500, function(){
							$("#first1b").animate({"opacity":"0"},500, function(){
								$("#first1b").animate({"opacity":"1"},500, function(){
									$('#first').append('<div id="firstclick"></div>');
									var picWidth = $('#first1a').width();
									var newLeft = width - picWidth;
									var newTop = height/2 - 100;
									$('#firstclick').css('right', newLeft);
									//$('#firstclick').css('top', newTop);
									$('#firstclick').css('height', height);
								});
							});
						});
					});*/
					
					
				});
			});
			
	});
	
	//indicate that they've moused over "Enter"
	
	$('.close').click(function() {
		if (($(this).parent().attr('id')=='breakfast_menu') || ($(this).parent().attr('id')=='present') || ($(this).parent().attr('id')=='corset') || ($(this).parent().attr('id')=='dress')|| ($(this).parent().attr('id')=='menu') || ($(this).parent().attr('id')=='childs')) {
			$(this).parent().fadeOut();
		} else {
			$(this).parent().animate({"opacity":"0"},500, function(){});
		}
		$('#mask').remove();
	});
	$( ".dot, #get_dressed" ).hover(
	  function() {
		$( this ).css('opacity', '.7');
	  }, function() {
		$( this ).css('opacity', '1');
	  }
	);	
		
		
	
}
