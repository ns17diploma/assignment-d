$('#standard').on('click',function(){
	if (!$(this).hasClass('s-t-selected')) {
		$(this).addClass('s-t-selected');
		$('.s-s').addClass('s-t-selected');
		$('.s-s').removeClass('seat-c');
		$('#vip').removeClass('s-t-selected');
		$('.s-v').removeClass('s-t-selected');
		$('.s-v').addClass('seat-c');
		$('#sofa').removeClass('s-t-selected');
		$('.s-sofa').removeClass('s-t-selected');
		$('.s-sofa').addClass('seat-c');
	}
});

$('#vip').on('click',function(){
	if (!$(this).hasClass('s-t-selected')) {
		$(this).addClass('s-t-selected');
		$('.s-v').addClass('s-t-selected');
		$('.s-v').removeClass('seat-c');
		$('#standard').removeClass('s-t-selected');
		$('.s-s').removeClass('s-t-selected');
		$('.s-s').addClass('seat-c');
		$('#sofa').removeClass('s-t-selected');
		$('.s-sofa').removeClass('s-t-selected');
		$('.s-sofa').addClass('seat-c');
	}
});

$('#sofa').on('click',function(){
	if (!$(this).hasClass('s-t-selected')) {
		$(this).addClass('s-t-selected');
		$('.s-sofa').addClass('s-t-selected');
		$('.s-sofa').removeClass('seat-c');
		$('#standard').removeClass('s-t-selected');
		$('.s-s').removeClass('s-t-selected');
		$('.s-s').addClass('seat-c');
		$('#vip').removeClass('s-t-selected');
		$('.s-v').removeClass('s-t-selected');
		$('.s-v').addClass('seat-c');
	}
});

$('.place').on('click',function(){
	if ($(this).hasClass('s-t-selected')) {
		$(this).removeClass('s-t-selected');
		$(this).addClass('selected');
	}
	else if ($(this).hasClass('selected')) {
		$(this).removeClass('selected');
		$(this).addClass('s-t-selected');
	}
	if ($(this).hasClass('booked')) {
		alert("This seat already booked .");
	}
	else if (!$('.place').hasClass('s-t-selected')) {
		alert("Please select seat level .");
	}
});

$('#book').on('click',function(){
	if ($('.place').hasClass('selected')) {
		$('.selected').addClass('booked');
		$('.booked').removeClass('selected');
		$('.place').addClass('seat-c');
		$('.select').removeClass('s-t-selected');
		$('.place').removeClass('s-t-selected');
		alert("Booking Successful! Thank You! Please come again!");
	}
	else if (!$('.place').hasClass('selected')) {
		alert("Please select your seat .");
	}
});

$('#clear-select').on('click',function(){
	$('.select').removeClass('s-t-selected');
	$('.place').removeClass('s-t-selected');
	$('.place').removeClass('selected');
	$('.place').addClass('seat-c');
});

var sa = 16;
var va = 20;
var ssa = 25;
var i = $('.booked').size();

var ts = i*sa;
var tv = 




$('.t-box').html()