import { useState, useEffect } from "react"

function useLoading() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // const handleLoad = () => {
    //   setIsLoading(false)
    // }

    window.addEventListener("load", setIsLoading(false))

    // return () => {
    //   window.removeEventListener("load", handleLoad)
    // }
  }, [])

  return isLoading
}

export default useLoading
