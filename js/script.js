// modal
function show(id) {
	$('#' + id).modal({
		fadeDuration: 100,
		fadeDelay: 0.1,
	});
}

function showId(id) {
	$('#' + id).addClass('on');
}


function showSearch(id) {
	$('#' + id).css('top', '60px');
	$('body').css('overflow', 'hidden')
}

function showSearch2(id) {
	$('#' + id).css('top', '0');
	$('body').css('overflow', 'hidden')
}


$(function () {
	$('.ico_more').click(function () {
		$(this).parent().siblings('.show_menu').show();
	})
	$('.show_menu a').click(function () {
		$(this).parent().hide();
	})


	var swiper = new Swiper(".mySwiper", {
		slidesPerView: 3,
		slidesPerGroup: 3,
		spaceBetween: 18,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
	});

	var swiper2 = new Swiper(".mySwiper2", {
		slidesPerView: 1,
		spaceBetween: 18,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
	});

	$('.modal_close,.modal_close2').click(function () {
		$(this).parent().css('top', '100%');
		$('body').css('overflow', 'visible')
	})

	// pi chart
	let drawTemp = $('.profile_temp .temp span').text();
	draw(drawTemp, '.pie-chart1', '#FF8A00');

	function draw(max, classname, colorname) {
		var i = 1;
		var func1 = setInterval(function () {
			if (i < max) {
				color1(i, classname, colorname);
				i++;
			} else {
				clearInterval(func1);
			}
		}, 10);
	}

	function color1(i, classname, colorname) {
		$(classname).css({
			"background": "conic-gradient(" + colorname + " 0% " + i + "%, #fff " + i + "% 100%)"
		});
	}

	// 해상도
	if ($(window).height() < 739) {
		$('.my__main').css({
			"height": "auto",
			"padding-bottom": "180px"
		});
		$('.mileage_chang').css('margin-bottom', '65px');
	} else {
		$('.my__main').css({
			"height": "calc(100vh - 166px)",
			"padding-bottom": "65px"
		});
	}
	$(window).resize(function () {
		if ($(window).height() < 739) {
			$('.my__main').css({
				"height": "auto",
				"padding-bottom": "180px"
			});
			$('.mileage_chang').css('margin-bottom', '65px');
		} else {
			$('.my__main').css({
				"height": "calc(100vh - 166px)",
				"padding-bottom": "65px"
			});
		}
	});

	// back
	$('.btn_back').click(function () {
		history.back();
	})
})