//video script
var overlay = document.getElementById("video-overlay"),
  video = document.getElementById("video"),
  videoPlaying = false;

function hideOverlay() {
  overlay.style.display = "none";
  videoPlaying = true;
  video.setAttribute("controls", "");
  video.play();
}

function showOverlay() {
  if (video.readyState === 4) {
    overlay.style.display = "flex";
    video.removeAttribute("controls");
    videoPlaying = true;
  }
}

video.addEventListener("pause", showOverlay);
overlay.addEventListener("click", hideOverlay);

$(document).ready(function () {
  // $("#hero_slider").owlCarousel({
  //   items: 1,
  //   loop: false,
  //   margin: 10,
  //   nav: false,
  //   dots: true,
  // });
});

$(document).ready(function () {
  $("#hero_slider").owlCarousel({
    items: 1,
    loop: false,
    margin: 10,
    nav: false,
    dots: true,
  });
  $("#grow-slider").owlCarousel({
    items: 3,
    navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
    loop: false,
    margin: 10,
    nav: true,
    dots: true,
  });

  $("#highlight_slider").owlCarousel({
    items: 2,
    navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
    loop: false,
    margin: 20,
    nav: true,
    dots: true,
  });

  $("#review-slider").owlCarousel({
    items: 3,
    navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
    stagePadding: 150,
    center: true,
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
  });

  $(".owl-carousel").owlCarousel({
    items: 1,
    navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
    loop: false,
    margin: 10,
    nav: true,
    dots: true,
  });
});
