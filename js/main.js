window.onload = function () {

  // swiper
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  window.addEventListener('scroll', function () {
    if (document.documentElement.scrollTop < 1) {
      const i = this.document.querySelectorAll('.intro_text span');
      i.forEach(function (item) {
        item.classList.toggle("hello");
      });
    }
  });
}