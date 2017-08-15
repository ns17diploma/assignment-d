var priceOf = {
	normal : 200.00,
	premium : 400.00,
	hotel : 180.00,
	meal : 50.00,
	transport : 50.00,
	insurance : 25.00
}

var seat = {
	A : [0,0,0,0,0,0,0,0,0,0],
	B : [0,0,0,0,0,0,0,0,0,0],
	C : [0,0,0,0,0,0,0,0,0,0],
	D : [0,0,0,0,0,0,0,0,0,0],
	E : [0,0,0,0,0,0,0,0,0,0],
	F : [0,0,0,0,0,0,0,0,0,0]
}

$('#origin').click(function(){
	if ($('#origin').val() != "none") {
		$('.check1').show().addClass('checkOK');
	} else {
		$('.check1').removeClass('checkOK');
	}
})

$('#destination').click(function(){
	if ($('#destination').val() != "none") {
		$('.check2').show().addClass('checkOK');
	} else {
		$('.check2').removeClass('checkOK');
	}
})

$('.available').click(function(){
	$(this).toggleClass('selected');
})

$('.extra').click(function(){
	var i = $(this).attr('id');
	$('.extraOption').hide();
	$('#' + i + "Option").show();
	$('#' + i + "Title").show();
})

$('.extraOption').click(function(){
	var i = $(this).parent().attr('id');
	if (i == "hotel") {
		$('#hotelPrice').html(parseFloat($(this).val()) * parseFloat(priceOf.hotel));
	}
	if (i == "meal") {
		$('#mealPrice').html(parseFloat($(this).val()) * parseFloat(priceOf.meal));
	}
	if (i == "insurance") {
		$('#insurancePrice').html(parseFloat($(this).val()) * parseFloat(priceOf.insurance));
	}
	allPrice();
})

$('.premium').click(function(){
	if ($(this).hasClass('selected')) {
		$('#ticketPrice').html(parseFloat($('#ticketPrice').html()) + parseFloat(priceOf.premium));
	} else if ($(this).hasClass('selected') == false) {
		$('#ticketPrice').html(parseFloat($('#ticketPrice').html()) - parseFloat(priceOf.premium));
	}
	allPrice();
})

$('.normal').click(function(){
	if ($(this).hasClass('selected')) {
		$('#ticketPrice').html(parseFloat($('#ticketPrice').html()) + parseFloat(priceOf.normal));
	} else if ($(this).hasClass('selected') == false) {
		$('#ticketPrice').html(parseFloat($('#ticketPrice').html()) - parseFloat(priceOf.normal));
	}
	allPrice();
})

function allPrice() {
	$('#totalPrice').html(parseFloat($('#ticketPrice').html()) + parseFloat($('#mealPrice').html()) + parseFloat($('#insurancePrice').html()) + parseFloat($('#hotelPrice').html()));
}

function noPrank() {
	alert("Are you kidding me?");
	alert("At least buy a ticket.");
	
}

function noExtra() {
	if ($('#mealOption').val() == 0 && $('#hotelOption').val() == 0 && $('#insuranceOption').val() == 0 && $('#transportOption').val() == 0 ) {
		if (confirm("You didn't ask for anything! Is that ok for you?")  == true) {
			alert("OK thank you.");
			confirmBuy();
		} else {
			alert("Please think careful before you do anything.");
		}
	} else if ($('#mealOption').val() == 0) {
		if (confirm("Do you sure you don't want any meal?")  == true) {
			alert("OK thank you.");
			confirmBuy();
		} else {
			alert("Please think careful before you do anything.");
		}
	} else if ($('#hotelOption').val() == 0) {
		if (confirm("Do you sure you don't want to stay in hotel?")  == true) {
			alert("OK thank you.");
			confirmBuy();
		} else {
			alert("Please think careful before you do anything.");
		}
	} else if ($('#insuranceOption').val() == 0) {
		if (confirm("Do you sure you don't want to buy any insurance?")  == true) {
			alert("OK thank you.");
			confirmBuy(); 	
		} else {
			alert("Please think careful before you do anything.");
		}
	}
}

function confirmBuy() {
	if (confirm("Confirm to purchase?") == true) {
		alert("Thank you for your purchase!");
		alert("The bill will be RM " + $('#totalPrice').html());
		$('.selected').removeClass('selected').addClass('booked').unbind().html("&times;");
		$('#totalPrice').html("0.00");
		$('#ticketPrice').html("0.00");
		$('#hotelPrice').html("0.00");
		$('#transportPrice').html("0.00");
		$('#mealPrice').html("0.00");
		$('#insurancePrice').html("0.00");
		$('.extraOption').val(0);
	} else {
		alert("Transaction failed!");
	}
}

$('#search').click(function(){
	if ($('.check1').hasClass('checkOK') && $('.check2').hasClass('checkOK')) {
		$('#main').hide();
		$('#purchase').show();
	} else if ($('.check1').hasClass('checkOK') == false && $('.check2').hasClass('checkOK') == false) {
		alert("You have choose anything!!!");
	} else if ($('.check1').hasClass('checkOK') == false) {
		alert("You haven't choose your origin!");
	} else if ($('.check2').hasClass('checkOK') == false) {
		alert("You haven't choose your destination!");
	}
})

$('#confirmBtn').click(function(){
	if ($('.premium').hasClass('selected') == false && $('.normal').hasClass('selected') == false) {
		noPrank();
	} else if ($('#mealOption').val() == 0 && $('#hotelOption').val() == 0 && $('#insuranceOption').val() == 0 && $('#transportOption').val() == 0 ) {
		noExtra();
	} else {
		confirmBuy();
	}
})

$('#reset').click(function(){
	$('.selected').removeClass('selected').addClass('available');
	$('.booked').removeClass('booked').addClass('available');
})
	
///////// Slider ///////////////
var width = 480;
var animationSpeed = 1000;
var pause = 3000;
var currentSlide = 1;
var slider = $('#slider');
var sliderContainer = slider.find('.slides');
var slides = sliderContainer.find('.slide');
var interval;

function startSlider() {
	interval = setInterval(function(){
		sliderContainer.animate({'margin-left':'-=' + width},animationSpeed, function(){
			currentSlide++;
			if (currentSlide === slides.length) {
				currentSlide = 1;
				sliderContainer.css('margin-left',0);
			}
		});
	},pause);
}

function stopSlider() {
	clearInterval(interval);
}

slider.on('mouseenter',stopSlider).on('mouseleave',startSlider);

startSlider();