$(document).ready(function () {
  let currentFloor = 2;
  let floorPath = $('.main__home path');
  let counterUp = $('.main__btn--up');
  let counterDown = $('.main__btn--down');

  floorPath.on('mouseover', function() {
    floorPath.removeClass('current-floor');
    currentFloor = $(this).attr('data-floor');
    $('.main__counter').text(currentFloor);
  });

  counterUp.on('click', function() {
    if(currentFloor < 18) {
      currentFloor++;
      usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
      $('.main__counter').text(usCurrentFloor);
      floorPath.removeClass('current-floor');
      $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
    }
  });

  counterDown.on('click', function() {
    if(currentFloor > 2) {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
      $('.main__counter').text(usCurrentFloor);
      floorPath.removeClass('current-floor');
      $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
    }
  });
});
