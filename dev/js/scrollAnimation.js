import { gsap } from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



export function demoThing(){
 console.log("this is working!! YAYY");
}

gsap.set("#sec1",{transformOrigin:"left center"});
gsap.set("#sec2",{transformOrigin:"left center"});
gsap.set("#sec3",{transformOrigin:"bottom center"});

export function photoTrigger(){
  const tl = new gsap.timeline();

  tl.from("#sec1",{
  duration:4, 
  scaleX:0, 
  scrollTrigger:{ 
  trigger: "#sec1",
  toggleActions: "restart none resume none",
  scrub: true,
  markers: true
  }

});
 }

 export function photoTrigger1(){
    const tl = new gsap.timeline();
  
    tl.from("#sec2",{
    duration:4, 
    scaleX:0, 
    scrollTrigger:{ 
    trigger: "#sec2",
    toggleActions: "restart none resume none",
    scrub: true,
    markers: true
    }
  
  });
   }

   export function photoTrigger2(){
    const tl = new gsap.timeline();
  
    tl.from("#sec3",{
    duration:4, 
    scaleX:0, 
    scrollTrigger:{ 
        start: "top 50%",
        end: "bottom 100%",
    trigger: "#sec3",
    toggleActions: "restart none resume none",
    scrub: true,
    markers: true
    }
  
  });
   }