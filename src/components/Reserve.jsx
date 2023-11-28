import { Link } from "react-router-dom"

function Reserve() {
  return (
    <>
      <section className="mx-auto mb-10 mt-3 flex  w-fit select-none flex-col items-center justify-center rounded-lg bg-blue-100 px-10 sm:mt-0 sm:bg-none md:mb-10 md:mt-3 md:h-[672px] md:justify-center lg:mx-24 lg:h-full lg:py-10">
        <form action="" className="flex flex-col items-start gap-y-4">
          <h1 className="text-3xl font-black sm:text-5xl">رزرو اتاق</h1>
          <span className="flex w-full flex-col gap-y-5">
            <span className="flex gap-x-2">
              <label className="text-gray-600">تاریخ ورود:</label>
              <input
                type="date"
                className="input rounded-lg px-2 py-1 shadow-inner shadow-black/30"
              />
            </span>
            <span className="flex gap-x-2">
              <label className="text-gray-600">تاریخ خروج:</label>
              <input
                type="date"
                className="input rounded-lg px-2 py-1 shadow-inner shadow-black/30"
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
            />
          </span>
          <span className="flex gap-x-4">
            <label for="room">نوع اتاق:</label>
            <select className="rounded-lg border-none py-1 text-center shadow-inner shadow-black/30">
              <option value="اتاق استاندارد">اتاق استاندارد</option>
              <option value="اتاق دوتخته">اتاق دوتخته</option>
              <option value="سوئیت">سوئیت</option>
              <option value="لوکس">لوکس</option>
              <option value="مهمانی">مهمانی</option>
            </select>
          </span>
          <Link
            to="/Confirmation"
            className="mt-3 h-8 w-full cursor-pointer rounded-lg bg-blue-500 px-2 py-1 text-center text-white hover:bg-blue-700 sm:w-[301px]"
          >
            مرحله بعد
          </Link>
        </form>
      </section>
    </>
  )
}

export default Reserve
