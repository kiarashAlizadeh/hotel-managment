import { useState, useEffect } from "react"

import MyNavbar from "../components/MyNavbar"
import Footer from "../components/Footer"
import SignUpCom from "../components/SignUpCom"

function SignUp() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <>
      {isLoading ? (
        <p> Loading ...</p>
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
