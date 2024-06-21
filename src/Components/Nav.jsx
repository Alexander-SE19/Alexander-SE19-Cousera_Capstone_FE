import {IoMenu} from "react-icons/io5";
import {FaHome} from "react-icons/fa";
import {BiSolidFoodMenu} from "react-icons/bi";
import {LuCalendarClock} from "react-icons/lu";
import {MdLogin} from "react-icons/md";
import {MdMoped} from "react-icons/md";
import {FaCircleInfo} from "react-icons/fa6";
import {useState} from "react";

const Nav = ({className}) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={`${className}`}>
            <ul className="hidden w-full justify-end md:flex md:gap-4 lg:gap-8 list-none m-0 p-0 text-xs md:text-sm lg:text-base 3xl:text-xl text-customGreen font-medium items-center">
                <li className="relative group">
                    <a href="/">Home</a>
                    <span
                        className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-customYellow transition-all duration-300 group-hover:w-full"></span>

                </li>
                <li className="relative group">
                    <a href="/#about">About</a>
                    <span
                        className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-customYellow transition-all duration-300 group-hover:w-full"></span>
                </li>
                <li className="relative group">
                    <a href="/maintenance">Menu</a>
                    <span
                        className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-customYellow transition-all duration-300 group-hover:w-full"></span>
                </li>
                <li className="relative group">
                    <a href="/booking">Reservation</a>
                    <span
                        className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-customYellow transition-all duration-300 group-hover:w-full"></span>
                </li>
                <li className="relative group">
                    <a href="/maintenance">Login</a>
                    <span
                        className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-customYellow transition-all duration-300 group-hover:w-full"></span>
                </li>
                <li>
                    <a href="/maintenance">
                        <button
                            className="bg-customGreen md:w-28 lg:w-36 3xl:w-40 text-xs text-customCardBg rounded-3xl py-2 px-3 lg:text-base 3xl:text-xl hover:bg-customYellow hover:text-customGreen">
                            Order Online
                        </button>
                    </a>
                </li>
            </ul>

            <div className="md:hidden w-full h-full flex justify-end items-center">
                <button onClick={toggleMenu}
                        className="bg-customGreen rounded-3xl text-customCardBg py-2 px-2 hover:bg-customYellow hover:text-customGreen">
                    <IoMenu></IoMenu>
                </button>
            </div>

            {isMenuOpen && (
                <>
                    <div className="fixed inset-0 bg-black bg-opacity-60 z-10" onClick={toggleMenu}></div>
                    <div className="fixed inset-y-0 right-0 w-1/2 bg-customGreen z-20">
                        <div className="px-4 pt-5 space-y-6 text-customCardBg">
                            <div
                                className="flex items-center gap-3 hover:text-customYellow cursor-pointer transform hover:translate-x-2 duration-300 ease-in-out">
                                <FaHome size="1.4rem"></FaHome>
                                <a href="/"
                                   className="text-xl font-medium">Home</a>
                            </div>
                            <div
                                className="flex items-center gap-3 hover:text-customYellow cursor-pointer transform hover:translate-x-2 duration-300 ease-in-out">
                                <FaCircleInfo size="1.4rem"></FaCircleInfo>
                                <a href="/#about" className="text-xl font-medium">About</a>
                            </div>
                            <div
                                className="flex items-center gap-3 hover:text-customYellow cursor-pointer transform hover:translate-x-2 duration-300 ease-in-out">
                                <BiSolidFoodMenu size="1.4rem"></BiSolidFoodMenu>
                                <a href="/maintenance" className="text-xl font-medium">Menu</a>
                            </div>
                            <div
                                className="flex items-center gap-3 hover:text-customYellow cursor-pointer transform hover:translate-x-2 duration-300 ease-in-out">
                                <LuCalendarClock size="1.4rem"></LuCalendarClock>
                                <a href="/booking" className="text-xl font-medium ">Reservation</a>
                            </div>
                            <div
                                className="flex items-center gap-3 hover:text-customYellow cursor-pointer transform hover:translate-x-2 duration-300 ease-in-out">
                                <MdLogin size="1.4rem"></MdLogin>
                                <a href="/maintenance" className="text-xl font-medium">Login</a>
                            </div>
                            <div
                                className="flex items-center gap-3 hover:text-customYellow cursor-pointer transform hover:translate-x-2 duration-300 ease-in-out">
                                <MdMoped size="1.4rem"></MdMoped>
                                <a href="/maintenance" className="text-xl font-medium">Order Online</a>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default Nav;