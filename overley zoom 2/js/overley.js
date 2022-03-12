
gsap.registerPlugin(ScrollTrigger);

const quoteText = document.querySelectorAll('.quote p');

gsap.set(quoteText, {autoAlpha: 0});
gsap.to('.overlay', {
  duration: 4,
  scale: 250,
  autoAlpha: 0,
  ease: 'power2.in',
  scrollTrigger: {
    trigger: '#containerBg',
    start: 'top top',
    end: '+=4000',
    anticipatePin: true,
    pin: true,
    scrub: true,
  }
});
gsap.fromTo(quoteText, { autoAlpha: 0 },
            {
  duration: 3,
  autoAlpha: 1,
  stagger: {
    amount: 1
  },
  ease: 'expo.inOut',
  scrollTrigger: {
    trigger: '.quote',
    start: 'bottom top',
    end: '+=1200',
    scrub: true,
  }
});

/* Copyright (c) 2020 by Craig Roblewsky (https://codepen.io/PointC/pen/KRWgOK) for code used below */
//const svg = document.querySelector("#overlay");
const ratio = 0.5625;

function newSize() {
  let w = window.innerWidth;
  let h = window.innerHeight;
  if (w > h * (16 / 9)) {
    gsap.set("#pin-overlay", { attr: { width: w, height: w * ratio } });
  } else {
    gsap.set("#pin-overlay", { attr: { width: h / ratio, height: h } });
  }
  //let data = svg.getBoundingClientRect();
  //gsap.set("#overlay", {x:w/2 - data.width/2});
  //gsap.set("#overlay", {y:h/2 - data.height/2});
}

newSize();
window.addEventListener("resize", newSize);