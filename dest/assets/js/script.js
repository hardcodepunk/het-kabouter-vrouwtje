
/*document.onkeydown = function(e) {
  var displayedItem = document.querySelector('li.shop-item__gallery__item.is-being-displayed');

  switch (e.keyCode) {

    case 37:
      var previousItem = displayedItem.previousElementSibling;

      if (previousItem !== null) {
        displayedItem.classList.remove('is-being-displayed');
        previousItem.classList.add('is-being-displayed');

        sliderProjection.src = previousItem.querySelector('.shop-item__gallery__item__visual__img').src;

        if (previousItem.previousElementSibling == null) {
          btnPrevious.classList.add('is-hidden');
        }

        if (btnNext.classList.contains('is-hidden')) {
          btnNext.classList.remove('is-hidden');
        }

        currentLocation -= 1;

        paginationElementCurrent.innerHTML = currentLocation;
      }

      break;

    case 39:

      var nextItem = displayedItem.nextElementSibling;

      if (nextItem !== null) {
        displayedItem.classList.remove('is-being-displayed');
        nextItem.classList.add('is-being-displayed');
        sliderProjection.src = nextItem.querySelector('.shop-item__gallery__item__visual__img').src;

        if ( nextItem.nextElementSibling == null ) {
          btnNext.classList.add('is-hidden');
        }

        if (btnPrevious.classList.contains('is-hidden')) {
          btnPrevious.classList.remove('is-hidden');
        }

        currentLocation += 1;
        paginationElementCurrent.innerHTML = currentLocation;
      }

      break;
  }
};*/

// gallery

var galleries = document.querySelectorAll('.gallery');
for (var i = 0; i < galleries.length; i++) {
  galleries[i].id = "gallery-" + [i + 1];
  console.log(galleries[i].id);
  galleryFunctionality(galleries[i]);
}


function galleryFunctionality(el) {
  console.log("added functionality");
  var sliderItems = el.querySelectorAll('.gallery__navigation__item');
  console.log(sliderItems);
  var sliderProjection = el.querySelector('.gallery__display__img');
  console.log(sliderProjection);

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
        console.log("prev btn clicked");
        var previousItem = displayedItem.previousElementSibling;

        if (previousItem == null) {

        } else {
          displayedItem.classList.remove('is-being-displayed');
          previousItem.classList.add('is-being-displayed');
          sliderProjection.src = previousItem.querySelector('.gallery__navigation__item__container__img').src;
        }

      // next btn clicked
      } else if ( this == btnNext ) {
        console.log("next btn clicked");
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
