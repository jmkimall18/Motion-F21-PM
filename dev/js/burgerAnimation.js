import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
gsap.registerPlugin(DrawSVGPlugin);

//const burgerBtn = document.querySelector("#burger-container");

gsap.set(".burger-lines",{transformOrigin:"center"});
gsap.set(".burger",{transformOrigin:"",duration:0.25, scaleX:2});
gsap.set("#outline2",{drawSVG: "0%"})

const topTL = new gsap.timeline();
topTL.to(".burger-lines:nth-child(1)",{duration:0.25, y:"+=9"})
.to(".burger-lines:nth-child(1)",{duration:0.25, rotation:90})
.to(".burger-lines:nth-child(1)", {duration:0.25, rotation:90});

const bottomTL = new gsap.timeline();
bottomTL.to(".burger-lines:nth-child(3)",{duration:0.25, y:"-=9"})
.to(".burger-lines:nth-child(3)",{duration:0.25, rotation:-90});

const middleTL = new gsap.timeline();
middleTL.to(".burger3:nth-child(2)",{duration:0.25, scale:0})
//.to("#outline2",{duration:0.25, drawSVG:"100%", stroke:"black"});

.from("#card-4",{duration: .25,opacity: 0, ease:"fadein"})
.from("#card-3",{duration: .25,opacity: 0, ease:"fadein"})
.from("#card-2",{duration: .25,opacity: 0, ease:"fadein"})
.from("#card-1",{duration: .25,opacity: 0, ease:"fadein"})


export const burgerTL = new gsap.timeline({paused:true});


gsap.set(".burger-lines",{transformOrigin:"right center"});



burgerTL.add(topTL,"burger")
    .add(bottomTL,"burger")
    .add(middleTL,"burger")

    export function demo2(){
       
       }
