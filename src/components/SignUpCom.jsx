import { useState } from "react"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"

import signup from "../assets/images/signUp.png"

function SignUpCom() {
  // states
  const [Name, nameVal] = useState("")
  const [Family, familyVal] = useState("")
  const [Gender, genderVal] = useState("")
  const [NationalNumber, nationalNumberVal] = useState("")
  const [MobileNumber, mobileNumberVal] = useState("")
  const [Email, emailVal] = useState("")
  const [Pass, passVal] = useState("")
  const [ConfirmPass, confirmPassVal] = useState("")

  function generateRandomNumber() {
    // تولید یک عدد اعشاری بین 0 و 1
    var random = Math.random()
    // ضرب عدد در 10000
    random = random * 10000
    // گرفتن بخش صحیح عدد
    random = Math.floor(random)
    // اضافه کردن 1000 به عدد
    random = random + 1000
    // گرفتن باقیمانده تقسیم عدد بر 10000
    random = random % 10000
    // برگرداندن عدد تصادفی 4 رقمی
    return random.toString()
  }
  const Otp = generateRandomNumber()

  const localStorageHandler = () => {
    let storedData = localStorage.getItem("user-Data")
    let userData = []

    if (storedData) {
      userData = JSON.parse(storedData)
    }

    userData.push({
      name: Name,
      family: Family,
      gender: Gender,
      nationalNumber: NationalNumber,
      mobileNumber: MobileNumber,
      email: Email,
      password: Pass,
      otp: Otp,
      reserves: [],
    })
    let jsonData = JSON.stringify(userData)
    localStorage.setItem("user-Data", jsonData)
    localStorage.setItem("is-Login", true)
    localStorage.setItem("user-Login", Name)
  }

  // inputs value handler
  const nameHandler = (e) => {
    nameVal(e.target.value)
  }
  const familyNameHandler = (e) => {
    familyVal(e.target.value)
  }
  const genderHandler = (e) => {
    genderVal(e.target.value)
  }
  const nationalCodeHandler = (e) => {
    nationalNumberVal(e.target.value)
  }
  const phoneNumberHandler = (e) => {
    mobileNumberVal(e.target.value)
  }
  const emailHandler = (e) => {
    emailVal(e.target.value)
  }
  const passHandler = (e) => {
    passVal(e.target.value)
  }
  const confirmPassHandler = (e) => {
    confirmPassVal(e.target.value)
  }

  const signUpHandler = () => {
    if (
      Name === "" ||
      Family === "" ||
      Gender === "" ||
      NationalNumber === "" ||
      MobileNumber === "" ||
      Email === "" ||
      Pass === "" ||
      ConfirmPass === ""
    ) {
      const Toast = Swal.mixin({
        toast: true,
        position: "center-center",
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
        title: "لطفا تمامی مقادیر فرم را پر کنید!",
      })
    } else if (Pass !== ConfirmPass) {
      const Toast = Swal.mixin({
        toast: true,
        position: "center-center",
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
        title: "رمز عبور شما با تکرار آن همخوانی ندارد!",
      })
    } else {
      localStorageHandler()
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
        icon: "info",
        title: "کد ورود برای شما پیامک شد!",
      })
      setTimeout(() => {
        window.location.assign("/Otp")
      }, 2000)
    }
  }

  return (
    <>
      <div className="mx-2 rounded-3xl bg-[#D9EFDE]">
        <section className="mx-auto mb-10 mt-3 flex w-fit select-none flex-col items-center justify-center rounded-lg md:mb-10 md:mt-3 md:flex-row-reverse md:items-center">
          <div className="mx-3 mb-2 md:mx-0 md:mb-0">
            <img
              src={signup}
              alt="sign in"
              className="mt-16 w-full sm:w-[445px] sm:rounded-l-lg "
              draggable="false"
            />
          </div>

          <div className="mb-10 flex flex-col items-center gap-y-5 px-10 py-5 sm:bg-none md:justify-center lg:mx-24 lg:mb-0 lg:h-full lg:py-10">
            <h1 className="text-3xl font-black sm:text-5xl">ثبت نام در سایت</h1>
            <form className="flex flex-col items-start gap-y-4">
              <span className="w-full">
                <label className="mr-3 text-gray-600">نام</label>
                <input
                  type="text"
                  className="input block w-full rounded-2xl px-3 py-2 hover:bg-slate-200"
                  placeholder="نام"
                  onChange={nameHandler}
                />
              </span>
              <span className="w-full">
                <label className="mr-3 text-gray-600">نام خانوادگی</label>
                <input
                  type="text"
                  className="input block w-full rounded-2xl px-3 py-2 hover:bg-slate-200"
                  placeholder="نام خانوادگی"
                  onChange={familyNameHandler}
                />
              </span>
              <span className="flex w-full flex-col gap-x-4">
                <label className="mr-3 text-gray-600">جنسیت</label>
                <select
                  className="rounded-2xl border-none py-2 text-center shadow-inner shadow-black/30"
                  onChange={genderHandler}
                >
                  <option value="" disabled selected>
                    جنسیت خود را انتخاب کنید
                  </option>
                  <option value="آقا">آقا</option>
                  <option value="خانم">خانم</option>
                </select>
              </span>
              <span className="w-full">
                <label className="mr-3 text-gray-600">کد ملی</label>
                <input
                  type="text"
                  className="input block w-full rounded-2xl px-3 py-2 hover:bg-slate-200"
                  placeholder="کد ملی"
                  onChange={nationalCodeHandler}
                />
              </span>
              <span className="w-full">
                <label className="mr-3 text-gray-600">تلفن همراه</label>
                <input
                  type="text"
                  className="input block w-full rounded-2xl px-3 py-2 hover:bg-slate-200"
                  placeholder="تلفن همراه"
                  onChange={phoneNumberHandler}
                />
              </span>
              <span className="w-full">
                <label className="mr-3 text-gray-600">ایمیل</label>
                <input
                  type="text"
                  className="input block w-full rounded-2xl px-3 py-2 hover:bg-slate-200"
                  placeholder="ایمیل"
                  onChange={emailHandler}
                />
              </span>
              <span className="w-full" x-data="{ show: true }">
                <label className="mr-3 text-gray-600">رمز عبور</label>
                <div className="relative">
                  <input
                    placeholder="رمز عبور"
                    type="password"
                    className="input block w-full rounded-2xl px-3 py-2 text-right hover:bg-slate-200"
                    onChange={passHandler}
                  />
                </div>
              </span>
              <span className="w-full" x-data="{ show: true }">
                <label className="mr-3 text-gray-600">تکرار رمز عبور</label>
                <div className="relative">
                  <input
                    placeholder="تکرار رمز عبور"
                    type="password"
                    className="input block w-full rounded-2xl px-3 py-2 text-right hover:bg-slate-200"
                    onChange={confirmPassHandler}
                  />
                </div>
              </span>
            </form>
            <button
              className="w-full cursor-pointer rounded-3xl bg-[#4c7055] py-3 text-center text-white hover:opacity-75 sm:w-[301px] lg:text-2xl"
              onClick={signUpHandler}
            >
              ثبت نام
            </button>
            <span className="mt-3 flex flex-wrap justify-center gap-x-2">
              قبلا در سایت ثبت نام کرده اید ؟
              <Link to="/SignIn" className="text-xl font-black text-green-700">
                ورود به سایت
              </Link>
            </span>
          </div>
        </section>
      </div>
    </>
  )
}

export default SignUpCom
