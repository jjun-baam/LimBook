const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '도서 검색');
});

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();


$(function(){
	var windowHeight = $(window).height()-65;
	$(".btn_all_menu").click(function(e){
		e.preventDefault();
		
		$(this).toggleClass("active");
		$("#navAll").toggleClass("active");
		if($("#navAll").hasClass("active")){
			$(".overlay").addClass("active");
			$(".wrap").css("height",windowHeight+"px");
		}else{
			$(".overlay").removeClass("active");
			$(".wrap").css("height","auto");
		}
	});
	
	
	$(".overlay").click(function(e){
		$("#navAll").removeClass("active");
		$(".overlay").removeClass("active");
		$(".drop_menu").removeClass("active");
		$(".modal_wrap").removeClass("active");
		$(".wrap").css("height","auto");
	});

	$(".btn_mobile_search").click(function(e){
		e.preventDefault();
		$("#top_search").toggleClass("active");
	})

	$("#gnb > ul > li > a").mouseover(function(){
		if(!$(".overlay").hasClass("active")){
			$("#gnb > ul > li").removeClass("active");
			$(this).parent().addClass("active");
		}
	});
	$("#gnb").mouseleave(function(){
		$("#gnb > ul > li").removeClass("active");
	});

	$("#navAll nav > ul > li > a").click(function(e){
		e.preventDefault();
		var isActive = $(this).parent().hasClass("active");
		$("#navAll nav > ul > li").removeClass("active");
		if(isActive){
			$(this).parent().removeClass("active");
		}else{
			$(this).parent().addClass("active");
		}
	});
	
	$(".modal_open").click(function(e){
		e.preventDefault();
		$(".overlay").addClass("active");
		var modalId = $(this).attr("href");
		$(modalId).addClass("active");
	});

	$(".modal_close").click(function(e){
		e.preventDefault();
		$(".overlay").removeClass("active");
		$(".modal_wrap").removeClass("active");
	});

	pageSetting();

});
function pageSetting(){
	tabEvent();
	dropMenuEvent();
}

function tabEvent(){
	$(".tab").not(".not_use").each(function(){
		if($(this).find(".tab_content.active").length <= 0){
			$(this).find(".tab_menu li").first().addClass("active");
			$(this).find(".tab_content").first().addClass("active");
		}
		
		if($(this).hasClass("mouse_click")){
			$(this).find(".tab_menu li a").click(function(e){
				e.preventDefault();
				$(".tab_menu li").removeClass("active");
				$(this).parent().addClass("active");

				var num = $(this).parent().index();
				$(this).parent().parent().parent().find(".tab_content").removeClass("active");
				$(this).parent().parent().parent().find(".tab_content").eq(num).addClass("active");
			});
		}
	});
}

function dropMenuEvent(){
	$(".drop_menu").each(function(){
		if($(this).hasClass("mouse_click")){
			$(this).find(" > a").click(function(e){
				e.preventDefault();
				$(this).parent().addClass("active");
				$(".overlay").addClass("active");
			});
		}
	});
}