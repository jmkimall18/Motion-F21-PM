import { gsap } from "gsap";

import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { CustomEase } from "gsap/CustomEase";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";



gsap.registerPlugin(GSDevTools, DrawSVGPlugin, CustomEase, MorphSVGPlugin);

MorphSVGPlugin.convertToPath("Coffee_2, Vector, Vector6, top, Sauce, Cup, Vector33");


const mainTL = gsap.timeline();

function First_Dots(){
const tl = gsap.timeline({repeat: 0});

    tl.to(".ball", {repeat: 1, duration: .75, ease: CustomEase.create("bounce", "M0,0 C0.126,0.382 0.282,0.496 0.44,0.644 0.632,0.824 0.818,0.001 1,0 "), y: -100,  stagger:0.5 });
    tl.to("#Vector_3", { duration: .75, ease:  CustomEase.create("custom", "M0,0 C0.082,-0.114 0.78,1 1,1 "), y: +500 }, "same");
    tl.to("#Vector_2", { duration: .75, ease:  CustomEase.create("custom", "M0,0 C0.082,-0.114 0.78,1 1,1 "), y: +500 }, "same");
    tl.to("#Vector", {duration:1, ease: 1, x:"+=30"},"same");
    tl.to("#Vector", {opacity: 0});
    tl.from("#Glass", {duration: .5, drawSVG:"60% 60%", stagger: 0.5})
    tl.from("#Vector5",  {duration:.5,y:"-=800", alpha:0})
    tl.to("#Vector5", {duration: .5, morphSVG:"#Coffee_2"});
    tl.from("#top",  {duration:0.25,alpha:0, stagger: 0.5})
    tl.from("#top", {duration: .5, drawSVG:"50% 65%", stagger: 0.5, fillOpacity:1 })
    tl.to("#top", {opacity: 0},);
    tl.from("#Vector7", {opacity: 0}, );
    tl.to("#Vector5", {duration: .75, morphSVG:"#Glass"},);
    tl.from("#Vector8", {opacity: 0},);
    tl.to("#Vector5", {duration: .5, morphSVG:"#Vector8"},);
    tl.to("#Glass", {duration: .5, morphSVG:"#Vector6"},);
    tl.to("#Vector7", {duration:.5, y:"+=33"},);
    tl.to("#Vector5", {duration: .5, morphSVG:"#Sauce"},);
    tl.to("#Vector7", {duration: .5, morphSVG:"#Cup", y:"-=33"},);
    tl.to("#Glass", {duration:.5, ease: 1, y:"+=33"},);
    tl.to("#Glass", {duration:.05, opacity: 0},);
    tl.from("#steam_2", {duration: .75, drawSVG:"100% 100%", stagger: 0.5, fillOpacity:1 })
    tl.from("#steam_4", {duration: .75, drawSVG:"100% 100%", stagger: 0.5, fillOpacity:1 })
    tl.from("#steam_3", {duration: .75, drawSVG:"100% 100%", stagger: 0.5, fillOpacity:1 })
    tl.to(".st", {duration: .15, morphSVG:"#Base2"},);
    tl.from("#Vector5", {duration: .15,opacity: 0},);
    tl.from("#Vector33", {opacity: 0,duration: .70},);
    
    
return tl;
}

function Second_Dots(){
    const tl = gsap.timeline({repeat: 0});
    tl.to("#Vector7", {opacity: 0},);
    tl.to("#Vector33", {duration: .5, morphSVG:"#Outline"},);
    tl.from("#Outline", {duration: .5, drawSVG:"50% 50%", stagger: 0.5, fillOpacity:1 })
    tl.from("#Vector33", {duration: .5, opacity: 0, ease: 3},);
    tl.from(".new",  {duration:.5,y:"-=800", alpha:0})
    tl.from(".new", {duration: .5, morphSVG:"#Vector66"},);
    tl.to("#Outline", {duration: .5, morphSVG:"#Vectorrr"},);
    tl.from("#cap", {opacity: 0},);
    tl.from(".same", {opacity: 0},);
    tl.to(".st", {opacity: 0},);
    tl.from("#contain", {opacity: 0},);
    tl.to(".new", {duration: 1, morphSVG:"#level2"}, "same");
    tl.to(".new", {duration: 1, morphSVG:"#level4"}, "same");
    tl.to(".new", {duration: 1, morphSVG:"#level5"},"same" );
    tl.to(".new", {duration: 1, morphSVG:"#level6"}, "same");
    tl.to(".same", {opacity: 0},"same");
    tl.from("#add1", {opacity: 0},"same");
   tl.to("#add1", {duration: 1, morphSVG:"#add2"},"same");
   tl.to("#add1", {duration: 1, morphSVG:"#add3"},"same");
    
    return tl;
}

function Third_Dots(){
    const tl = gsap.timeline({repeat: 0});

    tl.to("#add1", {opacity: 0},);
    tl.to("#Outline", {opacity: 0},);
    tl.to("#contain", {opacity: 0},);
    tl.to("#cap", {duration: .5, morphSVG:"#base3"},);
    tl.to(".new", {duration: .5, morphSVG:"#bottom"},);
    tl.from("#hat", {opacity: 0},);
    tl.from("#square", {opacity: 0},);
    tl.from("#balling",  {duration:.1,y:"-=800", alpha:0})
    tl.to("#balling", {duration: 2, morphSVG:"#drop"},);



    tl.to("#preloader", {alpha:0,duration:0.5, onComplete:PreloaderDone}, "-=1");
    return tl;


}



function PreloaderDone(){

    window.scrollTo(0,0);
    gsap.set("#preloader", {display:"none"});
}



function heroanimation(){
    const tl = gsap.timeline()


.from("#hero", {duration:2,alpha:0, scale:1}) 

.from("#glow", {duration:0.5,alpha:0}) 
.to("#glow", {duration:0.25,alpha:0.5})
.to("#glow", {duration:0.05,alpha:0.15})
.to("#glow", {duration:0.35,alpha:0.75})

// .from("#glow", {fadeout: (100), fadein: (100)})


.from("#hero-content", {duration:2,alpha:0, scale:2}) 

.from("#info",{duration:2,y:"+=500", alpha:0}) 

.from("#sec1",{duration:1,alpha:0}) 

.from("#sec2",{duration:1,alpha:0}) 

.from("#sec3",{duration:1,x:"-=100", alpha:0}) 

return tl;
}



mainTL
.add(First_Dots())
.add(Second_Dots())
.add(Third_Dots())
.add(heroanimation());


//GSDevTools.create();







