var mySwiper = new Swiper('.swiper-container', {
  // direction: 'vertical',
  // loop: true,
  autoplay: 5000,
  // 如果需要分页器
  pagination: {
    el: '.swiper-pagination',
  },
  effect: 'coverflow',
  slidesPerView: 1,
  centeredSlides: true,
  coverflow: {
    rotate: 30,
    stretch: 10,
    depth: 60,
    modifier: 2,
    slideShadows: true
  }
})