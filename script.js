$(document).ready(function (){
  var nextImg = $(".next");
  var nextPrev = $(".prev");

  nextImg.click(function () {
    next();
  });

  prevImg.click(function () {
    prev();
  });

  $(document).keydown(function() {
    var key = event.which;
    if (key == 39) {
      next();
    } else if (key == 37) {
      prev();
    }
  });

});


function next(){

  //Var per le immagini

  var imgActive = $(".slider-wrapper img.active");
  imgActive.removeClass("active");

  // Var per le icone

  var iActive = $(".slider-wrapper i.active");
  iActive.removeClass("active");

  if (imgActive.hasClass("last")) {
    $(".slider-wrapper img.first").addClass("active");
    $(".slider-wrapper i.first").addClass("active");

  } else {
    imgActive.next().addClass("active");
    iActive.next().addClass("active");
  }
}

function prev(){

  var imgActive = $(".slider-wrapper img.active");
  imgActive.removeClass("active");

  var iActive = $(".slider-wrapper i.active");
  iActive.removeClass("active");
  
  if (imgActive.hasClass("first")) {
    $(".slider-wrapper img.last").addClass("active");
    $(".slider-wrapper i.last").addClass("active");
  } else {
    imgActive.prev().addClass("active");
    iActive.prev().addClass("active");
  }
}
