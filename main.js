// var night = document.querySelector('#night-toggle').addEventListener("click", function() {
//   document.getElementById("sun").innerHTML = "Hello World";
// });

// console.log('hi');


//     // var day = document.querySelector('.day');
//     // var night = document.querySelector('.night');
//     // var circle = document.getElementById("sun");
//     // var sky = document.getElementById("body");
//     // var colors = ["#D5F3FE","#343F8A"];

//     // function today() {
//     //     circle.css("id", "sun");
//     //     sky.style.backgroundColor = colors[0];
//     //   }
      
//     // function tonight() {
//     //     circle.css("id", "moon");
//     //     sky.style.backgroundColor = colors[1];
//     //   }


//     // day.addEventListener('click', today);
//     // night.addEventListener('click', tonight);


//      var circle = document.getElementById("sun");
//     var sky = document.getElementById("body");
//     var colors = ["#D5F3FE","#343F8A"];

//     function day() {
//         circle.setAttribute("id", "sun");
//         sky.style.backgroundColor = colors[0];
//       }
//       function night() {
//         circle.setAttribute("id", "moon");
//         sky.style.backgroundColor = colors[1];
//       }

var sun = document.querySelector('.sun');
var moon = document.querySelector('.moon');
var body = document.querySelector('body');
var div = document.querySelector('div');
var clickday = document.querySelector('.clickday');
var clicknight = document.querySelector('.clicknight');
 
//  function today(){
//   document.body.css('backgroundColor', '#D5F3FE');
//   div.classList.remove('moon');
//   div.classList.add('sun');

//  }

//  function tonight(){
//   document.body.css('backgroundColor', '#343F8A');
//   div.classList.remove('sun');
//   div.classList.add('moon');
// }

clickday.classList(function(event) {
  document.body.css('backgroundColor', '#D5F3FE');
  div.classList.remove('moon');
  div.classList.add('sun');
});


clicknight.classList(function(event){
  document.body.css('backgroundColor', '#343F8A');
  div.classList.remove('sun');
  div.classList.add('moon');
});
