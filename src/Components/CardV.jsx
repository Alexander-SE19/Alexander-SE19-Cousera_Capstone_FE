import {MdMoped} from "react-icons/md";

const CardV = ({title, text, price, image, imageAlt, className}) => {
    return (
        <div className={`${className} rounded overflow-hidden shadow-lg h-96 font-karla bg-customCardBg `}>
            {image && <img
                className="w-full h-3/6 object-cover object-center hover:scale-105 transform transition duration-300 ease-in-out"
                src={image} alt={imageAlt}/>
            }
            <div className="grid grid-rows-3 h-3/6" style={{gridTemplateRows: "3.5rem auto 3rem"}}>
                <div className="mx-2 text-start flex items-center justify-between 3xl:mx-6">
                    {title &&
                        <h3 className="font-bold font-markazi text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl">{title}</h3>
                    }
                    {price &&
                        <p className="text-sm text-customPrice xl:text-base 2xl:text-lg 3xl:text-2xl">${price}</p>
                    }
                </div>

                {text &&
                    <p className=" text-gray-700 text-start text-xs mx-2 overflow-scroll hide-scrollbar xl:text-base 2xl:text-lg 3xl:text-2xl 3xl:mx-6">{text}</p>
                }
                <div className="flex text-sm">
                    <p className="self-center text-start mx-2 font-bold xl:text-base 2xl:text-lg 3xl:text-2xl 3xl:ml-6">Order
                        a Delivery</p>
                    <MdMoped
                        className="self-center text-start transform hover:translate-x-1 hover:text-customHoverGreen transition duration-200 ease-in-out cursor-pointer size-4 xl:size-5 2xl:size-6 3xl:size-8"/>
                </div>
            </div>

        </div>
    );
};

export default CardV;