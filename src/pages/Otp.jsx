import MyNavbar from "../components/MyNavbar"
import Footer from "../components/Footer"
import OtpCom from "../components/OtpCom"

function Otp() {
  return (
    <div className="flex h-screen flex-col justify-between">
      <MyNavbar />
      <OtpCom />
      <Footer />
    </div>
  )
}

export default Otp
