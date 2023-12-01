import { useState } from "react"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"

import signin from "../assets/images/signIn.png"

function SignInCom() {
  // states
  const [Email, emailVal] = useState("")
  const [Pass, passVal] = useState("")

  let storedData = localStorage.getItem("user-Data")

  // inputs value handler
  const emailHandler = (e) => {
    emailVal(e.target.value)
  }
  const passHandler = (e) => {
    passVal(e.target.value)
  }

  const signInHandler = () => {
    if (storedData) {
      let userData = JSON.parse(storedData)
      let userExists = userData.find(
        (user) => user.email === Email && user.password === Pass
      )

      if (Email === "" || Pass === "") {
        const Toast = Swal.mixin({
          toast: true,
          position: "center-center",
          showConfirmButton: false,
          timer: 1000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer
            toast.onmouseleave = Swal.resumeTimer
          },
        })
        Toast.fire({
          icon: "error",
          title: "لطفا ایمیل و رمز خود را وارد کنید!",
        })
      } else if (userExists) {
        let userLogin = userExists.name
        localStorage.setItem("user-Login", userLogin)
        localStorage.setItem("is-Login", true)
        const Toast = Swal.mixin({
          toast: true,
          position: "center-center",
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
        }, 2000)
      } else {
        const Toast = Swal.mixin({
          toast: true,
          position: "center-center",
          showConfirmButton: false,
          timer: 1000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer
            toast.onmouseleave = Swal.resumeTimer
          },
        })
        Toast.fire({
          icon: "error",
          title: "رمز عبور و یا ایمیل شما درست نمی باشد!",
        })
      }
    } else {
      const Toast = Swal.mixin({
        toast: true,
        position: "center-center",
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer
          toast.onmouseleave = Swal.resumeTimer
        },
      })
      Toast.fire({
        icon: "error",
        title: "هیچ کاربری در سیستم ثبت نام نکرده است!",
      })
    }
  }

  return (
    <>
      <div className="mx-2 rounded-3xl bg-[#D9EFDE]">
        <section className="mx-auto mb-10 mt-3 flex w-fit select-none flex-col items-center justify-center rounded-lg md:mb-10 md:mt-3 md:h-[672px] md:flex-row md:items-center">
          <div className="mx-3 mb-2 md:mx-0 md:mb-0">
            <img
              src={signin}
              alt="sign in"
              className="mt-16 w-full sm:w-[645px] sm:rounded-l-lg"
              draggable="false"
            />
          </div>

          <div className="mb-10 flex flex-col items-start px-10 sm:mt-0 sm:bg-none md:justify-center lg:mx-24 lg:mb-0 lg:h-full lg:py-10">
            <form className="flex flex-col items-start gap-y-4">
              <h1 className="text-3xl font-black sm:text-5xl">ورود به سایت</h1>
              <span className="w-full">
                <label for="emailmobilenumber" className="text-gray-600">
                  ایمیل
                </label>
                <input
                  type="text"
                  id="emailmobilenumber"
                  name="emailmobilenumber"
                  className="input block w-full rounded-2xl px-3 py-2 hover:bg-slate-200"
                  placeholder="ایمیل خود را وارد کنید"
                  onChange={emailHandler}
                />
              </span>
              <span className="w-full" x-data="{ show: true }">
                <label for="password" className="text-gray-600">
                  رمز عبور
                </label>
                <div className="relative">
                  <input
                    placeholder="رمز عبور خود را وارد کنید"
                    type="password"
                    className="input block w-full rounded-2xl px-3 py-2 text-right hover:bg-slate-200"
                    onChange={passHandler}
                  />
                </div>
              </span>

              <span className="mb-4 flex flex-wrap justify-center gap-x-3 ">
                <span>
                  <input
                    type="checkbox"
                    id="Remember"
                    name="Remember"
                    value="من را به خاطر بسپار"
                    className="cursor-pointer"
                  />
                  <label
                    for="Remember"
                    className="cursor-pointer text-gray-600 hover:text-gray-900"
                  >
                    من را به خاطر بسپار
                  </label>
                </span>
                <Link
                  to="/resetPassword"
                  className="text-xl font-black text-green-700 "
                >
                  فراموشی رمز عبور
                </Link>
              </span>
            </form>
            <button
              className="w-full cursor-pointer rounded-3xl bg-[#4c7055] py-3 text-center text-white hover:opacity-75 sm:w-[301px] lg:text-2xl"
              onClick={signInHandler}
            >
              ورود
            </button>
            <span className="mt-3 flex flex-wrap justify-center gap-x-2">
              هنوز اکانت ایجاد نکرده اید؟
              <Link to="/signUp" className="text-xl font-black text-green-700">
                ثبت نام در سایت
              </Link>
            </span>
          </div>
        </section>
      </div>
    </>
  )
}

export default SignInCom
