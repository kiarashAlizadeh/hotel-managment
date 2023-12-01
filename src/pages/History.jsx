import MyNavbar from "../components/MyNavbar"
import Footer from "../components/Footer"
import HistoryCom from "../components/HistoryCom"

function History() {
  return (
    <div className="flex h-screen flex-col justify-between">
      <MyNavbar />
      <HistoryCom />
      <Footer />
    </div>
  )
}

export default History
