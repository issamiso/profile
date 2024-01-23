gsap.fromTo(
  ".loading-page",
  { opacity: 1 },
  {
    opacity: 0,
    display: "none",
    duration: 1.5,
    delay: 3.5,
  }
);

gsap.fromTo(
  ".logo-name",
  {
    x: 0,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    duration: 2,
  
  }
);
