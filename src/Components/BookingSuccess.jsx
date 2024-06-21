import {useLocation} from 'react-router-dom';
import Header from "./Header";
import {TbError404} from "react-icons/tb";
import Footer from "./Footer";

const BookingSuccess = ({booking}) => {

    const location = useLocation();
    const {formData} = location.state || {}; // Access the passed state

    function formatDate(dateString) {
        let parts = dateString.split('-');
        return `${parts[2]}.${parts[1]}.${parts[0]}`;
    }

    function getFirstName(fullName) {
        if (fullName.includes(' ')) {
            // Return the name until the first space
            return fullName.split(' ')[0];
        } else {
            // Find the position of the next uppercase letter after the first character
            let match = fullName.match(/^[a-z]+|[A-Z][a-z]*/g);
            // Return the name until the next uppercase letter or fullname
            return match ? match[0] : fullName;
        }
    }


    console.log("formdata: ", formData);
    return (
            <div className="flex flex-col h-screen w-screen hide-scrollbar">
                <Header className="h-16 lg:h-20"></Header>
                <div className="flex-1 flex flex-col items-center justify-center mx-4">
                    <div className="w-full bg-[#FFF8D6] shadow-lg rounded-lg my-4 font-markazi text-xl sm:w-2/3 md:text-2xl xl:w-1/2">
                        <div>
                        <h1 className="ml-4 mt-4">Dear <strong  className="text-customGreen text-3xl ml-2 md:text-4xl">{getFirstName(formData.fullname)}</strong>,</h1>
                            <p className="ml-4 mr-4 pb-4">
                                <br/>
                                We are delighted to confirm your reservation for the <strong
                                className="text-customGreen underline">{formatDate(formData.date)}</strong> at <strong
                                className="text-customGreen underline">{formData.time}</strong> at Little Lemon. Prepare
                                for an
                                evening of
                                exceptional cuisine and unparalleled elegance. We eagerly await your arrival.
                                <br/><br/>
                                An email confirming your reservation has also been sent to your provided email address.
                                <br/><br/>
                                With warm regards,<br/>
                                Your
                                <strong
                                    className="text-customGreen text-xl mx-2 md:text-2xl">Little Lemon</strong>
                                Team 🍋</p>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
    )
}

export default BookingSuccess;