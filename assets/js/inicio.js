let tl = gsap.timeline({
    scrollTrigger:{
        trigger: '.home',
        start: '0%',
        end: '100%',
        scrub: .1,
    },
});

let tl2 = gsap.timeline({
    scrollTrigger:{
        trigger: '.home',
        start: '0%',
        end: '100%',
        scrub: .1,
    },
});
let tl4 = gsap.timeline({
    scrollTrigger:{
        trigger: '.home',
        start: '0%',
        end: '100%',
        scrub: .1,
    },
});
let tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: '.home',
        start: '0%',
        end: '100%',
        scrub: .1,

    },
    
});




tl.fromTo('.logo-animacao', {scale: 4}, {scale: 1, top: "1.8%", left: "16%", x: "50%", y: "50%", color: "white"})
tl2.fromTo('.linhas', {left: "24.3%", top: "55%"}, {left: "150%", top: "40rem", scale: 0 < 1, opacity: 0, height: "225px", width: "225px" , rotate: -120})
tl4.fromTo('.linhas-2', {left: "60%", top: "43.5%"}, {left: "-100%", top: "25rem", scale: 0 < 1, opacity: 0, width: "1215px"})
tl5.fromTo(".banner", {opacity: 1}, {opacity: 0});







let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: '.home',
        start: '0%',
        end: '10000%',
        scrub: 2,
        pin: true,
        pinSpacing: false,

    },
    
});


