$(document).ready(function(){

	//Swap out "affix-top" class for "affix"
	$(window).on("scroll", function() {
      var scrollDistance = $(window).scrollTop();

      if (scrollDistance > 50) {
          $("#mainNav")
            .removeClass("affix-top")
            .addClass("affix");
      } else {
          $("#mainNav")
            .removeClass("affix")
            .addClass("affix-top");
      }
  });

	//Wiki ajax request
	$(document).on("click", "#term", function() {
		var term = $(this).html();
		var term = term.replace(/ /g, "_");

		alert(term);

		// $.ajax({
		// 	type: "GET",
		// 	url: "https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=Jimi_Hendrix",
		// 	success: function(lookup) {
		// 		//Handlebars tempalte
		// 		HANDLE.renderTemplate({
		// 			templateSource: "#wiki-template",
		// 			data: lookup,
		// 			where: "#wiki-info",
		// 			clearOriginal: true
		// 		});
		// 	},
		// 	error: function() {
		// 		alert("Error contacting Wiki");
		// 	}
		// });

	});

	
});