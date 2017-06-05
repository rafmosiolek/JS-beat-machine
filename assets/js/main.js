// global variables
window.onload = function() {
  console.log("JS Beat Machine ready.");


  // declare variables
  var e;
  var padboard = document.querySelector(".pads");
  var pad = document.querySelectorAll(".pad");














  function searchKeyPress(e) {
    e = e || window.event;

    if (e.keyCode === 113) {
      clap113.play();
      console.log("Q");
    }


  }


  var preload;

  function init() {
    if (!createjs.Sound.initializeDefaultPlugins()) {
      document.getElementById("error").style.display = "block";
      document.getElementById("content").style.display = "none";
      return;
    }

  //examples.showDistractor("content");
  var assetsPath = "../audio/";
  // var sounds = [
  //   {src: "Game-Break.ogg", id: 1},
  //   {src: "Game-Spawn.ogg", id: 2},
  //   {src: "Game-Shot.ogg", id: 3},

  //   {src: "GU-StealDaisy.ogg", id: 4},
  //   {src: "Humm.ogg", id: 5},
  //   {src: "R-Damage.ogg", id: 6},

  //   {src: "Thunder1.ogg", id: 7},
  //   {src: "S-Damage.ogg", id: 8},
  //   {src: "U-CabinBoy3.ogg", id: 9},

  //   {src: "ToneWobble.ogg", id: 10},
  //   {src: "Game-Death.ogg", id: 11},
  //   {src: "Game-Break.ogg", id: 12}  //OJR would prefer a new sound rather than a copy
  // ];

  // var sounds = [
  // {src: "sounds/clap.wav", id: 113},
  // {src: "sounds/hihat.wav", id: 119},
  // {src: "sounds/kick.wav", id: 101},
  // {src: "sounds/openhat.wav", id: 97},
  // {src: "sounds/boom.wav", id: 115},
  // {src: "sounds/ride.wav", id: 100},
  // {src: "sounds/snare.wav", id: 122},
  // {src: "sounds/tom.wav", id: 120},
  // {src: "sounds/tink.wav", id: 99}
  // ];

    // create a preloader to load the images.
  var loader = new createjs.LoadQueue(false);
  
  // when all images are loaded call the handleAllImageLoaded function.
  loader.on('complete', handleAllImagesLoaded, this);
  
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


  createjs.Sound.alternateExtensions = ["mp3"]; // add other extensions to try loading if the src file extension is not supported
  createjs.Sound.addEventListener("fileload", createjs.proxy(soundLoaded, this)); // add an event listener for when load is completed
  createjs.Sound.registerSounds(sounds, assetsPath);
}

function soundLoaded(event) {
  //examples.hideDistractor();
  var div = document.getElementById(event.id);
  div.style.backgroundImage = "url('../_assets/art/audioButtonSheet.png')";
}

function stop() {
  if (preload != null) {
    preload.close();
  }
  createjs.Sound.stop();
}

function playSound(target) {
  //Play the sound: play (src, interrupt, delay, offset, loop, volume, pan)
  var instance = createjs.Sound.play(target.id);
  if (instance == null || instance.playState == createjs.Sound.PLAY_FAILED) {
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