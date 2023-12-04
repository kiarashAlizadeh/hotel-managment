import MyNavbar from "../components/MyNavbar"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Cards from "../components/Cards"

// Loader import
import useLoading from "../hooks/useLoading"
import Loading from "../components/loading/Loading"

import bgHeader from "../assets/images/home/bgHeader.jpg"

function Home() {
  // Loader
  const isLoading = useLoading()
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div
            style={{
              backgroundImage: `url(${bgHeader})`,
            }}
            className="h-screen"
          >
            <div
              style={{
                // background: "rgba(255, 255, 255, 0.1)",
                height: "100%",
                padding: "10px",
              }}
            >
              <MyNavbar className="mb-0" />
              <Header />
            </div>
          </div>
          <Cards />
          <Footer />
        </>
      )}
    </>
  )
}

export default Home
