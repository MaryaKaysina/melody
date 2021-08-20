$(document).ready(function () {
  let currentFloor = 2;
  let floorPath = $('.main__home path');
  let flatPath = $('.modal__floors path');
  let counterUp = $('.main__btn--up');
  let counterDown = $('.main__btn--down');
  let modal = $('.modal');
  let modalClose = $('.modal__close');
  let modalCounter = $('.modal__counter');
  let viewFlats = $('.main__see');

  function toggleModal() {
    usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
    modalCounter.text(usCurrentFloor);
    modal.toggleClass('is-open');
  }

  floorPath.on('mouseover', function() {
    floorPath.removeClass('current-floor');
    currentFloor = $(this).attr('data-floor');
    $('.main__counter').text(currentFloor);
  });

  flatPath.on('mouseover', function() {
    $('.modal__link').removeClass('current-flat');
    currentFlat = $(this).attr('data-flat');
    console.log(currentFlat);
    $(`#${currentFlat}`).toggleClass('current-flat');
  });

  floorPath.on('click', toggleModal);

  modalClose.on('click', toggleModal);

  viewFlats.on('click', toggleModal);

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
