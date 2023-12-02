import React, { useState, useRef, useEffect } from "react"
import Swal from "sweetalert2"

function OtpCom() {
  let storedData = localStorage.getItem("user-Data")
  var userLogin = localStorage.getItem("user-Login")

  let userData = JSON.parse(storedData)
  let userExistsIndex = userData.findIndex((user) => user.name === userLogin)

  const mobileNumber = userData[userExistsIndex].mobileNumber
  const otp = userData[userExistsIndex].otp

  function maskPhoneNumber(phoneNumber) {
    if (phoneNumber.length !== 11) {
      return "شماره تلفن نامعتبر است"
    }

    const maskedNumber =
      phoneNumber.substring(0, 6) + "***" + phoneNumber.substring(9)
    return maskedNumber
  }

  const starMobileNumber = maskPhoneNumber(mobileNumber)
  const [otpValues, setOtpValues] = useState(["", "", "", ""])
  const [otpComplete, setOtpComplete] = useState("")
  const otpFieldsRef = useRef([])

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
    if (otpComplete === otp) {
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

  useEffect(() => {
    alert(`رمز پیامک ورود به سایت : ${otp}`)
  }, [])

  return (
    <>
      <div className="mx-2 rounded-3xl bg-[#adbdb0]">
        <div className="mb-10 mt-5 flex flex-col items-center px-5">
          <h2 className="mb-5 text-center text-xl sm:text-3xl md:text-3xl">
            کد پیامک شده به شماره
            <br className="md:hidden" /> <bdo dir="ltr">{starMobileNumber}</bdo>{" "}
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
                className="h-12 w-10 rounded-xl px-2  py-1 text-center text-xl font-semibold focus:bg-white sm:h-16 sm:w-16 md:h-24 md:w-24 md:text-3xl"
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
            className={`mt-4 w-full cursor-pointer rounded-3xl px-2 py-3 text-center text-white sm:w-[301px] lg:text-3xl ${
              otpComplete.length !== 4
                ? "disabled cursor-not-allowed bg-gray-400"
                : "bg-[#4c7055] hover:bg-[#2e4b35]"
            }`}
            // mt-3 w-full cursor-pointer rounded-3xl bg-[#4c7055] px-2 py-3 text-center text-white hover:opacity-75 sm:w-[301px] lg:text-2xl
            disabled={otpComplete.length !== 4}
            onClick={otpHandler}
          >
            ثبت
          </button>
        </div>
      </div>
    </>
  )
}

export default OtpCom
