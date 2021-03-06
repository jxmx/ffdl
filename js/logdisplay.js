//
// Display QSOs
//

// update function
function updateDisplayLog(hide){

	var path = window.location.pathname;
	var page = path.split("/").pop();
	const hpages = [ "board.html" ];

	if( hpages.includes(page) ){
		var qsa = "?hidebuttons=y";
	} else {
		var qsa = "";
	}

    $.ajax({
        type: "get",
        url: "api/displaylog.php" + qsa,
        success: function(output) {
            $("#logdisplay").html(output);
        },
        failure: function(output) {
            $("#logdisplay").html(output);
        }
    });
}

// set the timer
window.addEventListener("load", function(){
    updateDisplayLog();
    setInterval(updateDisplayLog, 15000);
});

// refresh the QSOs when the window comes back into focus (e.g. after edit)
window.addEventListener("focus", function(){
    updateDisplayLog();
});

