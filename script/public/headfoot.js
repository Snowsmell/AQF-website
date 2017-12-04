// JavaScript Document
$(function(){
	
	/* 首页头部  start */
	$(".topheader article").children('section').hide();
	$("#school").children('i').hide();
	
	$("#school").hover(function(){
		$(this).children('i').css('display','inline-block');
		$(".topheader article").children('section').show();
	},function(){
		$(this).children('i').hide();
		$(".topheader article").children('section').hide();
	})

	$(".topheader article").children('section').hover(function(){
		$("#school").children('i').css('display','inline-block');
		$(this).show();
	},function(){
		$("#school").children('i').hide();
		$(this).hide();
	});	
	/* 首页头部  end */

	//注册登录
	var lgblock = function(){ $(".toplogin").css("display","block")};
	var lgnone = function(){$(".toplogin").css("display","none")};
	
	var regblock = function(){ $(".topregister").css("display","block")};
	var regnone = function(){$(".topregister").css("display","none")};
	$("#alogin").click(lgblock);
 	$(".closebox").click(lgnone);
 	$("#aregister").click(regblock);
 	$(".closebox2").click(regnone);
	
	
	
	
	
	
	
	
	//手机侧栏sidebar
	//  $('#menu').mmenu();
   
   /*if($('#menu').length > 0 && !$('#menu').hasClass('mbnavadd')){
		$('#menu').mmenu();
	}*/
	/*if(window.innerWidth <= 768){
		$('#menu').mmenu();
	}*/
	
	if(window.innerWidth <= 768){
		setTimeout(function(){
			$('#menu').mmenu();
		}, 1000);
	}

	
});