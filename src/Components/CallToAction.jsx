import imgCTA from "./images/ctaBruschetta.jpg";

const callToAction = () => {
    return (
        <section className="w-screen h-1/2 grid grid-cols-12 pt-32 pb-16 bg-customGreen">
            <div className="col-start-2 col-span-10 lg:col-span-5 lg:col-start-2 my-auto 3xl:mb-14">
                <h2 id="home"
                    className="text-6xl font-bold text-customYellow mb-1 font-markazi xl:text-7xl 2xl:text-8xl 3xl:text-9xl">Little
                    Lemon</h2>
                <h4 className="text-4xl text-customCardBg mb-7 font-markazi xl:text-5xl 2xl:text-6xl 3xl:text-7xl">Chicago</h4>
                <p className="text-md text-customCardBg font-karla xl:text-base 2xl:text-lg 3xl:text-2xl">
                    Welcome to Little Lemon, where the vibrant flavors of the Mediterranean meet the heart of
                    Chicago.
                    Indulge in a culinary journey inspired by sun-kissed shores and azure waters, as we invite you
                    to savor
                    the essence of the Mediterranean right here in the heart of the Windy City. From tantalizing
                    mezzes to
                    succulent grilled delights, every dish at Little Lemon is crafted with passion and authenticity,
                    promising
                    an unforgettable dining experience that transports you to the shores of Greece, Italy, and
                    beyond.</p>
                <a href="/booking">
                    <button
                        className="bg-customYellow font-karla font-medium text-customGreen rounded-3xl mt-10 py-2 px-5 xl:text-lg 3xl:text-2xl transform hover:-translate-y-2 transition duration-100 ease-in-out hover:bg-customCardBg hover:text-customGreen ">Reserve
                        a table
                    </button>
                </a>
            </div>
            <img src={imgCTA} alt="bruschetta"
                 className="mt-16 w-full h-60 col-start-2 col-span-10 lg:m-0 lg:col-start-8 lg:col-span-4 lg:h-96 3xl:my-auto object-cover rounded-lg"/>
        </section>
    )
}

export default callToAction;