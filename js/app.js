$( document ).ready(function() {

//SWIPER
	var swiper = new Swiper('.box-main-swiper .swiper-container', {
		pagination: '.box-main-swiper .swiper-pagination',
		paginationClickable: true,
		spaceBetween: 30,
	});

/*collum height*/
function setEqualHeight(columns)
{
	var tallestcolumn = 0;
	columns.each(
		function()
		{
			currentHeight = $(this).height();
			if(currentHeight > tallestcolumn)
			{
				tallestcolumn = currentHeight;
			}
		}
	);
	columns.height(tallestcolumn);
}

// setEqualHeight($(".swiper-slide figure > p:last-child"));

var $window = $(window);
function checkWidth() {
	var windowsize = $window.width();
	if (windowsize > 768) {
		var swiperN = new Swiper('.box-info .swiper-container', {
			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev',
			slidesPerView: 3,
			paginationClickable: true,
			spaceBetween: 30
		});

		setEqualHeight($(".swiper-slide > div"));
	}
	else {
		//swiper
		var swiperN = new Swiper('.box-info .swiper-container', {
			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev',
			slidesPerView: 1,
			paginationClickable: true,
			spaceBetween: 30
		});
	}
}
// Execute on load
checkWidth();
// Bind event listener
$(window).resize(checkWidth);
/**/

});