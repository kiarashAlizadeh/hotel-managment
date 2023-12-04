import { BrowserRouter, Route, Routes } from "react-router-dom"

// pages
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Otp from "./pages/Otp"
import Reservation from "./pages/Reservation"
import Confirmation from "./pages/Confirmation"
import Pay from "./pages/Pay/Pay"
import Receipt from "./pages/Receipt"
import History from "./pages/History"
import ContactUs from "./pages/ContactUs"
import AboutUs from "./pages/AboutUs"
import NotFound from "./pages/NotFound"

// Loader import
import useLoading from "./hooks/useLoading"
import Loading from "./components/loading/Loading"

function App() {
  // Loader
  const isLoading = useLoading()

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Otp" element={<Otp />} />
            <Route path="/Reservation" element={<Reservation />} />
            <Route path="/Confirmation" element={<Confirmation />} />
            <Route path="/Pay" element={<Pay />} />
            <Route path="/Receipt" element={<Receipt />} />
            <Route path="/History" element={<History />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  )
}

export default App
