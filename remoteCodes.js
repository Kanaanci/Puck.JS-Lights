var power = {
			on:[9.2,4.5,0.6,0.5,0.7,0.5,0.6,0.5,0.7,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.7,0.5,0.6,1.6,0.6,1.6,0.6,1.6,0.6,1.6,0.6,1.6,0.6,1.6,0.6,1.6,0.7,1.6,0.6,1.6,0.6,0.5,0.6,1.6,0.6,1.6,0.6,0.5,0.7,0.5,0.6,0.5,0.7,0.5,0.6,0.5,0.7,1.6,0.7,0.5,0.6,0.5,0.6,1.6,0.7,1.6,0.7,1.6,0.6,1.6,0.6],
			off:[9.1,4.5,0.6,0.5,0.7,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.7,0.5,0.6,0.5,0.7,0.5,0.6,1.6,0.6,1.7,0.6,1.7,0.6,1.6,0.6,1.6,0.6,1.6,0.7,1.6,0.6,1.6,0.6,1.6,0.6,1.6,0.6,1.6,0.6,1.6,0.6,1.7,0.6,0.5,0.7,0.5,0.6,0.5,0.7,0.5,0.6,0.5,0.7,0.5,0.6,0.5,0.7,0.5,0.6,1.6,0.6,1.7,0.6,1.6,0.6,39.9,9.2,2.2,0.7]
		};
  
		var colors = {
			R1:[9.2,4.5,0.6,0.5,0.6,0.5,0.7,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.7,0.5,0.6,0.5,0.6,1.6,0.6,1.6,0.6,1.6,0.6,1.6,0.6,1.6,0.6,1.6,0.6,1.6,0.6,1.7,0.6,1.6,0.6,0.5,0.7,0.5,0.6,1.6,0.6,1.7,0.6,0.5,0.6,0.5,0.7,0.5,0.6,0.5,0.7,1.6,0.7,1.6,0.7,0.5,0.6,0.5,0.7,1.6,0.7,1.6,0.6,1.6,0.6,39.9,9.1,2.2,0.6,97.2,9.1,2.2,0.6],
			R2: [9.1,4.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,1.7,0.6,1.7,0.6,1.7,0.6,1.7,0.6,1.7,0.6,1.7,0.6,1.7,0.6,1.7,0.6,1.7,0.6,1.7,0.6,1.7,0.6,0.5,0.6,1.7,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,1.6,0.6,0.5,0.6,1.7,0.6,1.7,0.6,1.7,0.6,39.9,9.1,2.2,0.6],
			R3: [9.1,4.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,1.6,0.6,1.6,0.6,1.6,0.6,1.7,0.6,1.7,0.6,1.7,0.6,1.7,0.6,1.7,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.7,0.5,0.6,1.7,0.6,0.5,0.6,1.6,0.6,1.6,0.6,1.7,0.6,1.7,0.6,1.7,0.6,1.6,0.6,0.5,0.6,1.7,0.6,39.9,9.1,2.2,0.6],
			R4: [9.1,4.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,1.6,0.6,1.6,0.6,1.6,0.6,1.7,0.6,1.7,0.6,1.7,0.6,1.7,0.6,1.7,0.6,0.5,0.6,1.7,0.6,0.5,0.6,1.7,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,1.7,0.6,0.5,0.6,1.6,0.6,0.5,0.6,1.7,0.6,1.7,0.6,1.7,0.6,1.7,0.6,39.9,9.1,2.2,0.6],
			R5: [9.1,4.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,1.6,0.6,1.6,0.6,1.6,0.6,1.6,0.6,1.7,0.6,1.6,0.6,1.6,0.6,1.7,0.6,0.5,0.6,0.5,0.6,1.7,0.6,1.7,0.6,1.7,0.6,0.5,0.6,0.5,0.6,0.5,0.6,1.6,0.6,1.7,0.6,0.5,0.6,0.5,0.6,0.5,0.6,1.7,0.6,1.7,0.6,1.7,0.6,39.9,9.1,2.2,0.6],

			G1: [9.1,4.5,0.6,0.5,0.7,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,1.6,0.6,1.6,0.6,1.6,0.6,1.6,0.6,1.6,0.6,1.6,0.6,1.7,0.6,1.7,0.6,1.6,0.6,1.7,0.6,0.5,0.6,1.7,0.6,1.7,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,1.7,0.6,0.5,0.6,0.5,0.6,1.6,0.7,1.6,0.7,1.6,0.6,39.9,9.1,2.2,0.6],
			G2: [9.1,4.5,0.6,0.5,0.6,0.5,0.6,0.5,0.7,0.4,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,1.6,0.6,1.6,0.6,1.6,0.6,1.7,0.6,1.7,0.6,1.6,0.6,1.7,0.6,1.7,0.6,0.5,0.6,1.7,0.6,0.5,0.6,0.5,0.6,1.6,0.6,0.5,0.6,0.5,0.6,0.5,0.6,1.6,0.6,0.5,0.6,1.7,0.6,1.7,0.6,0.5,0.6,1.7,0.6,1.7,0.6,1.7,0.6],
			G3: [9.1,4.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,1.7,0.6,1.7,0.6,1.6,0.6,1.7,0.6,1.7,0.6,1.7,0.6,1.7,0.6,1.7,0.6,0.5,0.6,0.5,0.6,1.6,0.6,1.7,0.6,0.5,0.6,0.5,0.6,1.6,0.6,0.5,0.6,1.7,0.6,1.6,0.6,0.5,0.6,0.5,0.6,1.6,0.6,1.7,0.6,0.5,0.6,1.7,0.6,39.9,9.1,2.2,0.6],
			G4: [9.1,4.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,1.7,0.6,1.7,0.6,1.7,0.6,1.7,0.6,1.7,0.6,1.7,0.6,1.7,0.6,1.6,0.7,0.5,0.6,1.6,0.6,1.7,0.6,1.7,0.6,1.7,0.6,0.5,0.6,0.5,0.6,0.5,0.6,1.6,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,1.7,0.6,1.7,0.6,1.7,0.6,39.9,9.1,2.2,0.6],
			G5: [9.1,4.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,1.7,0.6,1.7,0.6,1.7,0.6,1.7,0.6,1.7,0.6,1.7,0.6,1.7,0.6,1.7,0.6,0.5,0.6,0.5,0.6,1.7,0.6,0.5,0.6,1.7,0.6,0.5,0.6,0.5,0.6,0.5,0.6,1.6,0.6,1.6,0.6,0.5,0.6,1.7,0.6,0.5,0.6,1.7,0.6,1.7,0.6,1.7,0.6,39.9,9.1,2.2,0.6],
	  
			B1:[9.1,4.5,0.6,0.5,0.6,0.5,0.7,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,1.6,0.6,1.6,0.6,1.6,0.7,1.6,0.6,1.6,0.6,1.6,0.6,1.6,0.6,1.7,0.6,1.6,0.6,0.5,0.6,0.5,0.7,0.4,0.6,1.6,0.6,0.5,0.7,0.5,0.6,0.5,0.7,0.5,0.6,1.6,0.6,1.7,0.6,1.7,0.6,0.5,0.7,1.6,0.6,1.6,0.6,1.6,0.6],
			B2: [9.1,4.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,1.6,0.6,1.7,0.6,1.7,0.6,1.7,0.6,1.7,0.6,1.7,0.6,1.6,0.6,1.7,0.6,0.5,0.6,1.7,0.6,1.7,0.6,0.5,0.6,1.7,0.6,0.5,0.6,0.5,0.6,0.5,0.6,1.6,0.6,0.5,0.6,0.5,0.6,1.6,0.6,0.5,0.6,1.7,0.6,1.7,0.6,1.7,0.6,39.9,9.1,2.2,0.6,165.1,0.1],
			B3: [9.2,4.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,1.6,0.6,1.6,0.6,1.6,0.6,1.7,0.6,1.7,0.6,1.7,0.6,1.7,0.7,1.6,0.6,0.5,0.7,0.5,0.6,1.7,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,1.6,0.6,1.6,0.7,0.4,0.6,1.6,0.6,1.6,0.6,1.7,0.6,1.7,0.6,1.7,0.6,40.0,9.1,2.2,0.6],
			B4: [9.1,4.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,1.7,0.6,1.7,0.6,1.7,0.6,1.7,0.6,1.6,0.6,1.7,0.6,1.7,0.6,1.7,0.6,0.5,0.6,1.7,0.6,1.7,0.6,1.7,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,1.7,0.6,0.5,0.6,0.5,0.6,0.5,0.6,1.6,0.6,1.6,0.6,1.7,0.6,1.7,0.6,40.0,9.1,2.2,0.6],
			B5: [9.1,4.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,1.6,0.6,1.6,0.6,1.7,0.6,1.7,0.6,1.7,0.6,1.7,0.6,1.7,0.6,1.7,0.6,1.6,0.6,1.7,0.6,1.7,0.6,1.7,0.6,0.5,0.6,0.5,0.7,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,1.7,0.6,1.7,0.6,1.7,0.6,1.7,0.6,39.9,9.1,2.2,0.6],
	  
			W1: [9.1,4.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,1.6,0.6,1.6,0.6,1.6,0.6,1.7,0.6,1.7,0.6,1.7,0.6,1.7,0.6,1.7,0.6,1.6,0.6,0.5,0.6,1.7,0.6,0.5,0.6,1.7,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,1.6,0.6,0.5,0.6,1.7,0.6,0.5,0.6,1.7,0.6,1.7,0.6,1.7,0.6,40.0,9.1,2.2,0.6]
		};

		var effects = {
			dim: [9.1,4.5,0.7,0.5,0.6,0.5,0.7,0.5,0.6,0.5,0.7,0.5,0.6,0.5,0.7,0.5,0.6,0.5,0.6,1.6,0.7,1.6,0.6,1.7,0.6,1.6,0.6,1.6,0.7,1.6,0.6,1.6,0.6,1.6,0.6,1.6,0.6,0.5,0.7,1.6,0.6,1.6,0.6,1.6,0.6,0.5,0.6,0.5,0.6,0.5,0.7,0.5,0.6,1.6,0.7,0.5,0.6,0.5,0.6,0.5,0.6,1.6,0.6,1.6,0.6,1.6,0.7,39.9,9.2,2.2,0.6],
			bright: [9.2,4.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.7,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.7,1.6,0.6,1.6,0.7,1.6,0.6,1.7,0.6,1.6,0.6,1.6,0.6,1.6,0.7,1.6,0.6,1.7,0.6,0.5,0.6,0.5,0.6,1.6,0.7,0.5,0.6,0.5,0.6,0.5,0.7,0.4,0.7,0.5,0.6,1.6,0.7,1.6,0.7,0.5,0.6,1.7,0.6,1.6,0.6,1.7,0.6,1.6,0.6,39.9,9.2,2.2,0.6],
			flash: [9.1,4.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,1.7,0.6,1.7,0.6,1.7,0.6,1.7,0.6,1.7,0.6,1.7,0.6,1.7,0.6,1.7,0.6,1.7,0.6,0.5,0.6,1.7,0.6,1.7,0.6,0.5,0.6,0.5,0.6,1.6,0.6,0.5,0.6,0.5,0.6,1.6,0.6,0.5,0.6,0.5,0.6,1.6,0.6,1.7,0.6,0.5,0.6,1.7,0.6,39.9,9.1,2.2,0.7],
			strobe: [9.1,4.5,0.7,0.4,0.7,0.5,0.7,0.4,0.6,0.5,0.7,0.4,0.6,0.5,0.7,0.5,0.7,0.4,0.7,1.6,0.7,1.6,0.7,1.6,0.7,1.6,0.6,1.6,0.7,1.6,0.6,1.6,0.6,1.6,0.6,0.5,0.6,0.5,0.6,0.5,0.7,0.4,0.6,0.5,0.7,0.4,0.7,0.4,0.7,0.4,0.7,1.6,0.6,1.6,0.7,1.6,0.6,1.6,0.7,1.6,0.6,1.6,0.7,1.6,0.6,1.6,0.6,39.9,9.2,2.2,0.7],
			fade: [9.1,4.5,0.6,0.5,0.6,0.5,0.7,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,0.5,0.6,1.7,0.6,1.7,0.6,1.7,0.6,1.7,0.6,1.7,0.6,1.7,0.6,1.7,0.6,1.7,0.6,0.5,0.6,1.7,0.6,0.5,0.6,1.7,0.6,1.7,0.6,0.5,0.6,0.5,0.6,0.5,0.6,1.7,0.6,0.5,0.6,1.6,0.6,0.5,0.6,0.5,0.6,1.6,0.6,1.6,0.6,1.7,0.6,39.9,9.1,2.2,0.6],
			smooth: [9.2,4.5,0.6,0.4,0.7,0.4,0.7,0.4,0.7,0.4,0.6,0.5,0.7,0.5,0.6,0.5,0.7,0.4,0.7,1.6,0.7,1.6,0.7,1.6,0.7,1.6,0.7,1.6,0.7,1.6,0.7,1.6,0.6,1.6,0.7,0.4,0.6,0.5,0.6,1.6,0.7,1.6,0.7,0.4,0.7,0.4,0.6,0.5,0.7,0.4,0.7,1.6,0.6,1.6,0.7,0.4,0.7,0.5,0.6,1.6,0.6,1.6,0.7,1.6,0.7,1.6,0.6,39.9,9.1,2.2,0.6]
		};

function getSpeech() {
    var recog = new webkitSpeechRecognition();
	recog.lang = 'en-us';
	recog.continuous = false;
	recog.interimResults = false;
	recog.maxAlternative = 5;
	recog.onresult = function(e) {
		document.getElementById('saying').innerText = e.results[0][0].transcript;

}		alert(e.results[0][0].transcript);
	recog.start();
}

function shootIR(array){
	Puck.write('Puck.IR(['+array+']);\n')
}
