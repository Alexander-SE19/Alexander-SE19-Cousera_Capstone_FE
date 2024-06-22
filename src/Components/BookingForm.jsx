import {useFormik} from "formik";
import * as Yup from "yup";


const BookingForm = ({isLoading, availableTimes, dispatchOnDateChanged, submitData}) => {


    const dateChanged = async (e) => {
        formik.handleChange(e);

        await formik.validateField("date");

        if (!formik.errors.date) {
            dispatchOnDateChanged(e.target.value);
        }
    };


    const formik = useFormik({
        initialValues: {
            occasion: "Birthday",
            date: new Date().toISOString().split('T')[0],
            amountDiners: "",
            time: availableTimes[0],
            fullname: "",
            phone: "",
            email: "",
            addInfo: "",

        },
        onSubmit: (values, {resetForm}) => {
            submitData(values, resetForm);
            /*setIsLoading(true);*/
            //console.log(values);
        },
        validationSchema: Yup.object({
            occasion: Yup.string()
                .oneOf(["Birthday", "Wedding", "Romantic Dinner", "Anniversary"], "Invalid Occasion"),
            date: Yup.date()
                .typeError('Invalid date format')
                .required('Required')
                .test(
                    'is-current-year',
                    'Must be within current year',
                    value => {
                        if (!value) return true;
                        const today = new Date();
                        const selectedDate = new Date(value);
                        return selectedDate.getFullYear() === today.getFullYear();
                    }
                ),
            amountDiners: Yup.number().positive().integer()
                .min(1, "Invalid number (Valid:1-15)")
                .max(15, "Invalid number (Valid:1-15)")
                .required("Required"),
            time: Yup.string()
                .matches(
                    /^(1[8-9]|2[0-1]):[0-5][0-9]|22:00$/,
                    "Available 6pm-10pm"
                )
                .required("Required"),
            fullname: Yup.string().required("Required"),
            email: Yup.string().email("Invalid email address").required("Required"),
            phone: Yup.string()
                .matches(
                    /^(\+\d{1,3}[- ]?)?\d{10}$/,
                    "Invalid number (format:+xx ...)"
                )
                .required("Required"),
            addInfo: Yup.string()
                .min(10, "Must be at least 10 chars")
        }),
    });


    return (
        <>
            <form onSubmit={formik.handleSubmit}
                  className="flex flex-col flex-wrap gap-4 w-1/2 sm:w-2/3 lg:w-[28rem] sm:gap-7 md:gap-10">
                <h1 className="text-5xl font-markazi font-bold text-customGreen md:text-6xl ">Reservation</h1>
                <h3 className="text-3xl font-markazi font-bold text-customGreen md:text-4xl ">Personal Details</h3>

                <div className="flex flex-col gap-0 sm:flex-row sm:gap-10">


                    {formik.touched.occasion && formik.errors.occasion ? (
                            <p className="text-red-600 text-sm z-10 sm:absolute sm:-mt-5">{formik.errors.occasion} !</p>
                        )
                        : null}
                    <select data-testid="booking-occasion-select"
                        className={`border-b-2 font-karla ${formik.touched.occasion && formik.errors.occasion ? "border-b-red-600" : ""} border-b-customGreen pl-2 w-full lg:text-lg focus:border-b-customYellow`}

                        {...formik.getFieldProps('occasion')}>
                        <option data-testid="booking-occasion-option">Birthday</option>
                        <option data-testid="booking-occasion-option">Wedding</option>
                        <option data-testid="booking-occasion-option">Romantic Dinner</option>
                        <option data-testid="booking-occasion-option">Anniversary</option>
                    </select>

                    <div className="w-full relative mt-4 sm:mt-0">
                        {formik.touched.date && formik.errors.date ? (
                                <p className="text-red-600 text-sm z-10 sm:absolute sm:-mt-5">{formik.errors.date} !</p>
                            )
                            : null}
                        <input
                            className={`border-b-2 font-karla ${formik.touched.date && formik.errors.date ? "border-b-red-600" : ""} border-b-customGreen pl-3 w-full focus:border-b-customYellow lg:text-lg `}
                            type="date"
                            data-testid="booking-date-option"
                            onChange={dateChanged}
                            name="date"
                            value={formik.values.date}
                            onBlur={formik.handleBlur}
                        ></input>
                    </div>

                </div>


                <div className="flex flex-col gap-0 sm:flex-row sm:gap-10">
                    {formik.touched.amountDiners && formik.errors.amountDiners ? (
                            <p data-testid="error-message" className="text-red-600 text-sm z-10 sm:absolute sm:-mt-5 lg:absolute">{formik.errors.amountDiners} !</p>
                        )
                        : null}
                    <input
                        type="number"
                        data-testid="booking-number-guests"
                        placeholder="Number of Diners"
                        className={`border-0 border-b-2  font-karla ${formik.touched.amountDiners && formik.errors.amountDiners ? "border-b-red-600" : ""} border-b-customGreen pl-3 w-full lg:text-lg focus:border-b-customYellow`}
                        {...formik.getFieldProps('amountDiners')}
                    />

                    <div className="w-full relative mt-4 sm:mt-1">
                        {formik.touched.time && formik.errors.time ? (
                                <p className=" text-red-600 text-sm z-10 sm:absolute sm:-mt-6 lg:absolute">{formik.errors.time} !</p>
                            )
                            : null}
                        <select data-testid="booking-time-select"
                            className={`border-b-2 font-karla ${formik.touched.time && formik.errors.time ? "border-b-red-600" : ""} border-b-customGreen pl-3 w-full focus:border-b-customYellow lg:text-lg `}
                            {...formik.getFieldProps('time')}>
                            {availableTimes.map(times =>
                                <option data-testid="booking-time-option" key={times}>
                                    {times}
                                </option>
                            )}
                        </select>
                    </div>
                </div>
                <h3 className="mt-4 text-3xl font-markazi font-bold text-customGreen md:text-4xl">Booking
                    Details</h3>
                <div className="flex flex-col gap-0 sm:flex-row sm:gap-10">
                    {formik.touched.fullname && formik.errors.fullname ? (
                            <p className="text-red-600 text-sm z-10 sm:absolute sm:-mt-5">{formik.errors.fullname} !</p>
                        )
                        : null}
                    <input
                        className={`border-b-2 font-karla ${formik.touched.fullname && formik.errors.fullname ? "border-b-red-600" : ""} border-b-customGreen pl-3 w-full lg:text-lg focus:border-b-customYellow`}
                        type="text"
                        placeholder="Full name"
                        {...formik.getFieldProps('fullname')}
                    />

                    <div className="w-full relative mt-4 sm:mt-0">
                        {formik.touched.email && formik.errors.email ? (
                                <p className=" text-red-600 text-sm z-10 sm:absolute sm:-mt-5">{formik.errors.email} !</p>
                            )
                            : null}
                        <input
                            className={`border-b-2 font-karla ${formik.touched.email && formik.errors.email ? "border-b-red-600" : ""} border-b-customGreen pl-3 w-full lg:text-lg focus:border-b-customYellow`}
                            type="email"
                            placeholder="Email"
                            {...formik.getFieldProps('email')}/>
                    </div>
                </div>
                <div className="flex flex-col gap-0 sm:flex-row sm:gap-10">

                    {formik.touched.phone && formik.errors.phone ? (
                            <p className=" text-red-600 text-sm z-10 sm:absolute sm:-mt-5">{formik.errors.phone} !</p>
                        )
                        : null}
                    <input
                        className={`border-b-2 font-karla ${formik.touched.phone && formik.errors.phone ? "border-b-red-600" : ""} border-b-customGreen pl-3 w-full lg:text-lg focus:border-b-customYellow`}
                        type="tel"
                        placeholder="Phone Number"
                        {...formik.getFieldProps('phone')}/>

                    <div className="w-full relative mt-4 sm:mt-0">
                        {formik.touched.addInfo && formik.errors.addInfo ? (
                                <p className=" text-red-600 text-sm z-10 sm:absolute sm:-mt-5">{formik.errors.addInfo} !</p>
                            )
                            : null}
                        <input
                            className={`border-b-2 font-karla ${formik.touched.addInfo && formik.errors.addInfo ? "border-b-red-600" : ""} border-b-customGreen pl-3 w-full lg:text-lg focus:border-b-customYellow`}
                            type="text"
                            placeholder="Additional information"
                            {...formik.getFieldProps('addInfo')}/>
                    </div>
                </div>
                <button type="submit"
                        role="button"
                        className="font-karla bg-customGreen rounded-3xl text-customCardBg mt-4 w-52 p-2 self-center lg:text-lg hover:text-customGreen hover:bg-customYellow">

                    {isLoading ? (
                            <svg className="animate-spin h-6 w-52 text-white" xmlns="http://www.w3.org/2000/svg"
                                 fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                        strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor"
                                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        ) :
                        (
                            <p>Confirm Reservation</p>
                        )


                    }
                </button>
            </form>
        </>
    )
}

export default BookingForm;