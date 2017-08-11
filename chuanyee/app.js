$('.seat').on('click',function(){
	$(this).addClass('booking');
});


$('.book').on('click',function(){
	$('.booking').addClass('booked');
	alert('success');
});


$('.reset').on('click',function(){
	location.reload();
});


