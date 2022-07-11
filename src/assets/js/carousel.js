

var prev = document.querySelector(".prev");



// window.onload = function nextslide() {
  var next = document.querySelector(".next");
  var slider = document.querySelector(".slider");
  console.log(next);
  if (next) {
    console.log("im in here");
    if(slider){
      console.log('slider loadeds');
    }
    next.addEventListener("click", function () {
      slider.style.transform = "translate(-25%)";
    });
  }
// }


function nextslide() {
  if (next) {
    console.log("im in here");
    next.addEventListener("click", function () {
      alert("clicked");
      slider.style.transform = "translate(-20%)";
    });
  }
}
if (slider) {
  slider.addEventListener("transitioned", function () {
    slider.appendChild(slider.firstElementChild);

    slider.style.transition = "none";
    slider.style.transform = "translate(0)";
    setTimeout(function () {
      slider.style.transition = "all 0.5s";
    });
  });
}
