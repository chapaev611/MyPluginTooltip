;(function($) {

	$.fn.pluginTooltip = function(option) {
		
		var title;
		$('body').append('<div class="tooltip animated"></div>');

		option = $.extend({
			initClass : '',
			animateClass : 'jello',
		}, option);

		return this.each(function() {

			$(this).mouseenter(function() {
				title = $.trim($(this).data('title'));
				$('.tooltip').addClass(option.initClass).addClass(option.animateClass);

			}).mousemove(function(e) {
				var mouseX = e.pageX + 20,
						mouseY = e.pageY + 10,
						titleWidth = $('.tooltip').width(),
						titleHeight = $('.tooltip').height(),
						titleVisX = $(window).width() - (mouseX + titleWidth),
						titleVisY = $(window).height() - (mouseY + titleHeight);

				if(titleVisX < 20) {
					mouseX = e.pageX - titleWidth - 35;
				}
				if(titleVisY < 20) {
					mouseY = e.pageY - titleHeight - 20;
				}

				$('.tooltip').css({
					'top' : mouseY,
					'left' : mouseX,
				}).fadeIn(100).text(title);

			}).mouseout(function() {
				$('.tooltip').fadeOut(100);
			});

		});

	};

})(jQuery);







// ;(function($){

// 	$.fn.pluginTooltip = function(option) {
		
// 		option = $.extend({
// 			textDecoration : 'none',
// 			bgColor : '#333',
// 			color : '#ffa'
// 		}, option);

// 		return this.each(function() {
// 			$(this).css({
// 				'textDecoration' : option.textDecoration,
// 				'backgroundColor' : option.bgColor,
// 				'color' : option.color
// 			});
// 		});
// 	}

// })(jQuery);