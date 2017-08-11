$('.seat').on('click',function(){
	if (!$(this).hasClass('yellow')){
		$(this).removeClass('violet');
		$(this).children().addClass('yellow').mousemove();
		$(this).unbind().children().addClass('active')		
	}
	else if ($(this).hasClass('yellow')) {
			$(this).removeClass('yellow');
	}
})
$('.seat').on('click',function(){
	if (!$(this).hasClass('yellow')){
		$(this).removeClass('pink');
		$(this).children().addClass('yellow');
		$(this).children().addClass('active')		
	}
	else if ($(this).hasClass('yellow')) {
			$(this).removeClass('yellow');
	}
})
$('#book').on('click',function(){
	$('.active').addClass('grey');
	$('.active').removeClass('active').removeClass('violet').removeClass('pink').removeClass('yellow')
	alert("Thank You");
})
$('#cancel').on('click',function(){
	location.reload();
})