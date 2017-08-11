$('#btn1').on('click' , function(){
	alert('PLS double click to book your seat! RED=BOOKED//GREEN=SELECTED')
});

$('.one').on('click' , function(){
	$(this).addClass('clicked1');
});

$('.one').dblclick(function(){
	$(this).addClass('clicked2')
	alert('You have booked this Seats')
});

$('#btn2').on('click', function(){
	$('.one').removeClass('clicked1')
	alert('Booked cant be remove only SELECTED CAN BE REMOVE / TO click SELECTED YOU NEED TO CLICK ONCE AT THE MOMENT BUT ONCE YOU BOOKED it cant be remove so think before you choose if YOU ARE NOT SURE WHERE IS THE Place YOU WANT YOU MUST NOT DOUBLE CLICK Thanks for paying attention!!!  ' )
});

$('#btn3').on('click' , function(){
	alert('Kindly remind for color blindness you can get a blindness glasses at the counter after you paid the ticket so the blindness glasses is belongs to you AND the ticket will add in RM3.00 FOR THOSE WHO WANT TO BUY blindness glasses. AT THE END IT WILL ADD IN RM3.00 ')
});