import MyNavbar from "../components/MyNavbar"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Cards from "../components/Cards"

// Loader import
import useLoading from "../hooks/useLoading"
import Loading from "../components/loading/Loading"

function Home() {
  // Loader
  const isLoading = useLoading()
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex h-screen flex-col justify-between">
          <MyNavbar />
          {/* <Header /> */}
          <Cards />
          <Footer />
        </div>
      )}
    </>
  )
}

export default Home
