
				
	$.getJSON("https://api.ipify.org?format=json", function(data) {
		
		// Setting text of element P with id gfg
		$("#gfg").html(data.ip);
	})


