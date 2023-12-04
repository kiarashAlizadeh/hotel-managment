import MyNavbar from "../components/MyNavbar"
import Footer from "../components/Footer"
import SignUpCom from "../components/SignUpCom"

// Loader import
import useLoading from "../hooks/useLoading"
import Loading from "../components/loading/Loading"

function SignUp() {
  // Loader
  const isLoading = useLoading()
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <MyNavbar />
          <SignUpCom />
          <Footer />
        </>
      )}
    </>
  )
}

export default SignUp
