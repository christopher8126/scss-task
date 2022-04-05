const body = document.body;
const homepage = document.querySelector('.homepage');
const benefits = document.querySelector('.benefits');
const about = document.querySelector('.about');
const satisfaction = document.querySelector('.satisfaction');
const work = document.querySelector('.work');
const products = document.querySelector('.products');
const plant = document.querySelector('.plant');
const backToTop = document.querySelector('.bottombtn');

const loadAnim = () => {
  lottie.loadAnimation({
    container: homepage,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/assets/wave-files/data-color-1.json',
  });
  lottie.loadAnimation({
    container: benefits,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/assets/wave-files/data-color-2.json',
  });
  lottie.loadAnimation({
    container: about,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/assets/wave-files/data-color-2.json',
  });
  lottie.loadAnimation({
    container: satisfaction,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/assets/wave-files/data-color-2.json',
  });
  lottie.loadAnimation({
    container: work,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/assets/wave-files/data-color-3.json',
  });
  lottie.loadAnimation({
    container: products,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/assets/wave-files/data-color-2.json',
  });
  lottie.loadAnimation({
    container: plant,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/assets/wave-files/data-color-1.json',
  });
};

body.addEventListener('load', loadAnim());
backToTop.addEventListener('click', () => {
  window.scrollTo(0, 0);
});
