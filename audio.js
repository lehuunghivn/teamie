ids = new Array(2); 
function aud_play_pause(idNumber) {
  var clickedAudio = document.getElementById(idNumber);

  for (var i = 0; i < ids.length; i++) {
    if ((i + 1) == idNumber && clickedAudio.currentTime == 0) { 
      clickedAudio.play(); 
    } else { 
      document.getElementById(i + 1).pause(); 
      document.getElementById(i + 1).currentTime = 0; 
    }

  }

}
