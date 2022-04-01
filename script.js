const body = document.body;
const homepage = document.querySelector('.homepage');
const benefits = document.querySelector('.benefits');

const loadAnim = () => {
  lottie.loadAnimation({
    container: homepage,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/assets/wave-files/data-color-1.json',
  });
};

body.addEventListener('load', loadAnim());
