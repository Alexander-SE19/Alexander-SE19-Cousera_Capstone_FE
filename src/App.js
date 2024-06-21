import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./Components/HomePage";
import BookingPage from "./Components/BookingPage";
import ErrorPage from "./Components/ErrorPage";
import MaintenancePage from "./Components/MaintenancePage";
import BookingSuccess from "./Components/BookingSuccess";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}></Route>
                <Route path="/booking" element={<BookingPage/>}></Route>
                <Route path="/booking/success" element={<BookingSuccess/>}></Route>
                <Route path="/maintenance" element={<MaintenancePage/>}></Route>
                <Route path="*" element={<ErrorPage/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
