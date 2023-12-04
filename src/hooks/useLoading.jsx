import { useState, useEffect } from "react"

function useLoading() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    function handleLoading() {
      // بررسی اگر تمامی محتویات صفحه لود شده باشند
      if (document.readyState === "complete") {
        setIsLoading(false)
      }
    }

    // استفاده از window.onload برای بررسی کامل لود شدن صفحه
    window.onload = () => {
      setIsLoading(false)
    }

    // فراخوانی تابع callback برای بار اول
    handleLoading()

    // پاک کردن window.onload در صورت unmount شدن کامپوننت
    return () => {
      window.onload = null
    }
  }, [])

  return isLoading
}

export default useLoading
