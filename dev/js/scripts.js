import { gsap } from "gsap";


const mainTL = gsap.timeline();



mainTL.from("#hero", {duration:2,alpha:0, scale:1}) 

mainTL.from("#glow", {duration:3,alpha:0, scale:1, blink: 4, fadeout: 800 }) 

.from("#glow", {fadeout: (100), fadein: (100)})


mainTL.from("#hero-content", {duration:2,alpha:0, scale:2}) 

.from("#info",{duration:2,y:"+=500", alpha:0}) 

mainTL.from("#sec1",{duration:1,alpha:0}) 

mainTL.from("#sec2",{duration:1,alpha:0}) 

.from("#sec3",{duration:1,x:"-=100", alpha:0}) 





