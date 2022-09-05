var waypoint = new Waypoint({
  element: document.getElementById('test'),
  handler: function() {
    let test = $('#click').text();
    let ortest = parseInt(test);
    let start = ortest-10;
   	for (var i = start; i < ortest; i++) {
   		setTimeout(function(){
   			console.log(i);
   		},5000);
   	}
  }
})
