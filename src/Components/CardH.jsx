import {FaStar} from "react-icons/fa";

const CardH = ({testImage, text, name, imageAlt, className}) => {
    return (
        <div style={{gridTemplateRows: "2rem auto", gridTemplateColumns: "5rem auto"}}
             className={`${className} h-44 font-karla bg-customCardBg grid grid-rows-2 grid-cols-2 rounded shadow-lg`}>
            <h3 className="col-start-1 font-bold ml-4 self-center xl:text-lg 3xl:text-xl">Rating</h3>
            <div className="col-start-2 ml-2 flex gap-2">
                {[...Array(5)].map((_, index) => (
                    <FaStar key={index} className="self-center text-customYellow" size="1.2rem"/>
                ))}
            </div>
            <div className="col-span-1 col-start-1 ml-4 mt-2 2xl:h-96">
                {testImage && <img src={testImage} alt={imageAlt} className="rounded-full object-cover w-14 h-14"/>}
                {name && <h5 className="text-xs xl:text-sm 3xl:text-base">{name}</h5>}
            </div>
            {text &&
                <p className="mx-2 mt-2 col-start-2 col-span-1 text-sm overflow-hidden xl:text-base 2xl:text-lg 3xl:text-xl">{text}</p>}
        </div>
    );
};

export default CardH;