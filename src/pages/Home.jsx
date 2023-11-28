import MyNavbar from "../components/MyNavbar"
import Footer from "../components/Footer"
import Header from "../components/Header"

function Home() {
  return (
    <div className="flex h-screen flex-col justify-between">
      <MyNavbar />
      <Header />
      <Footer />
    </div>
  )
}

export default Home
