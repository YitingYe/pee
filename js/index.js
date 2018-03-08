function addIntroduction(){
  var intro = document.getElementById("pee");
  intro.onmouseover = function(){
    moveLogo();
  }
}
addIntroduction();

function moveLogo(){
  var introduction = document.getElementById("introduction")
  var logo = document.getElementById("logo");

  // introduction.style.display = "block";
  introduction.classList.add("move");
  logo.classList.add("move");
}

// var btn = document.querySelector(".navbar")
// btn.onmousemove = function(e) {
//   var x = e.pageX - btn.offsetLeft - btn.offsetParent.offsetLeft
//   var y = e.pageY - btn.offsetTop - btn.offsetParent.offsetTop
//   btn.style.setProperty('--x', x + 'px')
//   btn.style.setProperty('--y', y + 'px')
// }

function moreDetail(){
  var detail = document.getElementById("detail");
  var btnmore = document.getElementById("btnmore");
  var btnless = document.getElementById("btnless");
  detail.classList.remove("more");
  btnmore.classList.add("none");
  btnless.classList.remove("none");
}

function lessDetail(){
  var detail = document.getElementById("detail");
  var btnmore = document.getElementById("btnmore");
  var btnless = document.getElementById("btnless");
  detail.classList.add("more");
  btnmore.classList.remove("none");
  btnless.classList.add("none");
}