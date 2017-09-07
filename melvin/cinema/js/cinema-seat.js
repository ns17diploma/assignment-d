$('.click').on('click',function(){
	if (!$(this).hasClass('color1')) {
		$(this).addClass('color1');
	}
	else if($(this).hasClass('color1')){
		$(this).removeClass('color1')  
	}

	else{
		remove()
	}
})
/**
	*book
**/
$('#book').click(function(){
	if ($('.click').hasClass('color1')) {
		$('.color1').addClass('color3');
		$('.color3').removeClass('color1');
	}
})
$('#remove').click(function(){
	if ($('.click').hasClass('color3')) {;
		$('.color3').removeClass('color3');
	}
})
/**
	*seat
**/
