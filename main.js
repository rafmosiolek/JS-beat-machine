// global variables


var e;
var padboard = document.querySelector(".pads");
var pad = document.querySelectorAll(".pad");




var sounds = [
    {src: "sounds/clap.wav", id: 113},
    {src: "sounds/hihat.wav", id: 119},
    {src: "sounds/kick.wav", id: 101},
    {src: "sounds/openhat.wav", id: 97},
    {src: "sounds/boom.wav", id: 115},
    {src: "sounds/ride.wav", id: 100},
    {src: "sounds/snare.wav", id: 122},
    {src: "sounds/tom.wav", id: 120},
    {src: "sounds/tink.wav", id: 99}
];











function searchKeyPress(e) {
    e = e || window.event;

    if (e.keyCode === 113) {
        clap113.play();
        console.log("Q");
    }


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