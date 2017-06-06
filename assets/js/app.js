window.onload = function(){

	// Create new AudioContext.
	var context = new AudioContext();

	// Load audio files.
	// Accept pad button element as an object.
	// Accept the URL for the audio file.
	function loadAudio(object, url) {
		var request = new XMLHttpRequest();
		// Specify "GET" method for communicating.
		// Specify URL for the audio file.
		// Designate an asynchronous request.
		request.open("GET", url, true);
		// Handle the binary audiofile.
		request.responseType = "arraybuffer";

		// Decode the audio for use within the AudioContext asynchronously.
		request.onload = function() {
			// request.response stores an audio file that is to decode.
			context.decodeAudioData(request.response, function(buffer){
				object.buffer = buffer;
			});	
		};
		request.send();
	}

	function addAudioProperties(object) {
		// set the value for the name property matching the button id attribute.
		object.name = object.id;
		object.source = $(object).data("sound");
		loadAudio(object, object.source);
		object.play = function() {
			var s = context.createBufferSource();
			s.buffer = object.buffer;
			s.connect(context.destination);
			s.start(0);
			object.s = s;
		};
	}





}; // end window.onload