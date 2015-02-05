$(document).ready(function() {	


	$("#submitButton").click(function(e){
		e.preventDefault();

		item = $("#itemEntered").val();
		$("#itemEntered").val('');

		$("#list").append("<li>" + item + "</li>");
		console.log(item);		
	});


	$('#list').on('dblclick', 'li', function(e) {	
		$(e.target).remove();
	});

	$('#list').on('click', 'li', function(e){
		$(e.target).addClass('completed');
	});
	
});