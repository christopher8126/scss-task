const body = document.body;
const homepage = document.querySelector('.homepage');
const benefits = document.querySelector('.benefits');
const about = document.querySelector('.about');

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
    path: '/assets/wave-files/data-color-3.json',
  });
};

body.addEventListener('load', loadAnim());
