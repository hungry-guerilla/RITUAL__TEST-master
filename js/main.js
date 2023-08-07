const swiper = new Swiper('.swiper', {

  direction: 'horizontal',
  loop: true,
  parallax: true,
  speed: 1500,

  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },

  keyboard: {
    enabled: true,
  },
});
