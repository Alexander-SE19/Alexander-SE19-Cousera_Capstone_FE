import imgOwner from "./images/Owner.jpg";
import imgTwoOwner from "./images/twoOwners.jpg";

const Chicago = () => {

    return (
        <section className="w-full grid grid-rows-2 grid-cols-12 my-20 md:grid-rows-1">
            <div
                className="w-full row-start-1 col-start-2 col-span-10 md:col-start-2 md:col-span-5 2xl:col-start-2 2xl:col-span-4">
                <h1 id="about"
                    className="text-5xl font-bold text-customYellow mb-1 font-markazi xl:text-6xl 3xl:text-8xl">Little
                    Lemon</h1>
                <h3 className="text-4xl font-bold text-customGreen mb-3 font-markazi xl:text-5xl 3xl:text-7xl">Chicago</h3>
                <p className="text-sm text-customGreen font-karla mb-2 xl:text-base 2xl:text-lg 3xl:text-2xl">
                    Step into Chicago's culinary scene and discover Little
                    Lemon, a cherished creation of Mario and Oli, born from their love for Mediterranean cuisine and
                    years of exploration along the coasts of Greece and Italy. Mario's Greek roots and Oli's Italian
                    palate unite to offer an experience that transcends dining, celebrating culture, heritage, and
                    friendship. Enter Little Lemon to be welcomed by the aroma of sizzling meats, the zest of
                    freshly squeezed lemons, and the comfort of homemade pasta dishes. <br/><br/>
                    Each bite at Little Lemon speaks of tradition and passion, showcasing grilled fish alongside
                    meticulously crafted mezzes. Join us for a journey that's as rich as the Mediterranean itself: a
                    slice of Greece and Italy amidst Chicago's bustling streets.</p>
            </div>
            <div
                className="col-start-2 row-start-2 relative flex flex-col justify-center col-span-10 md:ml-3 md:col-start-8 md:col-span-4 md:row-start-1 2xl:col-start-7 2xl:col-span-5">
                <img src={imgOwner} alt="Owner no.1 preparing salat"
                     className="-ml-2 w-96 z-0 self-start object-cover relative rounded-lg shadow-lg 2xl:w-4/6 hover:scale-105 transform transition duration-300 ease-in-out"/>
                <img src={imgTwoOwner} alt="Both owners standing next to each other"
                     className="z-10 ml-2 w-96 self-end -mt-16 md:-mt-10 object-cover rounded-lg 2xl:-mt-64 2xl:w-4/6 shadow-lg hover:scale-105 transform transition duration-300 ease-in-out"/>
            </div>
        </section>
    )
}

export default Chicago;