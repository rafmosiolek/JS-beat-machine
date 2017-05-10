// global variables


var e;
var padboard = document.querySelector(".pads");
var pad = document.querySelectorAll(".pad");


var clap113 = new Audio("sounds/clap.wav");
var hihat119 = new Audio("sounds/hihat.wav");
var kick101 = new Audio("sounds/kick.wav");
var openhat97 = new Audio("sounds/openhat.wav");
var boom115 = new Audio("sounds/boom.wav");
var ride100 = new Audio("sounds/ride.wav");
var snare122 = new Audio("sounds/snare.wav");
var tom120 = new Audio("sounds/tom.wav");
var tink99 = new Audio("sounds/tink.wav");








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