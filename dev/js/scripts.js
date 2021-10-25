import { gsap } from "gsap";

import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);


const mainTL = gsap.timeline();

function First_Dots(){

    const tl = gsap.timeline();
    tl.to("#Vector",{duration:6, scale:1, y:"-=100"});
    return tl;

    
}

mainTL.add(First_Dots());




mainTL.from("#hero", {duration:2,alpha:0, scale:1}) 

mainTL.from("#glow", {duration:0.5,alpha:0}) 
.to("#glow", {duration:0.25,alpha:0.5})
.to("#glow", {duration:0.05,alpha:0.15})
.to("#glow", {duration:0.35,alpha:0.75})

// .from("#glow", {fadeout: (100), fadein: (100)})


mainTL.from("#hero-content", {duration:2,alpha:0, scale:2}) 

.from("#info",{duration:2,y:"+=500", alpha:0}) 

mainTL.from("#sec1",{duration:1,alpha:0}) 

mainTL.from("#sec2",{duration:1,alpha:0}) 

.from("#sec3",{duration:1,x:"-=100", alpha:0}) 

GSDevTools.create();





