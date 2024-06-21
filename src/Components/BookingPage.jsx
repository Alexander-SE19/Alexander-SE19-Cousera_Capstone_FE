import Header from "./Header";
import Footer from "./Footer";
import imgReserve from "./images/Reservation.png"
import BookingForm from "./BookingForm";
import {fetchAPI, submitAPI} from "../FakeAPI/fakeAPI";
import {useReducer, useState} from "react";
import {useNavigate} from "react-router-dom";
import ErrorModal from "./ErrorModal";


function BookingPage() {

    const navigate = useNavigate();

    const updateTimes = (availableTimes, date) => {
        const response = fetchAPI(new Date(date));
        return (response.length !== 0) ? response : availableTimes;
    };

    const initializeTimes = initializeTimes =>
        [...initializeTimes, ...fetchAPI(new Date())];

    const [availableTimes, dispatchOnDateChanged] = useReducer(updateTimes, [], initializeTimes);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

    const submitData = async (formData, resetForm) => {
        setIsLoading(true);
        setError(null);

        const response = submitAPI(formData);
        await delay(2000);

        setIsLoading(false);

        if (response) {
          //  console.log("response: ", response);
            resetForm();
            navigate("/booking/success", { state: { formData } });
        } else {
            setError("There was an error processing your request :(");
        }
    };

    const closeModal = () => {
        setError(null);
    };

    return (
        <div className="lg:flex flex-col h-screen hide-scrollbar">
            <Header className="h-16 lg:h-20"></Header>
            <div className="lg:flex-1 flex flex-col my-20 items-center justify-center gap-8 lg:flex-row lg: xl:gap-20">
                <BookingForm isLoading={isLoading} availableTimes={availableTimes}
                             dispatchOnDateChanged={dispatchOnDateChanged} submitData={submitData}></BookingForm>
                <img
                    className="w-1/2 sm:w-2/3 lg:w-[30rem] xl:w-[35rem] shadow-[15px_20px_20px_#00000033] lg:self-center"
                    src={imgReserve}
                    alt="Reserve Reserve Reservation"/>
            </div>
            {error && <ErrorModal message={error} onClose={closeModal}/>}
            <Footer></Footer>
        </div>
    )

}


export default BookingPage;