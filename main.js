var circle = document.getElementById("sun");
    var sky = document.getElementById("body");
    var colors = ["#D5F3FE","#343F8A"];

    function day() {
        circle.setAttribute("id", "sun");
        sky.style.backgroundColor = colors[0];
      }
      function night() {
        circle.setAttribute("id", "moon");
        sky.style.backgroundColor = colors[1];
      }