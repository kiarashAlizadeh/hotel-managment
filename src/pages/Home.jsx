import MyNavbar from "../components/MyNavbar"
import Footer from "../components/Footer"

function Home() {
  return (
    <div className="h-screen flex flex-col justify-between">
      <MyNavbar />
      <Footer />
    </div>
  )
}

export default Home
