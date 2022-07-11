jQuery('document').ready(function($){
	console.log("Inicio:rdy");
	// slider inicio
	$('#inicio-slider').slick({
		autoplay: true,
		autoplaySpeed: 6000,
		dots: true,
		arrows: false
	});
	// segundo slider / home slider
	$('#home-slider').slick({
		autoplay: true,
		autoplaySpeed: 6000,
		dots: true,
		arrows: false,
		responsive: [
			{
				breakpoint: 576,
				settings: {
					adaptiveHeight: true
				}
			}
		]
	});
	// scroll
	$(".inicio-slider-bajar-btn a").on('click', function(event) {
		if (this.hash !== "") { // Make sure this.hash has a value before overriding default behavior
			event.preventDefault(); // Prevent default anchor click behavior
			var hash = this.hash; // Store hash
			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
			scrollTop: $(hash).offset().top
			}, 800, function(){
			window.location.hash = hash; // Add hash (#) to URL when done scrolling (default click behavior)
			});
		} // End if
	});
});