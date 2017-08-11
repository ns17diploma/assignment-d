////////////////////////////////////////
///////////WEBPAGE-BASIC////////////////
////////////////////////////////////////
$('#sec001').hide();
$('#sec01').hide();
$('#sec02').hide();
///////////SEAT-FUNCTION////////////////
var sit=1;
$('.sit').on('click',function(){
	if (sit==1){
		$('.grey').removeClass('grey');
		$(this).addClass('booking');
		sit=2;
}
	else{
		$(this).removeClass('booking');
		sit=1;
	}
})
///////////BUTTON-FUNCTION////////////////
$('.bookk').on('click',function(){
		$('#sec001').show();
		$('#sec00').hide();
	})
$('.boook').on('click',function(){
		$('#sec01').show();
		$('#sec02').hide();
	})
$('.cancelbook').on('click',function(){
		$('#sec00').show();
		$('#sec001').hide();
	})
$('.cancell').on('click',function(){
		$('#sec00').show();
		$('#sec02').hide();
	})
$('.homee').on('click',function(){
		$('#sec00').show();
		$('#sec01').hide();
	})
$('.nextbook').on('click',function(){
		$('#sec01').show();
		$('#sec001').hide();
	})

$('.nextt').on('click',function(){
		$('#sec02').show();
		$('#sec01').hide();
	})
////////////BOOKING FUNCTION/////////////
$('.book').on('click',function(){
if ($('.sit').hasClass('booking')){
	$('.booking').addClass('booked');
	alert('You Have Booked Sit'+" "+ $('.booked').text()+"Thank You Have A Nice Day!");
}
else{
	alert('Choose A sit please')
}
})
/////////BOOKING-INFORM////////////
$('.sit').on('click',function(){
if ($('.blue').hasClass('booking')&&
	$('.yellow').hasClass('booking')
	){
	alert("Please Select The Same Class Seat If Booking Seat More Than One");
	$('.sit').removeClass('booking')
}
else if ($('.blue').hasClass('booking')&&
	$('.purplee').hasClass('booking')
	){
	alert("Please Select The Same Class Seat If Booking Seat More Than One");
	$('.sit').removeClass('booking')
}
else if ($('.blue').hasClass('booking')&&
	$('.pink').hasClass('booking')
	){
	alert("Please Select The Same Class Seat If Booking Seat More Than One");
	$('.sit').removeClass('booking')
}
else if ($('.yellow').hasClass('booking')&&
	$('.purplee').hasClass('booking')
	){
	alert("Please Select The Same Class Seat If Booking Seat More Than One");
	$('.sit').removeClass('booking')
}
else if ($('.yellow').hasClass('booking')&&
	$('.pink').hasClass('booking')
	){
	alert("Please Select The Same Class Seat If Booking Seat More Than One");
	$('.sit').removeClass('booking')
}
else if ($('.yellow').hasClass('booking')&&
	$('.purplee').hasClass('booking')
	){
	alert("Please Select The Same Class Seat If Booking Seat More Than One");
	$('.sit').removeClass('booking')
}
else if ($('.pink').hasClass('booking')&&
	$('.purplee').hasClass('booking')
	){
	alert("Please Select The Same Class Seat If Booking Seat More Than One");
	$('.sit').removeClass('booking')
}
})
///////////TICKET-PRICE//////////////
$('.next').on('click',function(){
	if ($('.blue').hasClass('booking')){
	alert("You're Successful Choosing Your Seat Please Continue Next Process For Complete Your Booking");
	$('.inform').addClass('textp');
	$('.inform').html('Price RM9.00'+' | '+'Standard Seat'+' | '+'Children Discount 50'+"%");
}
else if($('.yellow').hasClass('booking')){
	alert("You're Successful Choosing Your Seat Please Continue Next Process For Complete Your Booking");
	$('.inform').addClass('textp');
	$('.inform').html('Price RM14.00'+' | '+'Preferred Seat'+' | '+' Children Discount 50 Percent'+"%");
}
else if($('.purplee').hasClass('booking')){
	alert("You're Successful Choosing Your Seat Please Continue Next Process For Complete Your Booking");
	$('.inform').addClass('textp');
	$('.inform').html('Price RM12.00'+' | '+'Premium Seat'+' | '+' Children Discount 50 Percent'+"%");
}
else if($('.pink').hasClass('booking')){
	alert("You're Successful Choosing Your Seat Please Continue Next Process For Complete Your Booking");
	$('.inform').addClass('textp');
	$('.inform').html('Price RM32.00'+' | '+'Couple Seat');
}
else{
	alert('Choose A sit please');
	$('#sec01').show();
	$('#sec02').hide();
}
})
////////////SEAT CLASS////////////////
$('.stand').on('click',function(){
	if (sit==1){
		$('.grey').removeClass('grey');
		$('.blue').addClass('grey');
		sit=2;
}
	else{
		$('.blue').removeClass('grey');
		sit=1;
	}
	})
$('.prem').on('click',function(){
	if (sit==1){
		$('.grey').removeClass('grey');
		$('.yellow').addClass('grey');
		sit=2;
}
	else{
		$('.yellow').removeClass('grey');
		sit=1;
	}
	})
$('.pref').on('click',function(){
	if (sit==1){
		$('.grey').removeClass('grey');
		$('.purplee').addClass('grey');
		sit=2;
}
	else{
		$('.purplee').removeClass('grey');
		sit=1;
	}
	})
$('.twins').on('click',function(){
	if (sit==1){
		$('.grey').removeClass('grey');
		$('.pink').addClass('grey');
		sit=2;
}
	else{
		$('.pink').removeClass('grey');
		sit=1;
	}
	})
/////////////////////////////////////
//////////////////////////////////////
///////////////////////////////////////
