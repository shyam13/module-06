function myFunction(){
    var username = document.getElementById("username").value;
    if (username == "") {
        document.getElementById("helpUser").innerHTML="INVALID STATE";
    }
}

$(document).ready(function(){
	
	$("#notification-type").on("click", ".btn", function(){
		$(this).parent().find(".btn-primary").removeClass("btn-primary");
		$(this).removeClass().addClass("btn btn-primary");
		$("#generate").removeClass("disabled");
	});

	$("#generate").on("click", function(){
		
		if($("#notification-title").val() == "" || $("#notification-message").val() == "") return;
		
		var title = $("#notification-title").val();
		var message = $("#notification-message").val();
		var type = $(".btn-group .btn-primary").text();
		var icon, color;
		switch (type){
				case "Success":
					icon = "fa-check-circle";
					color = "text-success";
					break;
				case "Info":
					icon = "fa-info-circle";
					color = "text-info";
					break;
				case "Warning":
					icon = "fa-exclamation-triangle";
					color = "text-warning";
					break;
				case "Error":
					icon = "fa-exclamation-circle";
					color = "text-danger";
					break;
			default:
		}

		notify(title, icon, color, message);
	});
	
	notify = function(title, icon, color, message){
		$("#notification .modal-body p").text(message);
		$("#notification .modal-title").html('<i class="' + color + ' fa ' + icon + '"></i>&nbsp;' + title);

		$("#notification").modal("show");
	}
	
});