window.onload = function () {
  const i = this.document.querySelectorAll('.intro_text span');

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
  hello(true);
  window.addEventListener('scroll', throttle(function () {
    if (document.documentElement.scrollTop < 20) {
      hello(true);
    } else {
      hello(false);
    }
  }, 200));

  function hello(bool) {
    if (bool) {
      i.forEach(function (item) {
        item.classList.add("hello");
      });
    } else {
      i.forEach(function (item) {
        item.classList.remove("hello");
      });
    }
  }
}

const throttle = (callback, delay) => {
  let timer;
  return (event) => {
    if (timer) return;
    timer = setTimeout(() => {
      callback(event);
      timer = null;
    }, delay);
  }
};