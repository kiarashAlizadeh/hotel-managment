import React, { useState, useRef } from "react"
import Swal from "sweetalert2"

function OtpCom() {
  const [otpValues, setOtpValues] = useState(["", "", "", ""])
  const [otpComplete, setOtpComplete] = useState("")
  const otpFieldsRef = useRef([])
  const otpCorrect = "9876" // متغیر برای کد otp صحیح

  const handleInput = (index, value) => {
    if (value.length > 1) {
      return
    }
    const newOtpValues = [...otpValues]
    newOtpValues[index] = value
    setOtpValues(newOtpValues)
    updateOtpComplete(newOtpValues)
    if (value.length === 1 && index < otpValues.length - 1) {
      setTimeout(() => {
        otpFieldsRef.current[index + 1].focus()
      }, 10)
    }
  }

  const handleBackspace = (index) => {
    if (otpValues[index] !== "") {
      const newOtpValues = [...otpValues]
      newOtpValues[index] = ""
      setOtpValues(newOtpValues)
      updateOtpComplete(newOtpValues)
    } else if (index > 0) {
      otpFieldsRef.current[index - 1].focus()
    }
  }

  const updateOtpComplete = (newOtpValues) => {
    const newOtpComplete = newOtpValues.join("")
    setOtpComplete(newOtpComplete)
  }

  const validateOtpComplete = () => {
    if (otpComplete === otpCorrect) {
      return true
    }
    return false
  }

  const otpHandler = () => {
    if (validateOtpComplete()) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1000,
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
      }, 1000)
    } else {
      setOtpValues(["", "", "", ""])
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

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && otpComplete.length === 4) {
      e.preventDefault()
      otpHandler()
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
              className="w-10 rounded-xl px-2 py-1 text-center sm:h-16 sm:w-16 sm:text-xl md:h-24 md:w-24 md:text-3xl"
              value={value}
              onChange={(e) => handleInput(index, e.target.value)}
              onKeyDown={(e) => {
                handleKeyPress(e)
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
              disabled={
                index !== 0 &&
                otpValues[index - 1] === "" &&
                otpValues[index] === ""
              }
              autoFocus={index === 0}
            />
          ))}
        </div>
        <button
          className={`mt-4 w-full cursor-pointer rounded-lg px-2 py-2 text-center text-white sm:w-[301px] lg:w-[429px] lg:text-3xl ${
            otpComplete.length !== 4
              ? "disabled cursor-not-allowed bg-gray-400"
              : "bg-blue-500 hover:bg-blue-700"
          }`}
          disabled={otpComplete.length !== 4}
          onClick={otpHandler}
        >
          ثبت
        </button>
      </div>
    </>
  )
}

export default OtpCom
