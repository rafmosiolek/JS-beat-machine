// global variables
window.onload = function() {
  console.log("JS Beat Machine ready.");


  // declare variables
  var e;
  var padboard = document.querySelector(".pads");
  var pad = document.querySelectorAll(".pad");


  // create a preloader to load the sounds.
  var loader = new createjs.LoadQueue();
  // install the SoundJS Sound to preload audio.
  loader.installPlugin(createjs.Sound);
  // add additional extension when .wav not supported.
  createjs.Sound.alternateExtensions = ["mp3"];
  // when all sounds are loaded call the handleComplete function.
  loader.on("complete", handleComplete, this);
  // provide a manifest of files and ids to be loaded.
  loader.loadManifest([
    {id: 113, src: "sounds/clap.wav"},
    {id: 119, src: "sounds/hihat.wav"},
    {id: 101, src: "sounds/kick.wav"},
    {id: 97, src: "sounds/openhat.wav"},
    {id: 115, src: "sounds/boom.wav"},
    {id: 100, src: "sounds/ride.wav"},
    {id: 122, src: "sounds/snare.wav"},
    {id: 120, src: "sounds/tom.wav."},
    {id: 90, src: "sounds/tink.wav"}
    ]);
  console.log("load audio");

function soundLoaded(event) {
  //examples.hideDistractor();
  var div = document.getElementById(event.id);
  div.style.backgroundImage = "url('../_assets/art/audioButtonSheet.png')";
}

function stop() {
  if (preload !== null) {
    preload.close();
  }
  createjs.Sound.stop();
}

function playSound(target) {
  //Play the sound: play (src, interrupt, delay, offset, loop, volume, pan)
  var instance = createjs.Sound.play(target.id);
  if (instance === null || instance.playState == createjs.Sound.PLAY_FAILED) {
    return;
  }
  target.className = "gridBox active";
  instance.addEventListener("complete", function (instance) {
    target.className = "gridBox";
  });
}

// pad.addEventListener("keypress", function(event) {
//     event.preventDefault();
//     if (event.keyCode === 113) {
//         console.log("Q pressed");
//     }
// });





// function searchKeyPress(e)
// {
//     // look for window.event in case event isn't passed in
//     e = e || window.event;
//     if (e.keyCode == 13)
//     {
//         document.getElementById('btnSearch').click();
//         return false;
//     }
//     return true;
// }





// document.getElementById("id_of_textbox")
//     .addEventListener("keyup", function(event) {
//     event.preventDefault();
//     if (event.keyCode == 13) {
//         document.getElementById("id_of_button").click();
//     }
// });




  // function removeTransition(e) {
  //   if (e.propertyName !== 'transform') return;
  //   e.target.classList.remove('playing');
  // }
  // function playSound(e) {
  //   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  //   const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  //   if (!audio) return;
  //   key.classList.add('playing');
  //   audio.currentTime = 0;
  //   audio.play();
  // }
  // const keys = Array.from(document.querySelectorAll('.key'));
  // keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  // window.addEventListener('keydown', playSound);

};