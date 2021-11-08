import { gsap } from "gsap";

import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { CustomEase } from "gsap/CustomEase";



gsap.registerPlugin(GSDevTools, DrawSVGPlugin, CustomEase);


const mainTL = gsap.timeline();

function First_Dots(){
const tl = gsap.timeline({repeat: 0});

    tl.to(".ball", {repeat: 1, duration: 1.5, ease: CustomEase.create("bounce", "M0,0 C0.126,0.382 0.282,0.496 0.44,0.644 0.632,0.824 0.818,0.001 1,0 "), y: -100,  stagger:0.5 });
    tl.to("#Vector_3", { duration: 1, ease:  CustomEase.create("custom", "M0,0 C0.082,-0.114 0.78,1 1,1 "), y: +500 }, "same");
    tl.to("#Vector_2", { duration: 2, ease:  CustomEase.create("custom", "M0,0 C0.082,-0.114 0.78,1 1,1 "), y: +500 }, "same");
    tl.to("#Vector", {duration:1, ease: 1, x:"+=30"},"same");
    tl.to("#Vector", {opacity: 0});
    tl.from("#Glass", {duration: 1, drawSVG:"60% 60%", stagger: 0.5})
    tl.from("#top", {duration: 1, drawSVG:"60% 60%", stagger: 0.5, fillOpacity:1 })
    tl.from("#top", {fill:1 })



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





