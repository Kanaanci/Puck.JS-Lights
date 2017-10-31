  function getSpeech() {
     var recog = new webkitSpeechRecognition();
recog.lang = 'en-us';
recog.continuous = false;
recog.interimResults = false;
recog.maxAlternative = 5;
recog.onresult = function(e) {
   document.getElementById('saying').innerText = e.results[0][0].transcript;
};
recog.start();
   }