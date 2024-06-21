import Header from "./Header";
import Footer from "./Footer";
import {GiCook} from "react-icons/gi";

const MaintenancePage = () => {

    return (
        <div className="flex flex-col h-screen w-screen hide-scrollbar">
            <Header className="h-16 lg:h-20"></Header>
            <div className="flex-1 flex flex-col items-center justify-center mx-4">
                <GiCook className="size-16 sm:size-20 md:size-32 lg:size-56 text-customYellow"/>
                <h1 className="text-3xl text-center sm:text-start sm:text-4xl md:text-5xl lg:text-6xl font-bold text-customGreen mb-1 font-markazi ">Deliciousness
                    under construction</h1>
                <p className="text-base text-center sm:text-start sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-customYellow font-karla">We’re
                    whipping up something amazing. Stay tuned for a flavorful experience!</p>
                <a href="/">
                    <button
                        className="bg-customGreen font-karla font-medium mt-5 text-customCardBg rounded-3xl py-4 px-6 xl:text-lg 3xl:text-2xl hover:bg-customYellow hover:text-customGreen ">
                        Head back to Home
                    </button>
                </a>
            </div>

            <Footer></Footer>
        </div>
    )
}


export default MaintenancePage;