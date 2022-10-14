export function burger() {
	$(document).ready(function () {

		$(".cross").hide();
		// $(".nav__btn-box").hide(); 
		$(".hamburger").click(function () {
			$(".nav__btn-box").slideToggle("slow", function () {
				$(".hamburger").hide();
				$(".cross").show();
			});
		});

		$(".cross").click(function () {
			$(".nav__btn-box").slideToggle("slow", function () {
				$(".cross").hide();
				$(".hamburger").show();
			});
		});

	});
}

