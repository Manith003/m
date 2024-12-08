var tl = gsap.timeline();

tl.from(".nav h3",{
    y: -50,
    opacity: 0,
    delay: 0.5,
    duration: 1,
    stagger: 0.1
})

tl.from(".footer h3",{
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.1
})


tl.from(".body h1",{
    x: -500,
    opacity: 0,
    duration: 1,
    stagger: 0.1
})

tl.from("img",{
    x: 10,
    opacity: 0,
    rotate:40,
    duration: 0.7,
    stagger: 0.5
})


