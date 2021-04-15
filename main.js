var day = document.querySelector("button");
  var night = document.querySelector("night");
  var body = document.querySelector("body");

function changeDay(event) {
  if (document.body.classList.contains('night')) {
    document.body.classList.remove('night');
    document.body.classList.add('day');
    console.log("clicked");
  } else {

    document.body.classList.add('day');
    console.log("clicked");
  }
  
}

function changeNight(event) {
  if (document.body.classList.contains('day')) {
    document.body.classList.remove('day');
    document.body.classList.add('night');
    console.log("clicked");
  } else {
    document.body.classList.add('night');
    console.log("clicked");
  }

}
             
day.addEventListener('click', changeDay);
night.addEventListener('click', changeNight);  
