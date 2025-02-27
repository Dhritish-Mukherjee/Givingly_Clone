import React from "react";
import ReactDOM from "react-dom/client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// index.js or App.js
import '../App.css';


export default function Header(){
      
  // const handleMouse = () => {
  //   gsap.to(".overlay", {
  //     rotation: 360,
  //     delay: 1,
  //     duration: 2
  //   });
  // };
  


  return(
    <>
    <div className="pt-10 text-base flex justify-between items-center w-full  pl-10 pr-10 meow">
        <a target="_blank" href='https://www.givingli.com/'>
        <img className="cursor-pointer" src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/667463d01a10a9f3654e3f47_Logo.svg"></img>
        </a>
        <div className="flex items-center gap-8">
            <a target="_blank" href="https://www.givingli.com/about">About Us</a>
            <a target="_blank" href="https://www.givingli.com/pro">Pro</a>
            <div className=" text-white rounded-4xl bg-[#184363]  w-38 h-12 flex justify-center items-center text-center">
            <a className="p-6  text-[#b8cedc] text-md" target="_blank" href="https://go.givingli.com/create?isOpenChoosePlanDialog=true">
              Start Gifting
            </a>
            </div>
        </div>

    </div>
    </>
  )
}