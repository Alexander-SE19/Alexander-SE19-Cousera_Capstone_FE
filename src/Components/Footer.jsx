import imgLogo2 from "./images/logo2.png";
import {MdEmail, MdLocationPin} from "react-icons/md";
import {BsFillTelephoneFill} from "react-icons/bs";
import {FaFacebook, FaInstagram, FaYoutube} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";

function Footer() {
    return (
        <div className="w-full grid grid-cols-2 md:grid-cols-12 py-8 bg-customGreen pb-12 text-customCardBg">
            <img src={imgLogo2} alt="Little Lemon logo."
                 className="col-start-1 col-span-1 md:col-start-2 md:row-span-2 md:col-span-2 md lg:col-span-2 ml-8 lg:m-0 lg:col-start-2 h-44 md:h-56 lg:h-44 3xl:h-56 object-cover"/>
            <div
                className="col-start-2 mx-8 lg:m-0 col-span-1 md:m-0 md:col-start-6 md:col-span-2 lg:col-start-4 lg:col-span-2 font-karla">
                <h4 className="text-xl xl:text-2xl 3xl:text-3xl font-medium font-markazi">QUICK LINKS</h4>
                <span className="block w-full border-t border-customCardBg mb-3"></span>

                <a href="/"><p
                    className="text-sm xl:text-base 3xl:text-xl mb-1 w-1 transform hover:translate-x-2 transition duration-300 ease-in-out hover:text-customYellow cursor-pointer">Home</p>
                </a>
                <a href="/#about"><p
                    className="text-sm xl:text-base 3xl:text-xl mb-1 w-1 transform hover:translate-x-2 transition duration-300 ease-in-out hover:text-customYellow cursor-pointer">About</p>
                </a>
                <a href="/maintenance"><p
                    className="text-sm xl:text-base 3xl:text-xl mb-1 w-1 transform hover:translate-x-2 transition duration-300 ease-in-out hover:text-customYellow cursor-pointer">Menu</p>
                </a>
                <a href="/booking"><p
                    className="text-sm xl:text-base 3xl:text-xl mb-1 w-1 transform hover:translate-x-2 transition duration-300 ease-in-out hover:text-customYellow cursor-pointer">Reservation</p>
                </a>
                <a href="/maintenance"><p
                    className="text-sm xl:text-base 3xl:text-xl w-1 transform hover:translate-x-2 transition duration-300 ease-in-out hover:text-customYellow cursor-pointer">Login</p>
                </a>
            </div>
            <div
                className="col-start-1 ml-8 mt-8 md:col-start-9 md:col-span-3 md:m-0 lg:m-0 lg:col-start-7 font-karla lg:col-span-2 ">
                <h4 className="text-xl xl:text-2xl 3xl:text-3xl font-markazi font-medium">CONTACT</h4>
                <span className="block w-full border-t border-customCardBg mb-3"></span>
                <div className="flex items-center gap-1 mb-3 hover:text-customYellow cursor-pointer">
                    <MdLocationPin className="size-4 xl:size-5 2xl:size-6 3xl:size-7"></MdLocationPin>
                    <p className="text-sm xl:text-base 3xl:text-xl">Chicago, IL 60611</p>
                </div>
                <div className="flex items-end gap-1 mb-3 hover:text-customYellow cursor-pointer">
                    <BsFillTelephoneFill className="size-4 xl:size-5 2xl:size-6 3xl:size-7"></BsFillTelephoneFill>
                    <p className="text-sm xl:text-base 3xl:text-xl">(+1) 312-555-7890</p>
                </div>
                <div className="flex items-end gap-1 mb-3 hover:text-customYellow cursor-pointer">
                    <MdEmail className="size-4 xl:size-5 2xl:size-6 3xl:size-7"></MdEmail>
                    <p className="text-sm xl:text-base 3xl:text-xl">info@littlelemon.com</p>
                </div>
            </div>
            <div
                className="lg:col-start-10 mx-8 mt-8 lg:m-0 md:col-start-6 md:m-0 md:mt-8 md:col-span-2 col-span-1 font-karla">
                <h4 className="text-xl xl:text-2xl 3xl:text-3xl font-markazi font-medium ">SOCIALS</h4>
                <span className="block w-full border-t border-customCardBg mb-3"></span>
                <div className="flex">

                    <a href="https://www.facebook.com">
                    <FaFacebook
                        className=" transform hover:-translate-y-1 transition duration-300 ease-in-out hover:text-customYellow cursor-pointer size-4 xl:size-5 2xl:size-6 3xl:size-7"
                    ></FaFacebook>
                    </a>

                    <a href="https://www.twitter.com">
                    <FaSquareXTwitter
                        className=" ml-2 transform hover:-translate-y-1 transition duration-300 ease-in-out hover:text-customYellow cursor-pointer size-4 xl:size-5 2xl:size-6  3xl:size-7"
                    ></FaSquareXTwitter>
                    </a>

                    <a href="https://www.instagram.com">
                    <FaInstagram
                        className=" ml-2 transform hover:-translate-y-1 transition duration-300 ease-in-out hover:text-customYellow cursor-pointer size-4 xl:size-5 2xl:size-6  3xl:size-7"
                        size="1rem"></FaInstagram>
                    </a>

                    <a href="https://www.youtube.com">
                    <FaYoutube
                        className=" ml-2 transform hover:-translate-y-1 transition duration-300 ease-in-out hover:text-customYellow cursor-pointer size-4 xl:size-5 2xl:size-6  3xl:size-7"
                    ></FaYoutube>
                    </a>

                </div>
            </div>
        </div>
    );
}

export default Footer;