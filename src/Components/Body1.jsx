import React, { useRef, useEffect, useState } from "react";
import Phonedata from "../Utils/Phonedata";
import { PhonePositions } from "../Utils/Phonedata";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import GlobalContext from "./GlobalStore";
import { useContext } from "react";


export default function Body1() {
    const containerRef = useRef(null);






    useGSAP(() => {
        gsap.set(".new", { x: 0, y: 0 }); 
    }, []);

    useEffect(() => {
        function handleMouseMove(event) {
            const deltaX = (event.clientX - window.innerWidth / 2) * 0.02;
            const deltaY = (event.clientY - window.innerHeight / 2) * 0.02;

            gsap.to(".new", {
                x: deltaX,
                y: deltaY,
                duration: 0.2,
                ease: "power2.out",
            },);


        }

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div ref={containerRef}>
            {Phonedata.map((value, index, array) => {
                if (index % 2 === 0 && index + 1 < array.length) {
                    return (
                        <div
                            id={"id"+index}
                            key={index}
                            style={PhonePositions[index / 2]}
                            className="absolute flex new z-15"
                        >
                            <img src={array[index]} alt="Outer" />
                            <img className="absolute" src={array[index + 1]} alt="Inner" />
                        </div>
                    );
                }
                return null;
            })}
        </div>
    );
}
