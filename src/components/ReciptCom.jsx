import React, { useRef } from "react"
import { useReactToPrint } from "react-to-print"

import logo from "../assets/icons/navbar/logo.svg"

const ComponentToPrint = React.forwardRef((props, ref) => {
  return (
    <>
      <div
        className="print-content mx-auto mb-10  mt-3 flex w-fit select-none flex-col items-center justify-center rounded-lg px-10 text-2xl sm:mt-0 sm:bg-none md:mb-10 md:mt-3 md:h-[672px] md:justify-center lg:mx-24 lg:h-full lg:py-10"
        ref={ref}
      >
        <img src={logo} alt="" />
        <h1 className="text-3xl font-black sm:text-6xl">رسید پرداخت</h1>
        <div className="mb-5 mt-2 flex flex-wrap gap-x-20">
          <div className="flex flex-col items-start gap-y-4">
            <span className="flex w-full flex-col gap-y-5">
              <span className="flex gap-x-2">
                <span className="text-gray-600">نام و نام خانوادگی:</span>
                <span className="text-3xl font-black">کیارش علیزاده</span>
              </span>
              <span className="flex gap-x-2">
                <span className="text-gray-600">کد ملی:</span>
                <span className="font-black">0026547885</span>
              </span>
              <span className="flex gap-x-2">
                <span className="text-gray-600">تلفن همراه:</span>
                <span className="font-black">09120000000</span>
              </span>
              <span className="flex gap-x-2">
                <span className="text-gray-600">ایمیل:</span>
                <span className="font-black">Kiarash_alizadeh@yahoo.com</span>
              </span>
              <span className="flex gap-x-2">
                <span className="text-gray-600">تاریخ پرداخت:</span>
                <span className="font-black">1402/09/05</span>
              </span>
              <span className="flex gap-x-2">
                <span className="text-gray-600">شماره پیگیری:</span>
                <span className="font-black">6548953</span>
              </span>
              <span className="flex gap-x-4">
                <span for="room">مبلغ پرداخت شده:</span>
                <span className="font-black">23,911,500 ریال</span>
              </span>
            </span>
          </div>
          <div className="flex flex-col items-start gap-y-4">
            <span className="flex w-full flex-col gap-y-5">
              <span className="flex gap-x-2">
                <span className="text-gray-600">تاریخ ورود:</span>
                <span className="font-black">1402/09/12</span>
              </span>
              <span className="flex gap-x-2">
                <span className="text-gray-600">تاریخ خروج:</span>
                <span className="font-black">1402/09/15</span>
              </span>
              <span className="flex gap-x-2">
                <span className="text-gray-600">مدت اقامت :</span>
                <span className="font-black">3 شب</span>
              </span>
              <span className="flex gap-x-4">
                <span className="text-gray-600">تعداد نفرات:</span>
                <span className="font-black">5 نفر</span>
              </span>
              <span className="flex gap-x-4">
                <span for="room">عنوان اتاق:</span>
                <span className="font-black">اتاق 5 تخته سوئیت</span>
              </span>
              <span className="flex gap-x-4">
                <span for="room">نوع اتاق:</span>
                <span className="font-black">سوئیت</span>
              </span>
              <span className="flex gap-x-4">
                <span for="room">تعداد اتاق:</span>
                <span className="font-black">1</span>
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
      <div className="mx-auto mb-10 mt-3  flex w-fit select-none flex-col items-center justify-center rounded-lg px-10 text-2xl sm:mt-0 sm:bg-none md:mb-10 md:mt-3 md:h-[672px] md:justify-center lg:mx-24 lg:h-full lg:py-10">
        <ComponentToPrint ref={printRef} />
        <button
          className="mt-3 w-full cursor-pointer rounded-lg bg-blue-500 px-2 py-2 text-center text-white hover:bg-blue-700 sm:w-[301px]"
          onClick={printHandler}
        >
          چاپ رسید
        </button>
      </div>
    </>
  )
}

export default ReciptCom
