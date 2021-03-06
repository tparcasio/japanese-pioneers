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

	//When the navbar links are clicked, animate a page scroll down to that anchor
	  	$(document).on("click", ".page-scroll", function() {
	     	 event.preventDefault(); //Elimiates flashing

	     	 var href = $(this).attr("href");

	      	$("body").animate({
	        	  scrollTop: $(href).offset().top
	     	 }, 1000);
	 	 });

  	//Use Bootstrap scrollspy to change the navbar links on scroll
  	$('body').scrollspy({ target: '#mainNav' });

	//Wiki ajax request
	$(document).on("click", "#term", function() {
		var term = $(this).html();
		var term = term.replace(/ /g, "_");

		$.ajax({
			type: "GET",
			url: "https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=" + term + "&callback=?",
	        contentType: "application/json; charset=utf-8",
	        dataType: "json",
			success: function(lookup) {
				var blurb = $("#wiki-info").html(lookup.parse.text["*"]);

				// remove links as they will not work
	            blurb.find('a').each(function() { $(this).replaceWith($(this).html()); });
	 
	            // remove any references
	            blurb.find('sup').remove();
	 
	            // remove cite error
	            blurb.find('.mw-ext-cite-error').remove();
	            $('#wiki-info').html($(blurb).find('p'));
			},
			error: function() {
				alert("Error contacting Wiki");
			}
		});

	});

	
});