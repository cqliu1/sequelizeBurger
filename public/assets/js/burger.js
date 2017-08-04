// add new burger
$("#burgers-submit").on("click", function(event) {
	event.preventDefault();

	var newBurger = {
		burger_name: $("#burger").val().trim(),
		devoured: false
	}

	$.post('/', newBurger)
	.done(function() {
		console.log("Inserted new burger.");
		location.reload();
	});
});

// update burger
$(".devour").on("click", function(event) {
	event.preventDefault();

	var newBurger = {
		id: $(this).attr("id"),
		burger_name: $(this).attr("data-burger"),
		devoured: true
	}

	$.ajax({
	    url: '/',
	    type: 'PUT',
	    data: newBurger,
	    success: function(result) {
	        console.log("Devoured burger.");
	        location.reload();
	    }
	});

	// $.put('/', newBurger)
	// .done(function() {
	// 	console.log("Devoured burger.");
	// });
});