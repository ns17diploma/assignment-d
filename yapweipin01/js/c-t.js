$('.time').on('click',function(){
	if (!$('.time').hasClass('t-selected')) {
		$(this).addClass('t-selected');
	}
	else if ($('.time').hasClass('t-selected')) {
		$('.time').removeClass('t-selected');
		if (!$(this).hasClass('t-selected')) {
			$(this).addClass('t-selected');
		}
	}
});

$('#b-c').on('click',function(){
	if (!$('.time').hasClass('t-selected')) {
		alert("Please choose a time .");
	}
	else {
		window.location.href = 'booking.html';
	}
});