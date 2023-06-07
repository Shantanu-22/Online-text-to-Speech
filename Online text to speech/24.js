document.querySelector("input")
        .addEventListener("change", function () 
        {
            var fr = new FileReader();
            fr.readAsText(this.files[0]);
            fr.onload = function (e)    
            {
                var textArea = document.querySelector("textarea");
                textArea.value = e.target.result;
            };  
        });
        const voiceList = document.getElementById("sel");
        let synth = speechSynthesis;
        voices();
    function voices(){
    for(let voice of synth.getVoices()){
    let selected = voice.name === "Google US English" ? "selected" : "";
    let option = `<option value="${voice.name}" ${selected}>${voice.name} (${voice.lang})</option>`;
    voiceList.insertAdjacentHTML("beforeend", option);
    }
    }
    synth.addEventListener("voiceschanged", voices);
        var isSpeaking = false;
        var speech = new SpeechSynthesisUtterance();
        function speakInputText() {
            isSpeaking = true;
            for(let voice of synth.getVoices()){
                if(voice.name === voiceList.value){
                    speech.voice = voice;
                }
            }
            speech.text = document.querySelector("textarea").value;
            speechSynthesis.speak(speech);
          }
          function stopSpeech() {
            isSpeaking = false;
            speechSynthesis.cancel();
          }
          speech.rate=1;
          function changeVoiceSpeed(voiceSpeed) {
            // For some reason, speed below 0.5 doesn't work
            if (voiceSpeed == "0.5") {
              speech.rate = 0.5;
            } else if (voiceSpeed == "1") {
              speech.rate = 1;
            } else if (voiceSpeed == "1.25") {
              speech.rate = 1.25;
            } else if (voiceSpeed == "1.5") {
              speech.rate = 1.5;
            }
            }
