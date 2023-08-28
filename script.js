gsap.registerPlugin(ScrollTrigger);

gsap.to(".square", {
  x: 1000,
  duration: 8,
  scrollTrigger: {
    trigger: ".square2",
    start: "top 80%",
    end: "top 30%",
    scrub: 4,
    pin: ".square",
    pinSpacing: false,
    toggleActions: "restart none none none",
    // toggleActions: "restart pause resume complete",
    //              onEnter onLeave onEnterBack onLeaveBack
    //              play pause resume reverse restart reset complete none
    markers: {
        startColor: "purple",
        endColor: "fuchsia",
        fontSize: "3rem"
    },
    toggleClass: "red"
  }
});
