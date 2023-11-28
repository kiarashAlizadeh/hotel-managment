import { Link } from "react-router-dom"
import Swal from "sweetalert2"

import signin from "../assets/images/signin.svg"
import google from "../assets/icons/google-color.svg"
import facebook from "../assets/icons/facebook-color.svg"
import instagram from "../assets/icons/instagram-color.svg"

function SignInCom() {
  const signInHandler = () => {
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
  }
  return (
    <>
      <main>
        <section className="mx-auto mb-10 mt-3 flex w-fit select-none flex-col items-center justify-center rounded-lg bg-blue-100 md:mb-10 md:mt-3 md:h-[672px] md:flex-row-reverse md:items-center">
          <div className="relative">
            <img
              src={signin}
              alt="sign in"
              className="mt-16 w-full sm:w-[645px] sm:rounded-l-lg"
              draggable="false"
            />
            <span className="absolute left-0 top-5 text-center text-xl text-slate-600 sm:left-8 sm:top-12 sm:w-[138px] sm:text-start md:w-[197px]">
              خوش آمدید, جهت استفاده از امکانات به سایت ورود کنید!
            </span>
          </div>

          <div className="mb-10 flex flex-col items-start px-10 sm:mt-0 sm:bg-none md:justify-center lg:mx-24 lg:mb-0 lg:h-full lg:py-10">
            <form className="flex flex-col items-start gap-y-4">
              <h1 className="text-3xl font-black sm:text-5xl">ورود به سایت</h1>
              <span className="w-full">
                <label for="emailmobilenumber" className="text-gray-600">
                  ایمیل یا شماره همراه
                </label>
                <input
                  type="text"
                  id="emailmobilenumber"
                  name="emailmobilenumber"
                  className="input block w-full"
                  placeholder="ایمیل یا شماره همراه خود را وارد کنید"
                />
              </span>
              <span className="w-full" x-data="{ show: true }">
                <label for="password" className="text-gray-600">
                  رمز عبور
                </label>
                <div className="relative">
                  <input
                    placeholder="رمز عبور خود را وارد کنید"
                    type="show ? 'password' : 'text'"
                    className="input block w-full"
                  />
                </div>
              </span>

              <span className="mb-2 flex justify-between">
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
                  className="border-b-2 border-transparent text-blue-500 hover:border-gray-400"
                >
                  فراموشی رمز عبور
                </Link>
              </span>
            </form>
            <button
              className="mt-3 h-8 w-full cursor-pointer rounded-lg bg-blue-500 px-2 text-white hover:bg-blue-700 sm:w-[301px]"
              onClick={signInHandler}
            >
              ورود
            </button>
            <div className="mx-auto my-5 flex gap-4">
              <span className="w-16 border-b-2 border-gray-400"></span>
              <span>ادامه دادن با</span>
              <span className="w-16 border-b-2 border-gray-400"></span>
            </div>
            <div className="mx-auto mb-4 flex gap-4">
              <Link to="">
                <img
                  src={google}
                  alt="google"
                  draggable="false"
                  className="hover:opacity-60"
                />
              </Link>
              <Link to="">
                <img
                  src={facebook}
                  alt="facebook"
                  draggable="false"
                  className="hover:opacity-60"
                />
              </Link>
              <Link to="">
                <img
                  src={instagram}
                  alt="instagram"
                  draggable="false"
                  className="hover:opacity-60"
                />
              </Link>
            </div>
            <div>
              <span>
                هنوز اکانت ایجاد نکرده اید؟
                <Link
                  to="/signUp"
                  className="border-b-2 border-transparent text-blue-500 hover:border-gray-400"
                >
                  ثبت نام در سایت
                </Link>
              </span>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default SignInCom
