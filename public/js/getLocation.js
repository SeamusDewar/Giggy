function getLocation(){

	 console.log("Function called");
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://us-central1-ct216giggy.cloudfunctions.net/getlocation');

// Track the state changes of the request.
    xhr.onreadystatechange = function () {
		const params = new URLSearchParams(window.location.search);
		const userID = params.get('uid');
        var DONE = 4; // readyState 4 means the request is done.
        var OK = 200; // status 200 is a successful return.
        if (xhr.readyState === DONE) {
            if (xhr.status === OK) {
                var sHTML = "";
                var data = JSON.parse(xhr.responseText);
				for(var i=0; i<data.length; i++)
                {
					if(data[i].uid===userID){
						var latlon = data[i].latitude + "," + data[i].longitude;

						var img_url = "https://maps.googleapis.com/maps/api/staticmap?center=
						"+latlon+"&zoom=14&size=400x300&sensor=false&key=YOUR_KEY";
						
						response.innerHTML =  "<img src='"+img_url+"'>";
				}
			}
			
            } else {
                console.log('Error: ' + xhr.status); // An error occurred during the request.
            }
		}
    };
 
    xhr.send(null);

}

// W3C Schools
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}