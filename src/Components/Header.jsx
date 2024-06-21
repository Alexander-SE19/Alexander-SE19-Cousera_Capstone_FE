import Nav from "./Nav";
import {useEffect, useRef, useState} from "react";
import logo1 from "./images/logo1.svg";

function Header({className}) {

    const lastScrollY = useRef(window.scrollY);
    const [scrollDirection, setScrollDirection] = useState("up");

    //Id assigned to the Box for enhanced reference efficiency
    const box = document.getElementById("header");

    //compares scrollY-positions and sets state
    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        setScrollDirection(currentScrollY > lastScrollY.current ? "down" : "up");
        lastScrollY.current = currentScrollY;
    }

    //Only when mounted for Listener
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    //keeps track of scroll direction & transforms header
    useEffect(() => {
        if (box) {
            box.style.transform =
                scrollDirection === "down" ? "translateY(-200px)" : "translateY(0px)";
        }
    }, [scrollDirection]);

    return (
        <div id="header" className={`${className} h-16 lg:h-20 grid grid-cols-12 w-full lg:items-center bg-white shadow-[0px_8px_20px_#00000033]`}>
            <a href="/" className="col-start-2 col-span-4 my-auto lg:col-span-2 lg:col-start-2"><img src={logo1} alt="logo"/></a>
            <Nav id="nav" className="col-start-6 col-span-6 my-auto lg:col-start-4 lg:col-span-8"></Nav>
        </div>
    );
}

export default Header;