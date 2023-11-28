import Swal from "sweetalert2"

function Confirm() {
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
        window.location.assign("/Receipt")
      }
    })
  }
  return (
    <>
      <section className="mx-auto mb-10 mt-3 flex  w-fit select-none flex-col items-center justify-center rounded-lg bg-blue-100 px-10 sm:mt-0 sm:bg-none md:mb-10 md:mt-3 md:h-[672px] md:justify-center lg:mx-24 lg:h-full lg:py-10">
        <div className="flex flex-col items-start gap-y-4">
          <h1 className="text-3xl font-black sm:text-5xl">تاییدیه رزرو اتاق</h1>
          <span className="flex w-full flex-col gap-y-5">
            <span className="flex gap-x-2">
              <span className="text-gray-600">تاریخ ورود:</span>
              <span>1402/09/12</span>
            </span>
            <span className="flex gap-x-2">
              <span className="text-gray-600">تاریخ خروج:</span>
              <span>1402/09/15</span>
            </span>
            <span className="flex gap-x-2">
              <span className="text-gray-600">مدت اقامت :</span>
              <span>3 شب</span>
            </span>
          </span>
          <span className="flex gap-x-4">
            <span className="text-gray-600">تعداد نفرات:</span>
            <span>5 نفر</span>
          </span>
          <span className="flex gap-x-4">
            <span for="room">عنوان اتاق:</span>
            <span>اتاق 5 تخته سوئیت</span>
          </span>
          <span className="flex gap-x-4">
            <span for="room">نوع اتاق:</span>
            <span>سوئیت</span>
          </span>
          <span className="flex gap-x-4">
            <span for="room">تعداد اتاق:</span>
            <span>1</span>
          </span>
          <span className="flex gap-x-4">
            <span for="room">جمع کل:</span>
            <span>23,911,500 ریال</span>
          </span>
          <button
            className="mt-3 h-8 w-full cursor-pointer rounded-lg bg-blue-500 px-2 py-1 text-center text-white hover:bg-blue-700 sm:w-[301px]"
            onClick={confirmationHandler}
          >
            تایید و پرداخت
          </button>
        </div>
      </section>
    </>
  )
}

export default Confirm
