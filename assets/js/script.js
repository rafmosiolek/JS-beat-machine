window.onload = function(){
    console.log("Program is running.");

    // declare variables

    var clap, hihat, kick, openhat, boom, ride, snare, tom, tink;



    clap = new Audio("assets/sounds/clap.wav");
    hihat = new Audio("assets/sounds/hihat.wav");
    kick = new Audio("assets/sounds/kick.wav");
    openhat = new Audio("assets/sounds/openhat.wav");
    boom = new Audio("assets/sounds/boom.wav"); 
    ride = new Audio("assets/sounds/ride.wav");
    snare = new Audio("assets/sounds/snare.wav");
    tom = new Audio("assets/sounds/tom.wav");
    tink = new Audio("assets/sounds/tink.wav");












};






<audio id="multiaudio1" src="audio/flute_c_long_01.wav" preload="auto"></audio>
<audio id="multiaudio2" src="audio/piano_chord.wav" preload="auto"></audio>
<audio id="multiaudio3" src="audio/synth_vox.wav" preload="auto"></audio>
<audio id="multiaudio4" src="audio/shimmer.wav" preload="auto"></audio>
<audio id="multiaudio5" src="audio/sweep.wav" preload="auto"></audio>

<a href="javascript:play_multi_sound('multiaudio1');">Flute</a><br />
<a href="javascript:play_multi_sound('multiaudio2');">Piano Chord</a><br />
<a href="javascript:play_multi_sound('multiaudio3');">Synth Vox</a><br />
<a href="javascript:play_multi_sound('multiaudio4');">Shimmer</a><br />
<a href="javascript:play_multi_sound('multiaudio5');">Sweep</a><br />

<script type="text/javascript">
    var channel_max = 10;                                       // number of channels
    audiochannels = new Array();
    for (a=0;a<channel_max;a++) {                                   // prepare the channels
        audiochannels[a] = new Array();
        audiochannels[a]['channel'] = new Audio();                      // create a new audio object
        audiochannels[a]['finished'] = -1;                          // expected end time for this channel
    }
    function play_multi_sound(s) {
        for (a=0;a<audiochannels.length;a++) {
            thistime = new Date();
            if (audiochannels[a]['finished'] < thistime.getTime()) {            // is this channel finished?
                audiochannels[a]['finished'] = thistime.getTime() + document.getElementById(s).duration*1000;
                audiochannels[a]['channel'].src = document.getElementById(s).src;
                audiochannels[a]['channel'].load();
                audiochannels[a]['channel'].play();
                break;
            }
        }
    }
</script>
    




  function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }
  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }
  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);





    // loader.loadManifest([
  //   {id: 113, src: "assets/sounds/clap.wav"},
  //   {id: 119, src: "assets/sounds/hihat.wav"},
  //   {id: 101, src: "assets/sounds/kick.wav"},
  //   {id: 97, src: "assets/sounds/openhat.wav"},
  //   {id: 115, src: "assets/sounds/boom.wav"},
  //   {id: 100, src: "assets/sounds/ride.wav"},
  //   {id: 122, src: "assets/sounds/snare.wav"},
  //   {id: 120, src: "assets/sounds/tom.wav."},
  //   {id: 90, src: "assets/sounds/tink.wav"}
  //   ]);
