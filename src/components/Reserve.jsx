import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"

function Reserve() {
  // states
  const [ArrivalDate, arrivalDateVal] = useState("")
  const [DepartureDate, departureDateVal] = useState("")
  const [NumberOfPeople, numberOfPeopleVal] = useState("")
  const [RoomType, roomTypeVal] = useState("")

  // refs
  const arrivalDateRef = useRef()
  const departureDateRef = useRef()
  const numberOfPeopleRef = useRef()
  const roomTypeRef = useRef()

  let storedData = localStorage.getItem("user-Data")
  var isLogin = localStorage.getItem("is-Login")
  var userLogin = localStorage.getItem("user-Login")

  const valueHandler = () => {
    arrivalDateVal(arrivalDateRef.current.value)
    departureDateVal(departureDateRef.current.value)
    numberOfPeopleVal(numberOfPeopleRef.current.value)
    roomTypeVal(roomTypeRef.current.value)
  }

  const reservationHandler = () => {
    valueHandler()
    if (
      ArrivalDate === "" ||
      DepartureDate === "" ||
      NumberOfPeople === "" ||
      RoomType === ""
    ) {
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
        title: "لطفا اطلاعات فرم را کامل پر کنید!",
      })
    } else {
      const calculateNights = () => {
        const arrivalDate = new Date(ArrivalDate)
        const departureDate = new Date(DepartureDate)

        const difference = departureDate - arrivalDate

        const days = difference / (1000 * 60 * 60 * 24)

        return Math.floor(days)
      }
      const Nights = calculateNights()

      function calculateRooms(people) {
        if (people < 1 || !Number.isInteger(people)) {
          return "Invalid input. Please enter a positive integer."
        }

        if (people === 1) {
          return 1
        }

        return Math.ceil(people / 2)
      }
      const NumberOfRooms = calculateRooms(Number(NumberOfPeople))

      const priceForOneNight = 5000000
      const totalPrice = Nights * priceForOneNight * NumberOfPeople

      function formatNumber(number) {
        let numberString = number.toString()

        let formattedParts = []

        for (let i = numberString.length - 1; i >= 0; i--) {
          formattedParts.unshift(numberString[i])

          if ((numberString.length - i) % 3 === 0 && i !== 0) {
            formattedParts.unshift(",")
          }
        }
        return formattedParts.join("")
      }
      const Price = formatNumber(totalPrice)

      let userData = JSON.parse(storedData)
      let userExistsIndex = userData.findIndex(
        (user) => user.name === userLogin
      )
      const newReserve = {
        arrivalDate: ArrivalDate,
        departureDate: DepartureDate,
        nights: Nights,
        numberOfPeople: NumberOfPeople,
        numberOfRooms: NumberOfRooms,
        roomType: RoomType,
        price: Price,
      }
      userData[userExistsIndex].reserves.push(newReserve)
      localStorage.setItem("user-Data", JSON.stringify(userData))
      window.location.assign("/Confirmation")
    }
  }

  if (isLogin) {
    return (
      <>
        <section className="mx-auto mb-10 mt-3 flex  w-fit select-none flex-col items-center justify-center rounded-lg px-10 sm:mt-0 sm:bg-none md:mb-10 md:mt-3 md:h-[672px] md:justify-center lg:mx-24 lg:h-full lg:py-10">
          <form className="flex flex-col items-start gap-y-4">
            <h1 className="text-3xl font-black sm:text-5xl">رزرو اتاق</h1>
            <span className="flex w-full flex-col gap-y-5">
              <span className="flex gap-x-2">
                <label className="text-gray-600">تاریخ ورود:</label>
                <input
                  type="date"
                  className="input rounded-lg px-2 py-1 shadow-inner shadow-black/30"
                  ref={arrivalDateRef}
                />
              </span>
              <span className="flex gap-x-2">
                <label className="text-gray-600">تاریخ خروج:</label>
                <input
                  type="date"
                  className="input rounded-lg px-2 py-1 shadow-inner shadow-black/30"
                  ref={departureDateRef}
                />
              </span>
            </span>
            <span className="flex gap-x-4">
              <label className="text-gray-600">تعداد نفرات:</label>
              <input
                type="number"
                min="1"
                max="10"
                defaultValue={1}
                className=" w-12 rounded-lg py-1 text-center shadow-inner shadow-black/30"
                ref={numberOfPeopleRef}
              />
            </span>
            <span className="flex gap-x-4">
              <label for="room">نوع اتاق:</label>
              <select
                className="rounded-lg border-none py-1 text-center shadow-inner shadow-black/30"
                ref={roomTypeRef}
              >
                <option value="اتاق استاندارد">اتاق استاندارد</option>
                <option value="اتاق دوتخته">اتاق دوتخته</option>
                <option value="سوئیت">سوئیت</option>
                <option value="لوکس">لوکس</option>
                <option value="مهمانی">مهمانی</option>
              </select>
            </span>
          </form>
          <button
            onClick={reservationHandler}
            className="mt-3 h-8 w-full cursor-pointer rounded-lg bg-blue-500 px-2 py-1 text-center text-white hover:bg-blue-700 sm:w-[301px]"
          >
            مرحله بعد
          </button>
        </section>
      </>
    )
  } else {
    return (
      <>
        <div className="flex h-[420px] flex-col items-center justify-center gap-y-5 px-2">
          <span className="text-center font-bold lg:text-3xl">
            لطفا برای رزرو اتاق در هتل وارد سایت شوید !
          </span>

          <Link
            to="/SignIn"
            className="w-full cursor-pointer rounded-lg bg-blue-500 px-2 py-3 text-center font-bold text-white hover:bg-blue-700 sm:w-[301px] lg:text-2xl"
          >
            ورود به سایت
          </Link>
        </div>
      </>
    )
  }
}

export default Reserve
