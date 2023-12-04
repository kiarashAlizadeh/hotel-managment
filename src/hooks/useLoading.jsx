import { useState, useEffect } from "react"

function useLoading() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // تعریف یک تابع callback برای تنظیم وضعیت isLoading
    function handleLoading() {
      // اگر صفحه کاملا بارگذاری شده باشد، isLoading را false قرار میدهیم
      if (document.readyState === "complete") {
        setIsLoading(false)
      }
    }

    // فراخوانی تابع callback برای بار اول
    handleLoading()

    // اضافه کردن یک event listener برای تغییرات readyState
    document.addEventListener("readystatechange", handleLoading)

    // پاک کردن event listener در صورت unmount شدن کامپوننت
    return () => {
      document.removeEventListener("readystatechange", handleLoading)
    }
  }, [])

  return isLoading
}

export default useLoading
