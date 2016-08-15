//Maître.js

function randomIntFromInterval(min,max)
{
	return Math.floor(Math.random()*(max-min+1)+min);
}

window.Maitre = {
	uuid: "MFea521e2e4a",
	callbacks: {
	  afterSuccess: function(data, form) {
	  	$('div#maitre-content.show').addClass('modal');
	  	$('div#maitre-content.show').modal();
	  	// $('h4#maitre-people-behind-number').append(randomIntFromInterval(200,2400));
	  	// $('div#maitre-content.show').append('<a class="close" href="#" rel="modal:close">Close</a>');
	  	console.log("behind number added");
	  }
	}
};

