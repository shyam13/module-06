$(document).ready(function(){
	
	$("#generate").on("click", function(){
				
		var title = "WELCOME HERE!!";
		var message = "JUST WANTED TO SAY HI!!!";
		var	icon = "fa-check-circle";
		var	color = "text-success";
				

		notify(title, icon, color, message);
	});
	
	notify = function(title, icon, color, message){
		$("#notification .modal-body").text(message);
		$("#notification .modal-title").html('<i class="' + color + ' fa ' + icon + '"></i>&nbsp;' + title);

		$("#notification").modal("show");
	}
	
});