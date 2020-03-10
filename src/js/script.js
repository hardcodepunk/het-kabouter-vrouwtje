/*
 * gallery
 */

// loop over galleries and activate functionality
var galleries = document.querySelectorAll('.gallery');
for (var i = 0; i < galleries.length; i++) {
  galleryFunctionality(galleries[i]);
}

// gallery functionality
function galleryFunctionality(el) {
  var sliderItems = el.querySelectorAll('.gallery__navigation__item');
  var sliderProjection = el.querySelector('.gallery__display__img');

  for (var i = 0; i < sliderItems.length; i++) {
    sliderItems[i].addEventListener('click', function() {
      if (this.classList.contains('is-being-displayed')) {
      } else {
        for (var i = 0; i < sliderItems.length; i++) {
          sliderItems[i].classList.remove('is-being-displayed');
        }
        this.classList.add('is-being-displayed');
        sliderProjection.src = this.querySelector('.gallery__navigation__item__container__img').src;
        var img = this.querySelector('.gallery__navigation__item__container__img');

        displayedItem = el.querySelector('li.gallery__navigation__item.is-being-displayed');

        var previousItem = displayedItem.previousElementSibling;
        var nextItem = displayedItem.nextElementSibling;
      }
    });
  }

  var galleryBtns = el.querySelectorAll('.gallery__display__button');
  var btnPrevious = el.querySelector('.gallery__display__button-left');
  var btnNext = el.querySelector('.gallery__display__button-right');

  var displayedItem = el.querySelector('li.gallery__navigation__item.is-being-displayed');

  for (var i = 0; i < galleryBtns.length; i++) {

    galleryBtns[i].addEventListener('click', function() {

      var displayedItem = el.querySelector('li.gallery__navigation__item.is-being-displayed');

      // prev btn clicked
      if (this == btnPrevious) {
        var previousItem = displayedItem.previousElementSibling;

        if (previousItem == null) {

        } else {
          displayedItem.classList.remove('is-being-displayed');
          previousItem.classList.add('is-being-displayed');
          sliderProjection.src = previousItem.querySelector('.gallery__navigation__item__container__img').src;
        }

      // next btn clicked
      } else if ( this == btnNext ) {
        var nextItem = displayedItem.nextElementSibling;

        if ( nextItem == null ) {

        } else {
          displayedItem.classList.remove('is-being-displayed');
          nextItem.classList.add('is-being-displayed');
          sliderProjection.src = nextItem.querySelector('.gallery__navigation__item__container__img').src;

        }
      }
    });
  }
}
