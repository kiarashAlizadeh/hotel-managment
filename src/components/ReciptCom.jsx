import React, { useRef } from "react"
import { useReactToPrint } from "react-to-print"

import logo from "../assets/icons/navbar/logo.svg"

const ComponentToPrint = React.forwardRef((props, ref) => {
  let storedData = localStorage.getItem("user-Data")
  var userLogin = localStorage.getItem("user-Login")
  let userData = JSON.parse(storedData)
  let userExistsIndex = userData.findIndex((user) => user.name === userLogin)

  const name = userData[userExistsIndex].name
  const family = userData[userExistsIndex].family
  const fullName = name + " " + family

  let genderName = ""
  if (userData[userExistsIndex].gender === "آقا") {
    genderName = " آقای" + " " + fullName
  } else {
    genderName = " خانم" + " " + fullName
  }
  const nationalNumber = userData[userExistsIndex].nationalNumber
  const mobileNumber = userData[userExistsIndex].mobileNumber
  const email = userData[userExistsIndex].email

  let lastReserve =
    userData[userExistsIndex].reserves[
      userData[userExistsIndex].reserves.length - 1
    ]

  const arrivalDate = new Date(lastReserve.arrivalDate).toLocaleDateString(
    "fa-IR"
  )
  const departureDate = new Date(lastReserve.departureDate).toLocaleDateString(
    "fa-IR"
  )
  const payDay = new Date(lastReserve.payDay).toLocaleDateString("fa-IR")
  const nights = lastReserve.nights
  const numberOfPeople = lastReserve.numberOfPeople
  const numberOfRooms = lastReserve.numberOfRooms
  const roomType = lastReserve.roomType
  const payNumber = lastReserve.payNumber
  const price = lastReserve.price

  return (
    <>
      <div
        className="print-content mx-auto flex w-fit select-none flex-col items-center justify-center rounded-lg  px-2 text-base sm:mt-0 sm:bg-none md:mt-3 md:h-[672px] md:justify-center lg:h-full lg:text-2xl"
        ref={ref}
      >
        <img src={logo} alt="" className="w-52" />
        <h1 className="mt-2 text-3xl font-black sm:text-6xl">رسید پرداخت</h1>
        <div className="mb-5 mt-3 flex flex-wrap gap-x-20">
          <div className="flex flex-col items-start gap-y-4">
            <span className="mb-3 flex w-full flex-col gap-y-5">
              <span className="flex flex-col gap-x-2 gap-y-1 md:flex-row">
                <span className="text-gray-600">نام و نام خانوادگی:</span>
                <span className="text-xl font-black lg:text-3xl">
                  {genderName}
                </span>
              </span>
              <span className="flex flex-col gap-x-2 gap-y-1 md:flex-row">
                <span className="text-gray-600">کد ملی:</span>
                <span className="font-black">{nationalNumber}</span>
              </span>
              <span className="flex flex-col gap-x-2 gap-y-1 md:flex-row">
                <span className="text-gray-600">تلفن همراه:</span>
                <span className="font-black">{mobileNumber}</span>
              </span>
              <span className="flex flex-col gap-x-2 gap-y-1 md:flex-row">
                <span className="text-gray-600">ایمیل:</span>
                <span className="font-bold lg:font-black">{email} </span>
              </span>
              <span className="flex flex-col gap-x-2 gap-y-1 md:flex-row">
                <span className="text-gray-600">تاریخ پرداخت:</span>
                <span className="max-w-xs font-black">{payDay}</span>
              </span>
              <span className="flex flex-col gap-x-2 gap-y-1 md:flex-row">
                <span className="text-gray-600">شماره پیگیری:</span>
                <span className="font-black">{payNumber}</span>
              </span>
              <span className="flex flex-col gap-x-4 gap-y-1 md:flex-row">
                <span>مبلغ پرداخت شده:</span>
                <span className="font-black">{price} ریال</span>
              </span>
            </span>
          </div>
          <div className="flex flex-col items-start gap-y-4">
            <span className="flex w-full flex-col gap-y-5">
              <span className="flex flex-col gap-x-2 gap-y-1 md:flex-row">
                <span className="text-gray-600">تاریخ ورود:</span>
                <span className="font-black">{arrivalDate}</span>
              </span>
              <span className="flex flex-col gap-x-2 gap-y-1 md:flex-row">
                <span className="text-gray-600">تاریخ خروج:</span>
                <span className="font-black">{departureDate}</span>
              </span>
              <span className="flex flex-col gap-x-2 gap-y-1 md:flex-row">
                <span className="text-gray-600">مدت اقامت :</span>
                <span className="font-black">{nights} شب</span>
              </span>
              <span className="flex flex-col gap-x-4 gap-y-1 md:flex-row">
                <span className="text-gray-600">تعداد نفرات:</span>
                <span className="font-black">{numberOfPeople} نفر</span>
              </span>
              <span className="flex flex-col gap-x-4 gap-y-1 md:flex-row">
                <span for="room">نوع اتاق:</span>
                <span className="font-black">{roomType}</span>
              </span>
              <span className="flex flex-col gap-x-4 gap-y-1 md:flex-row">
                <span for="room">تعداد اتاق:</span>
                <span className="font-black">{numberOfRooms}</span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </>
  )
})

function ReciptCom() {
  const printRef = useRef()
  const printHandler = useReactToPrint({
    content: () => printRef.current,
  })
  return (
    <>
      <div className="mx-2 mb-5 rounded-3xl bg-[#D9EFDE] py-3">
        <div className="flex flex-col items-center px-3">
          <div className="my-5 border-2 border-[#232e26] px-10 pt-10 rounded-3xl">
            <ComponentToPrint ref={printRef} />
          </div>
          <button
            className="w-full cursor-pointer rounded-3xl bg-[#4c7055] px-2 py-3 text-center text-white hover:opacity-75 sm:w-[301px] lg:text-2xl"
            onClick={printHandler}
          >
            چاپ رسید
          </button>
        </div>
      </div>
    </>
  )
}

export default ReciptCom
