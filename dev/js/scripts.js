import { gsap } from "gsap";


const mainTL = gsap.timeline();



mainTL.from("#hero article", {duration:2,alpha:0}) 

.from("#info",{duration:2,y:"+=500", alpha:0}) 

mainTL.from("#sec1",{duration:1,alpha:0}) 

mainTL.from("#sec2",{duration:3,alpha:0}) 

