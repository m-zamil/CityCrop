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
    navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
    center: false,
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 1,
        stagePadding: 20,
      },
      768: {
        items: 3,
        stagePadding: 0,
      },
    },
    loop: false,
    margin: 10,
    nav: true,
    dots: true,
  });

  $("#highlight_slider").owlCarousel({
    loop: false,
    margin: 20,
    dots: true,
    responsive: {
      0: {
        items: 1,
        stagePadding: 30,
        nav: false,
      },
      768: {
        items: 2,
        nav: true,
        navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
      },
    },
  });

  $("#review-slider").owlCarousel({
    items: 3,

    stagePadding: 150,
    center: true,
    loop: true,
    margin: 10,
    dots: true,
    responsive: {
      0: {
        items: 1,
        stagePadding: 30,
        loop: false,
        nav: false,
      },
      768: {
        items: 3,
        nav: true,
        loop: true,
        navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
      },
    },
  });

  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: false,
    responsive: {
      0: {
        nav: false,
        stagePadding: 20,
      },
      768: {
        nav: true,
        navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
        stagePadding: 0,
      },
    },
    margin: 10,
    nav: true,
    dots: true,
  });
});
