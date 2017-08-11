$('.seat').on('click',function(){
	if (!$(this).hasClass('active')){
		$(this).addClass('active');
	}
	else if ($(this).hasClass('active')){
		$(this).removeClass('active');
	}
})
$('.book').on('click',function(){
	$('.seat').hasClass('active')
	$('.active').addClass('active1')
	alert('Success.Thank you')
})

$('.seat').on('click',function(){
	if ($(this).hasClass('active1')){
		$(this).removeClass('active1');
	}
	else if ($(this).hasClass('active1')){
		$(this).removeClass('active1');
	}
})
$('.cancel').on('click',function(){
	$('.seat').hasClass('active1')
	$('.active1').addClass('active')
	alert('success cancel')
})