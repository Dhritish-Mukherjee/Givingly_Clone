import React, { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../App.css';
import Body1 from "./Body1";






export default function Mobile() {

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(()=>{
    gsap.to("#ullu",{
      scale:0.6,
      y:-800,
      scrollTrigger:{
        trigger:".beral",

        scroller:"body",
        start:"top 80%",
        end:"top 60%",
        scrub:1
      }
    })

    gsap.to(["#id14", "#id4", "#id8"], {
      x: -800,
      y: -800,
      duration: 20,
      ease: "power2.out",
      scrollTrigger:{
        trigger:".beral",

        scroller:"body",
        start:"top 80%",
        end:"top 60%",
        scrub:1
      }
  });

  gsap.to(["#id10", "#id12", "#id6"], {
    x: 800,
    y: -800,
    duration: 20,
    ease: "power2.out",
    scrollTrigger:{
      trigger:".beral",

      scroller:"body",
      start:"top 80%",
      end:"top 60%",
      scrub:1
    }

    
});


gsap.to(".thala", {

  opacity:0,
  scrollTrigger:{
    trigger:".beral",

    scroller:"body",
    start:"top 80%",
    end:"top 75%",
    scrub:1
  }

  
});

gsap.to(["#id0"], {
  x: 340,
  y: -110,
  scale:0.7,
  rotate:"2deg",
  duration: 20,
  ease: "power2.out",
  scrollTrigger:{
    trigger:".beral",

    scroller:"body",
    start:"top 80%",
    end:"top 60%",
    scrub:1
  }

  
});

gsap.to(["#id2"], {
  x: -630,
  y: 250,
  scale:0.7,
  rotate:"0deg",
  duration: 20,
  ease: "power2.out",
  scrollTrigger:{
    trigger:".beral",

    scroller:"body",
    start:"top 80%",
    end:"top 60%",
    scrub:1
  }

  
});

  })



    




  return (
    <>
      <div
        className="flex justify-center items-center absolute top-[80%] left-1/2 transform -translate-x-1/2 pb-12 beral"
        id="ullu"
      >
        <img 
          className="h-full w-140 " 
          src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/6524472ece64b75ac0024818_phone_mockup.webp"
          alt="Phone Mockup"
        />

        <div className="absolute h-auto w-140 top-6 z-18" class="phone-ui-top w-embed">
          <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 648 76">
              <path d="M92.063 41.41c4.73 0 8.672 3.318 8.672 10.844v.03c0 7.094-3.288 11.333-8.761 11.333-3.971 0-6.946-2.29-7.615-5.533l-.03-.163h3.807l.045.133c.58 1.473 1.889 2.425 3.808 2.425 3.45 0 4.893-3.302 5.042-7.363.015-.223.03-.446.03-.684h-.09c-.847 1.963-2.99 3.45-5.89 3.45-4.135 0-7.05-2.974-7.05-7.005v-.03c0-4.328 3.406-7.436 8.032-7.436Zm0 11.513c2.454 0 4.328-1.725 4.328-4.12v-.015c0-2.38-1.874-4.239-4.283-4.239-2.38 0-4.299 1.844-4.299 4.165v.03c0 2.439 1.815 4.179 4.254 4.179Zm13.461-3.718a2.14 2.14 0 0 1-2.157-2.157c0-1.205.952-2.142 2.157-2.142s2.142.937 2.142 2.142c0 1.205-.937 2.157-2.142 2.157Zm0 10.917a2.14 2.14 0 0 1-2.157-2.157c0-1.205.952-2.142 2.157-2.142s2.142.937 2.142 2.142c0 1.205-.937 2.157-2.142 2.157Zm15.335 3.123v-4.12H110.15v-3.272l8.909-14.07h5.459v14.19h2.915v3.152h-2.915v4.12h-3.659Zm-7.259-7.184h7.318V44.683h-.089L113.6 55.957v.104Zm21.612 7.184V45.441h-.089l-5.548 3.808v-3.525l5.607-3.941h3.793v21.462h-3.763Z" fill="currentColor"/>
              <g opacity=".9" fill="currentColor">
                  <rect x="463.57" y="53.076" width="5.538" height="6.646" rx=".554"/>
                  <rect x="471.328" y="49.754" width="5.538" height="9.969" rx=".554"/>
                  <rect x="479.641" y="45.876" width="5.538" height="13.846" rx=".554"/>
                  <rect x="487.383" y="41.445" width="5.538" height="18.277" rx=".554"/>
              </g>
              <g opacity=".9" fill="currentColor">
                  <path d="M536.765 46.227a19.878 19.878 0 0 0-14.148-5.89 19.875 19.875 0 0 0-14.179 5.922l3.132 3.134a15.463 15.463 0 0 1 11.047-4.624c4.308 0 8.204 1.756 11.015 4.59l3.133-3.132Z"/>
                  <path d="M531.674 51.318a12.7 12.7 0 0 0-9.057-3.78 12.7 12.7 0 0 0-9.088 3.813l3.133 3.133a8.282 8.282 0 0 1 5.955-2.515c2.319 0 4.416.95 5.923 2.482l3.134-3.133Zm-5.092 5.092a5.521 5.521 0 0 0-3.965-1.672 5.522 5.522 0 0 0-3.997 1.705l3.965 3.964 3.997-3.998Z"/>
              </g>
              <rect opacity=".6" x="553.021" y="41.722" width="37.108" height="17.723" rx="3.6" stroke="currentColor" stroke-width="1.662"/>
              <rect opacity=".9" x="554.961" y="43.661" width="33.231" height="13.846" rx="2.215" fill="currentColor"/>
              <path opacity=".6" d="M592.062 48.092c1.224 0 2.215.991 2.215 2.215v.553a2.214 2.214 0 0 1-2.215 2.215v-4.983Z" fill="currentColor"/>
          </svg>
      </div>

        <img 
          className="h-auto w-130 absolute top-6 z-1"  
          src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/6524588d0a83c1a90447c2e4_ui-bottom.webp"
          alt="UI Bottom"
        />
        
        <img 
          className="absolute h-273 rounded-2xl -z-2 " 
          src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/65245a0ecc54c058b62e52d9_phone-bg-birthday.webp"
          alt="Phone Background"
        />

        <img 
          className="absolute h-auto w-110 top-45 rounded-2xl" 
          src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/65245b06f588322132835220_phone-card-birthday.webp"
          alt="Phone Card"
        />

        <img 
          className="absolute -z-2 h-auto w-129 bottom-6 pb-12" 
          src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/6524588d38e19fea4c3a73e2_ui-footer.webp"
          alt="UI Footer"
        />
      </div>
      {/* <div className="absolute top-[150%] bg-[#b8cedc] h-auto w-full"></div> */}


    </>
  );
}
