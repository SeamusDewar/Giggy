// GET comments//clientside
function getComments()
{
console.log("Getting comments");
var xhr = new XMLHttpRequest();
xhr.open('GET', ''https://us-central1-ct216giggy.cloudfunctions.net/getcomments');


xhr.onreadystatechange = function () {
	var DONE = 4;
	var OK = 200; 
	if (xhr.readyState === DONE) {
		if (xhr.status === OK) {
			var sHTML = "";
			var data = JSON.parse(xhr.responseText);
			for(var i=0; i<data.length; i++)
			{
				sHTML += "<p> Handle: " + data[i].handle+ "</p>";
				sHTML += "<p> Comment: " + data[i].comment+ "</p>";
			}
		comments.innerHTML = sHTML;
		} else {
			console.log('Error: ' + xhr.status);
			}
			};
xhr.send(null);
}
// Invokes getComments every minute
setInterval(getComments, timeout 1000);}


<script src="javascripts/getcomments.js"></script>//need this link wheverever putting reviews/comments