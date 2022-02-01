import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
gsap.registerPlugin(DrawSVGPlugin);

//const burgerBtn = document.querySelector("#burger-container");

gsap.set(".burger-lines",{transformOrigin:"center"})
gsap.set(".burger",{transformOrigin:"",duration:0.25, scaleY:6})
gsap.set("#outline2",{drawSVG: "0%"})


const topTL = new gsap.timeline();
topTL.to(".burger-lines:nth-child(1)",{duration:0.25, y:"+=30", scaleX:6})
.to(".burger-lines:nth-child(1)",{duration:0.25, rotation:90})
.to(".burger-lines:nth-child(1)", {duration:0.25, rotation:90, scaleX:6});

const bottomTL = new gsap.timeline();
bottomTL.to(".burger-lines:nth-child(3)",{duration:0.25, y:"-=30", scaleX:6})
.to(".burger-lines:nth-child(3)",{duration:0.25, rotation:-90, scaleX:6});

const middleTL = new gsap.timeline();
middleTL.to(".burger3:nth-child(2)",{duration:0.25, scale:0})
//.to("#outline2",{duration:0.25, drawSVG:"100%", stroke:"black"});

.from("#card-4",{duration: .25,opacity: 0, ease:"fadein"})
.from("#card-3",{duration: .25,opacity: 0, ease:"fadein"})
.from("#card-2",{duration: .25,opacity: 0, ease:"fadein"})
.from("#card-1",{duration: .25,opacity: 0, ease:"fadein"})


export const burgerTL = new gsap.timeline({paused:true});


gsap.set(".burger-lines",{transformOrigin:"right center"});



let textArray = gsap.utils.toArray(".connect");
let navLinks = gsap.utils.toArray("nav a");
let buttonText = ["Coffee","About","Wholesale","Contact"];
let currentLink = 0;



function menuSetUp(){
	navLinks.forEach((link, i) => {
		if(i !== 0){
			gsap.set(textArray[i],{scaleX:0})
		}
	});
	gsap.to(textArray[0], {duration: 0.25, scrambleText: ".connect", ease: "none"})
}


export function buttonClicks(){
	console.log("clicks");
	menuSetUp();

    navLinks.forEach((link, i) => {
        link.addEventListener("click", e => {
            e.preventDefault();

            console.log(currentLink);
          
            gsap.to(window, {scrollTo: i * innerHeight});

            console.log(i);
            gsap.to(textArray[i], {duration: 0.25, scrambleText: buttonText[i], ease: "none"});


            gsap.to(textArray[currentLink], {duration: 0.25, scrambleText: ".connect", ease: "none"});
           

            currentLink = i;
          
        });
    });
}


export function buttonMouseEvents(){

    navLinks.forEach((link, i) => {
      
        link.addEventListener("mouseenter", e => {
            e.preventDefault();
           
            if(i != currentLink){
                gsap.to(textArray[i], {duration: 0.25, scrambleText: buttonText[i], ease: "none"});
               
            }
        });


       
        link.addEventListener("mouseleave", e => {
            e.preventDefault();
            if(i != currentLink){
                gsap.to(textArray[i], {duration: 0.25, scrambleText: ".connect", ease: "none"});
               
            }
        });
    });
}




burgerTL.add(topTL,"burger")
    .add(bottomTL,"burger")
    .add(middleTL,"burger")

    export function demo2(){
       
       }
