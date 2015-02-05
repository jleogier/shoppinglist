$(document).ready(function() {	


	$("#submitButton").click(function(e){
		e.preventDefault();

		item = $("#itemEntered").val();
		$("#itemEntered").val('');

		$("#list").append("<li>" + item + "</li>");
		console.log(item);		
	});
	





//	$('ul').on('click', 'li', function(clicked) {
//		$("li").remove();
//	});


	$('#list').on('dblclick', 'li', function(e) {	
		$(e.target).remove();
	});

	$('#list').on('click', 'li', function(e){
		$(e.target).addClass('completed');
	});





});