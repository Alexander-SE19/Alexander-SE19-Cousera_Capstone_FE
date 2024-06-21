import CardV from "./CardV";
import imgGreekSalad from "./images/greekSalad.jpg";
import imgBruschetta from "./images/bruschetta.jpg";
import imgLemonDessert from "./images/lemon-dessert.jpg";

const Specials = () => {

    return (
        <section className="w-full grid grid-cols-12 h-1/2 mt-6">
            <div className="col-start-2 col-span-10 flex w-full items-center justify-between my-6">
                <p className="text-customGreen text-3xl font-markazi xl:text-4xl 2xl:text-5xl 3xl:text-6xl">This
                    Week Specials!</p>
                <a href="/maintenance">
                    <button
                        className="bg-customYellow font-karla text-customGreen rounded-3xl py-2 px-5 xl:text-lg 3xl:text-2xl hover:bg-customGreen hover:text-customYellow">Online
                        Menu
                    </button>
                </a>
            </div>
            <div
                className="col-start-2 col-span-10 flex flex-col flex-wrap sm:flex-row lg:gap-4 2xl:gap-8 justify-between text-customGreen">
                <CardV
                    title="Greek Salad"
                    price="12.99"
                    text="Experience the taste of the Mediterranean with our Greek Salad—crisp lettuce, ripe tomatoes, Kalamata olives, and creamy feta cheese, all tossed in our signature Greek dressing."
                    image={imgGreekSalad}
                    imageAlt="hello world"
                    className="mb-12 sm:w-64 md:w-72 lg:flex-1 lg:mb-0 xl:h-[28rem] 2xl:h-[35rem] 3xl:h-[45rem] text-center"
                ></CardV>
                <CardV
                    title="Bruchetta"
                    price="5.99"
                    text="Enjoy the perfect harmony of crusty bread, ripe tomatoes, basil, and garlic-infused olive oil in our classic Bruschetta."
                    image={imgBruschetta}
                    imageAlt="hello world"
                    className="mb-12 sm:w-64 md:w-72 lg:flex-1 lg:mb-0 xl:h-[28rem] 2xl:h-[35rem] 3xl:h-[45rem] text-center"
                ></CardV>
                <CardV
                    title="Lemon Dessert"
                    price="6.00"
                    text="Delight in our Lemon Dessert—layers of tangy lemon curd and fluffy sponge cake, finished with a zesty lemon glaze for a refreshing and indulgent treat."
                    image={imgLemonDessert}
                    imageAlt="hello world"
                    className="mb-12 sm:w-64 md:w-72 sm:mx-auto lg:flex-1 lg:m-0 xl:h-[28rem] 2xl:h-[35rem] 3xl:h-[45rem] text-center "
                ></CardV>
            </div>
        </section>
    )
}

export default Specials;