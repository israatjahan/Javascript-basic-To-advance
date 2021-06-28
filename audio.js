for (var i = 0; i < 3; i++) {
  document
    .querySelectorAll(".myAudio")
    [i].addEventListener("click", function () {
      var text = this.innerHTML;
      console.log(text);
      audioPlay(text);
    });
}
function audioPlay(text) {
  switch (text) {
    case "audio 1":
      var audio = new audio("a.mp3");
      audio.play();
      break;

    case "audio 2":
      var audio = new audio("b.mp3");
      audio.play();
      break;
    case "audio 3":
      var audio = new audio("3.mp3");
      audio.play();
      break;
  }
}

//  without function

for (var i = 0; i < 3; i++) {
  document
    .querySelectorAll(".myAudio")
    [i].addEventListener("click", function () {
      var text = this.innerHTML;
      console.log(text);

      switch (text) {
        case "audio 1":
          var audio = new audio("a.mp3");
          audio.play();
          break;

        case "audio 2":
          var audio = new audio("b.mp3");
          audio.play();
          break;
        case "audio 3":
          var audio = new audio("3.mp3");
          audio.play();
          break;
      }
    });
}
