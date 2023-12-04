import { Link } from "react-router-dom"

import logo from "../assets/icons/home/logo.svg"

function Header() {
  return (
    <>
      <div className=" mb-16 flex h-full flex-col items-center justify-around">
        <div className=" flex flex-col items-center gap-y-3">
          <div className="flex w-full items-center gap-x-1 text-6xl font-black text-white">
            <img src={logo} alt="" className="w-14" />
            هتل علیزاده
          </div>
          <span className="font-bold text-white lg:text-2xl lg:font-light">
            انتخاب نخست بلندپایگان
          </span>
        </div>

        <Link
          to="/Reservation"
          className=" relative w-[250px] rounded-3xl border-none bg-white py-6 text-center text-d-blue shadow-2xl shadow-black/40 sm:w-[600px]"
        >
          جهت رزرو اتاق کلیک کنید
        </Link>
      </div>
    </>
  )
}

export default Header
