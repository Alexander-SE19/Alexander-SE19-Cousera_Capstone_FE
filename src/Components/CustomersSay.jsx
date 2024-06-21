import CardH from "./CardH";
import imgManSitting from "./images/sittingMan.jpg";
import imgWomanDrinking from "./images/womanDrinking.jpg";
import imgManStanding from "./images/standingMan.jpg";
import imgWomanDrinking1 from "./images/womanDrinking1.jpg";

const CustomersSay = () => {

    return (
        <section className="w-full grid grid-cols-12 h-1/2 bg-customGreen py-20 lg:mt-20">
            <h3 className="col-start-1 col-span-12 text-center text-5xl font-medium font-markazi text-customYellow xl:text-6xl 3xl:text-7xl">Taste
                Testimonials:</h3>
            <h4 className="col-start-1 col-span-12 text-center text-2xl md:text-3xl font-markazi text-customCardBg xl:text-4xl 3xl:text-5xl">Savory
                Stories from Little
                Lemon's Diners</h4>
            <div
                className="col-start-2 col-span-10 flex flex-col lg:justify-between flex-wrap sm:gap-4 lg:gap-8 2xl:gap-8 sm:flex-row xl:flex-row mt-8 text-customGreen 3xl:mb-10">
                <CardH
                    testImage={imgManSitting}
                    imageAlt="A man is sitting on a chair"
                    text="Little Lemon serves up the freshest Greek salads in town, bursting with flavor and crisp ingredients."
                    name="Alex William"
                    className="flex-1 mb-10 sm:m-0 md:flex-none md:w-[calc(50%-1rem)] 3xl:flex-1">
                </CardH>
                <CardH
                    testImage={imgWomanDrinking}
                    imageAlt="A woman is drinking from a cup."
                    text="The bruschetta at Little Lemon is a delightful blend of tangy tomatoes, fragrant basil, and crusty bread - a perfect appetizer."
                    name="Mark Wrench"
                    className="flex-1 mb-10 sm:m-0 md:flex-none md:w-[calc(50%-1rem)] 3xl:flex-1">
                </CardH>
                <CardH
                    testImage={imgManStanding}
                    imageAlt="Guy standing behind a bike."
                    text="Indulge in Little Lemon's lemon dessert for a zesty and refreshing end to your meal - a true taste of the Mediterranean."
                    name="Pierre Guotin"
                    className="flex-1 mb-10 sm:m-0 md:flex-none md:w-[calc(50%-1rem)] 3xl:flex-1">
                </CardH>
                <CardH
                    testImage={imgWomanDrinking1}
                    imageAlt="Another woman drinking from a cup."
                    text="Little Lemon's grilled fish is simply divine, perfectly cooked and seasoned to perfection, transporting you to seaside tavernas in Greece with every bite."
                    name="Gisele Wings"
                    className="flex-1 mb-10 sm:m-0 md:flex-none md:w-[calc(50%-1rem)] 3xl:flex-1">
                </CardH>
            </div>
        </section>
    )
}

export default CustomersSay;