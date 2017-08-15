$('.reset').on('click',function(){
	location.reload();
})

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
	$('.active').addClass('active02');
	alert('Thank you')
})