import Swal from "sweetalert2"

import confirm from "../assets/images/confirm.png"

function Confirm() {
  let storedData = JSON.parse(localStorage.getItem("user-Data"))
  var userLogin = localStorage.getItem("user-Login")

  let currentUser = storedData.find((user) => user.name === userLogin)

  let lastReserve = currentUser.reserves[currentUser.reserves.length - 1]

  const arrivalDate = new Date(lastReserve.arrivalDate).toLocaleDateString(
    "fa-IR"
  )
  const departureDate = new Date(lastReserve.departureDate).toLocaleDateString(
    "fa-IR"
  )
  const nights = lastReserve.nights
  const numberOfPeople = lastReserve.numberOfPeople
  const numberOfRooms = lastReserve.numberOfRooms
  const roomType = lastReserve.roomType
  const price = lastReserve.price

  const confirmationHandler = () => {
    Swal.fire({
      title: "آیا اطلاعات فوق مورد تایید می باشد؟",
      text: "پس از تایید به صفحه پرداخت منتقل می شوید!",
      icon: "question",
      confirmButtonText: "تایید",
      showCancelButton: "true",
      cancelButtonText: "لغو",
    }).then(function (isConfirm) {
      if (isConfirm.isConfirmed) {
        window.location.assign("/Pay")
      }
    })
  }
  return (
    <>
      <div className="mx-2 mb-5 rounded-3xl bg-[#D9EFDE] py-3">
        <section className="mx-auto mb-10 mt-3 flex  flex w-fit select-none flex-col flex-col items-center items-center justify-center rounded-lg px-10 sm:mt-0 sm:bg-none md:mb-10 md:mt-3 md:h-[672px] md:justify-center lg:mx-24 lg:h-full lg:py-3">
          <h1 className="mb-4 flex flex-col-reverse items-center text-3xl font-black sm:flex-row-reverse sm:text-5xl">
            تاییدیه رزرو اتاق{" "}
            <img src={confirm} alt="confirm" className="max-w-[100px]" />
          </h1>
          <div className="flex w-fit flex-col items-start gap-y-4 font-semibold lg:text-xl">
            <span className="flex w-full flex-col gap-y-5">
              <span className="flex gap-x-2">
                <span className="text-gray-600">تاریخ ورود:</span>
                <span>{arrivalDate}</span>
              </span>
              <span className="flex gap-x-2">
                <span className="text-gray-600">تاریخ خروج:</span>
                <span>{departureDate}</span>
              </span>
              <span className="flex gap-x-2">
                <span className="text-gray-600">مدت اقامت :</span>
                <span>{nights} شب</span>
              </span>
            </span>
            <span className="flex gap-x-4">
              <span className="text-gray-600">تعداد نفرات:</span>
              <span>{numberOfPeople} نفر</span>
            </span>
            <span className="flex gap-x-4">
              <span for="room">نوع اتاق:</span>
              <span>{roomType}</span>
            </span>
            <span className="flex gap-x-4">
              <span for="room">تعداد اتاق:</span>
              <span>{numberOfRooms}</span>
            </span>
            <span className="flex gap-x-4">
              <span for="room">جمع کل:</span>
              <span>{price} ریال</span>
            </span>
          </div>
          <button
            className="mt-4 w-full cursor-pointer rounded-3xl bg-[#4c7055] px-2 py-3 text-center text-white hover:opacity-75 sm:w-[301px] lg:text-2xl"
            onClick={confirmationHandler}
          >
            تایید و پرداخت
          </button>
        </section>
      </div>
    </>
  )
}

export default Confirm
