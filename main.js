$(document).ready(function () {
	$(".spot").on("click", function (e) {
		e.preventDefault();

		var clicked_spot = $(this);
		var description = clicked_spot.data("description");
		var audio = clicked_spot.data("audio");



		$(".modal").find(".inner").find("p").text(description);
		$(".modal").find(".inner").find(".audio").html(audio);
		$(".modal").addClass("active");



			console.log(audio)
	});
	$(".close").on("click", function (e) {
		e.preventDefault();

		$(".modal").removeClass("active");
	});

});
