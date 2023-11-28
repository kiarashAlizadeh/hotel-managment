import { BrowserRouter, Route, Routes } from "react-router-dom"

// pages
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Reservation from "./pages/Reservation"
import Confirmation from "./pages/Confirmation"
import Receipt from "./pages/Receipt"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Reservation" element={<Reservation />} />
        <Route path="/Confirmation" element={<Confirmation />} />
        <Route path="/Receipt" element={<Receipt />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
