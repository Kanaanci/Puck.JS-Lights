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
	   	case "color one":
	   		shootIR(colors.R1);
	   		break;
	   	case "color to":
	   		shootIR(colors.R2);
	   		break;
	   	case "color 3":
	   		shootIR(colors.R3);
	   		break;
	   	case "color 4":
	   		shootIR(colors.R4);
	   		break;
	   	case "color 5":
	   		shootIR(colors.R5);
	   		break;
	   // Color codes green
	   	case "color 6":
	   		shootIR(colors.G1);
	   		break;
	   	case "color 7":
	   		shootIR(colors.G2);
	   		break;
	   	case "color 8":
	   		shootIR(colors.G3);
	   		break;
	   	case "color 9":
	   		shootIR(colors.G4);
	   		break;
	   	case "color 10":
	   		shootIR(colors.G5);
	   		break;
	   	// Color codes blue
	   	case "color 11":
	   		shootIR(colors.B1);
	   		break;
	   	case "color 12":
	   		shootIR(colors.B2);
	   		break;
	   	case "color 13":
	   		shootIR(colors.B3);
	   		break;
	   	case "color 14":
	   		shootIR(colors.B4);
	   		break;
	   	case "color 15":
	   		shootIR(colors.B5);
	   		break;
	   	//Color code white
	   	case "color 16":
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
