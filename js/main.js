$(document).ready(function () {
  // modal-window open
  $("[data-service]").on("click", function () {
    $("body").addClass("no-scroll");
    $("#overlay").fadeIn("slow");
    $("#modal-service").fadeIn("slow");
  });
  // modal-window join-team
  $("[data-join-team]").on("click", function () {
    $("body").addClass("no-scroll");
    $("#overlay").fadeIn("slow");
    $("#modal-join-tem").fadeIn("slow");
  });

  // modal-window-close
  $("[data-close]").on("click", function () {
    $("body").removeClass("no-scroll");
    $("#overlay").fadeOut("slow");
    $("#modal-service").fadeOut("slow");
    $("#modal-join-tem").fadeOut("slow");
  });

  // close modal-window  click from overlay
  $("#overlay").on("click", function () {
    $("body").removeClass("no-scroll");
    $(this).fadeOut();
    $("#modal-service").fadeOut("slow");
    $("#modal-join-tem").fadeOut("slow");
  });

  // slider
  const owl = $(".owl-carousel");
  owl.owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        center: true,
        items: 1,
      },
      830: {
        items: 2,
      },
      1265: {
        items: 3,
      },
    },
  });
  $(".slider__btn-next").click(function () {
    owl.trigger("next.owl.carousel");
  });
  $(".slider__btn-prev").click(function () {
    owl.trigger("prev.owl.carousel", [300]);
  });
});
