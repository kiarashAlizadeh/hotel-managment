import React, { useState, useRef } from "react"
import Swal from "sweetalert2"

function OtpCom() {
  const [otpValues, setOtpValues] = useState(["", "", "", ""])
  const [otpComplete, setOtpComplete] = useState("")
  const otpFieldsRef = useRef([])
  const otpCorrect = "3324" // اضافه کردن متغیر برای کد otp صحیح

  const handleInput = (index, value) => {
    if (value.length > 1) {
      return
    }
    const newOtpValues = [...otpValues]
    newOtpValues[index] = value
    setOtpValues(newOtpValues)
    updateOtpComplete(newOtpValues)
    validateOtpComplete(otpComplete)
    if (value.length === 1 && index < otpValues.length - 1) {
      otpFieldsRef.current[index + 1].focus()
    }
  }

  const handleBackspace = (index) => {
    if (otpValues[index] !== "") {
      const newOtpValues = [...otpValues]
      newOtpValues[index] = ""
      setOtpValues(newOtpValues)
      updateOtpComplete(newOtpValues)
      validateOtpComplete(otpComplete)
    } else if (index > 0) {
      otpFieldsRef.current[index - 1].focus()
    }
  }

  const updateOtpComplete = (newOtpValues) => {
    // تعریف تابع برای بروزرسانی کد otp کامل
    const newOtpComplete = newOtpValues.join("") // اتصال 4 رقم انفرادی به یک رشته
    setOtpComplete(newOtpComplete) // بروزرسانی state با رشته جدید
  }

  const validateOtpComplete = (otpComplete) => {
    // تعریف تابع برای بررسی معتبر بودن کد otp کامل
    if (otpComplete === "3324") {
      // اگر کد otp کامل برابر 3324 باشد
      console.log("ok") // نمایش ok در کنسول
    }
  }

  const otpHandler = () => {
    if (otpComplete === otpCorrect) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer
          toast.onmouseleave = Swal.resumeTimer
        },
      })
      Toast.fire({
        icon: "success",
        title: "با موفقیت وارد سایت شدید!",
      })
      setTimeout(() => {
        window.location.assign("/Reservation")
      }, 2000)
    } else {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer
          toast.onmouseleave = Swal.resumeTimer
        },
      })
      Toast.fire({
        icon: "error",
        title: "رمز وارد شده صحیح نیست!",
      })
    }
  }
  let phoneNumber = "091208***23"
  return (
    <>
      <div className="mb-10 mt-5 flex flex-col items-center px-5">
        <h2 className="mb-5 text-center text-xl sm:text-3xl md:text-3xl">
          کد پیامک شده به شماره
          <br className="md:hidden" /> <bdo dir="ltr">{phoneNumber}</bdo>{" "}
          {"\u00A0"}
          <br className="md:hidden" />
          را وارد کنید:
        </h2>
        <div dir="ltr" className="flex flex-row justify-center gap-x-4">
          {otpValues.map((value, index) => (
            <input
              name="otp1"
              type="number"
              autoComplete="off"
              className="w-10 rounded-xl px-2 py-1 text-center sm:h-16 sm:w-16 sm:text-xl  md:h-24 md:w-24 md:text-3xl"
              value={value}
              onChange={(e) => handleInput(index, e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Backspace") {
                  handleBackspace(index)
                }
              }}
              ref={(ref) => {
                otpFieldsRef.current[index] = ref
              }}
              tabIndex="1"
              maxLength="1"
              key={index}
              autofocus
            />
          ))}
        </div>
        <button
          className="mt-4 w-full cursor-pointer rounded-lg bg-blue-500 px-2 py-2 text-center text-white hover:bg-blue-700 sm:w-[301px] lg:w-[429px] lg:text-3xl"
          onClick={otpHandler}
        >
          ثبت
        </button>
      </div>
    </>
  )
}

export default OtpCom
