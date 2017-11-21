// Googles speech to text functions
function getSpeech() {
	var recog = new webkitSpeechRecognition();
	recog.lang = 'en-us';
	recog.continuous = false;
	recog.interimResults = false;
	recog.maxAlternative = 5;

	recog.onresult = function(e) {
	   document.getElementById('saying').innerText = e.results[0][0].transcript;

	   // If speech to text is equivalent to these strings
	   switch(e.results[0][0].transcript) {
	   	 // Power codes
	   	case "on":
	   		shootIR(power.on);
	   		break;
	   	case "off": 
	   		shootIR(power.off);
	   		break;
	   // Color codes red
	   	case "R1":
	   		shootIR(colors.R1);
	   		break;
	   	case "R2":
	   		shootIR(colors.R2);
	   		break;
	   	case "R3":
	   		shootIR(colors.R3);
	   		break;
	   	case "R4":
	   		shootIR(colors.R4);
	   		break;
	   	case "R5":
	   		shootIR(colors.R5);
	   		break;
	   // Color codes green
	   	case "G1":
	   		shootIR(colors.G1);
	   		break;
	   	case "G2":
	   		shootIR(colors.G2);
	   		break;
	   	case "G3":
	   		shootIR(colors.G3);
	   		break;
	   	case "G4":
	   		shootIR(colors.G4);
	   		break;
	   	case "G5":
	   		shootIR(colors.G5);
	   		break;
	   	// Color codes blue
	   	case "B1":
	   		shootIR(colors.B1);
	   		break;
	   	case "B2":
	   		shootIR(colors.B2);
	   		break;
	   	case "B3":
	   		shootIR(colors.B3);
	   		break;
	   	case "B4":
	   		shootIR(colors.B4);
	   		break;
	   	case "B5":
	   		shootIR(colors.B5);
	   		break;
	   	//Color code white
	   	case "White":
	   		shootIR(colors.W1);
	   		break;
	   	//Effects
	   	case "dimmer":
	   		shootIR(effects.dim);
	   		break;
	   	case "brighter":
	   		shootIR(effects.bright);
	   		break;
	   	case "Flash":
	   		shootIR(effects.flash);
	   		break;
	   	case "strobe":
	   		shootIR(effects.strobe);
	   		break;
	   	case "fade":
	   		shootIR(effects.fade);
	   		break;
	   	case "smooth":
	   		shootIR(effects.smooth);
	   		break;
	   	default:
	   		break;
	   }
	};
	recog.start();
  }