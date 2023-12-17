import React, { useRef } from "react"
import { useReactToPrint } from "react-to-print"
import { Link } from "react-router-dom"

import history from "../assets/images/history.png"

var isLogin = localStorage.getItem("is-Login")
let storedData = localStorage.getItem("user-Data")
var userLogin = localStorage.getItem("user-Login")
let userData = JSON.parse(storedData)
let userExistsIndex
if (userData) {
  userExistsIndex = userData.findIndex((user) => user.name === userLogin)
}
const ComponentToPrint = React.forwardRef((props, ref) => {
  if (isLogin) {
    if (userData[userExistsIndex].reserves.length > 0) {
      const name = userData[userExistsIndex].name
      const family = userData[userExistsIndex].family
      const fullName = name + " " + family
      let arrivalDate = ""
      let departureDate = ""
      let payDay = ""
      let genderName = ""
      if (userData[userExistsIndex].gender === "آقا") {
        genderName = " آقای" + " " + fullName
      } else {
        genderName = " خانم" + " " + fullName
      }

      const nationalNumber = userData[userExistsIndex].nationalNumber
      const mobileNumber = userData[userExistsIndex].mobileNumber
      const email = userData[userExistsIndex].email

      return (
        <>
          <div
            className="print-content mx-auto flex w-fit flex-col items-center justify-center rounded-lg px-2 text-base sm:mt-0 sm:bg-none md:justify-center lg:px-10 lg:text-2xl"
            ref={ref}
          >
            <h1 className="mt-2 text-3xl font-black sm:text-6xl">
              تاریخچه رزرو ها
            </h1>
            <div className="mb-5 mt-2 flex flex-col items-center gap-y-10">
              <span className="flex flex-wrap gap-x-5 gap-y-2">
                <span className="flex gap-x-2">
                  <span className="text-gray-600">نام و نام خانوادگی:</span>
                  <span className="text-xl font-black lg:text-3xl">
                    {genderName}
                  </span>
                </span>
                <span className="flex gap-x-2">
                  <span className="text-gray-600">کد ملی:</span>
                  <span className="font-black">{nationalNumber}</span>
                </span>
                <span className="flex gap-x-2 ">
                  <span className="text-gray-600">تلفن همراه:</span>
                  <span className="font-black">{mobileNumber}</span>
                </span>
                <span className="flex w-full gap-x-2">
                  <span className="text-gray-600">ایمیل:</span>
                  <span className="font-bold lg:font-black">{email} </span>
                </span>
              </span>
              <di className="flex w-full flex-wrap items-center justify-center gap-20">
                {userData[userExistsIndex].reserves.map((reserve, index) => {
                  const reserveNumber = index + 1
                  const reserveTitle = `رزرو ${reserveNumber}`
                  {
                    if (reserve.isPayed) {
                      return (
                        <span
                          key={index}
                          className="flex flex-col justify-between rounded-3xl border-2 border-[#232e26] px-3 py-4 sm:gap-y-5 lg:h-[640px] lg:w-[358px]"
                        >
                          <h1 className="mx-auto mb-3 w-fit border-b-4 border-black pb-2">
                            {reserveTitle}
                          </h1>
                          <span className="flex gap-x-2 gap-y-1">
                            <span className="text-gray-600">تاریخ ورود:</span>
                            <span className="font-black">
                              {
                                (arrivalDate = new Date(
                                  reserve.arrivalDate
                                ).toLocaleDateString("fa-IR"))
                              }
                            </span>
                          </span>
                          <span className="flex gap-x-2 gap-y-1">
                            <span className="text-gray-600">تاریخ خروج:</span>
                            <span className="font-black">
                              {
                                (departureDate = new Date(
                                  reserve.departureDate
                                ).toLocaleDateString("fa-IR"))
                              }
                            </span>
                          </span>
                          <span className="flex  gap-x-2 gap-y-1">
                            <span className="text-gray-600">مدت اقامت :</span>
                            <span className="font-black">
                              {reserve.nights} شب
                            </span>
                          </span>
                          <span className="flex gap-x-4 gap-y-1">
                            <span className="text-gray-600">تعداد نفرات:</span>
                            <span className="font-black">
                              {reserve.numberOfPeople} نفر
                            </span>
                          </span>
                          <span className="flex  gap-x-4 gap-y-1">
                            <span for="room">نوع اتاق:</span>
                            <span className="font-black">
                              {reserve.roomType}
                            </span>
                          </span>
                          <span className="flex  gap-x-4 gap-y-1">
                            <span for="room">تعداد اتاق:</span>
                            <span className="font-black">
                              {reserve.numberOfRooms}
                            </span>
                          </span>
                          <span className="flexgap-x-2 gap-y-1">
                            <span className="text-gray-600">تاریخ پرداخت:</span>
                            <span className="max-w-xs font-black">
                              {
                                (payDay = new Date(
                                  reserve.payDay
                                ).toLocaleDateString("fa-IR"))
                              }
                            </span>
                          </span>
                          <span className="flex gap-x-2 gap-y-1 ">
                            <span className="text-gray-600">شماره پیگیری:</span>
                            <span className="font-black">
                              {reserve.payNumber}
                            </span>
                          </span>
                          <span className="flex  flex-wrap gap-x-4 gap-y-1">
                            <span>مبلغ پرداخت شده:</span>
                            <span className="font-black">
                              {reserve.price} ریال
                            </span>
                          </span>
                        </span>
                      )
                    }
                  }
                })}
              </di>
            </div>
          </div>
        </>
      )
    } else {
      return (
        <>
          <div className="flex h-[420px] flex-col items-center justify-center gap-y-10 px-2">
            <span className="text-center font-bold lg:text-3xl">
              شما هیچ رزروی در گذشته انجام نداده اید!
            </span>

            <Link
              to="/Reservation"
              className="w-full cursor-pointer rounded-3xl bg-[#4c7055] px-2 py-3 text-center text-white hover:opacity-75 sm:w-[301px] lg:text-2xl"
            >
              رزرو اتاق
            </Link>
          </div>
        </>
      )
    }
  } else {
    return (
      <>
        <div className="flex h-[420px] flex-col items-center justify-center gap-y-10 px-2">
          <span className="text-center font-bold lg:text-3xl">
            لطفا برای مشاهده تاریخچه رزرو اتاق ها وارد سایت شوید !
          </span>

          <Link
            to="/SignIn"
            className="w-full cursor-pointer rounded-3xl bg-[#4c7055] px-2 py-3 text-center text-white hover:opacity-75 sm:w-[301px] lg:text-2xl"
          >
            ورود به سایت
          </Link>
        </div>
      </>
    )
  }
})

function HistoryCom() {
  const printHistoryRef = useRef()
  const printHandler = useReactToPrint({
    content: () => printHistoryRef.current,
  })
  return (
    <>
      <div className="mx-2 mb-5 rounded-3xl bg-[#D9EFDE] py-3">
        <div className="mb-10 mt-7 flex flex-col items-center px-3">
          {isLogin && userData[userExistsIndex].reserves.length > 0 ? (
            <img src={history} alt="" className="w-28 lg:max-w-5xl" />
          ) : null}
          <ComponentToPrint ref={printHistoryRef} />
          {isLogin && userData[userExistsIndex].reserves.length > 0 ? (
            <button
              className="w-full cursor-pointer rounded-3xl bg-[#4c7055] px-2 py-3 text-center text-white hover:opacity-75 sm:w-[301px] lg:text-2xl"
              onClick={printHandler}
            >
              چاپ تاریخچه رزرو ها
            </button>
          ) : null}
        </div>
      </div>
    </>
  )
}

export default HistoryCom
