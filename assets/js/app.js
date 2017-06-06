window.onload = function(){

	// Create new AudioContext.
	var context = new AudioContext();


	$(function() {
		// jQuery selects each of the button elements and iterate over every one, calling the addAudioProperties() function on each.
		$('#pads button').each(function() {
			addAudioProperties(this);
		});
		// jQuery selects each of the button elements and listen for a click event. If the event occurs, calls the button element object’s play() method.
		$('#pads button').click(function() {
			this.play();

		});
	});

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
		// set the source property to match the value of the HTML data-sound attribute.
		object.source = $(object).data("sound");
		// load the audio file to the buffer.
		loadAudio(object, object.source);
		// add AudioContext method for a gain node.
		object.volume = context.createGain();
		
		object.play = function() {
			// place a new node in the AudioContext Interface.
			var s = context.createBufferSource();
			// set the node's source property.
			s.buffer = object.buffer;
			// connect the audio source to system's default audio output (usually speakers or headphones).
			s.connect(context.destination);
			// ...
			object.volume.connect(context.destination);
			// play the sound.
			s.start(0);
			// attach the audio source to the pad object's s property.
			object.s = s;
		};
	}




}; // end window.onload