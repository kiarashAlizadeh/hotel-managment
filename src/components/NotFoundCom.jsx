import notFound from "../assets/images/notFound.png"
import { Link } from "react-router-dom"
function NotFoundCom() {
  return (
    <>
      <div className="mx-3 my-10 flex flex-col items-center gap-y-4 rounded-3xl bg-[#D9EFDE] px-2 pb-4 pt-2">
        <img
          src={notFound}
          alt=""
          className=" w-fit rounded-3xl lg:max-w-4xl"
        />
        <span className="text-xl font-bold">صفحه مورد نظر شما یافت نشد!</span>
        <Link
          className="w-full cursor-pointer rounded-3xl bg-[#4c7055] py-3 text-center text-white hover:opacity-75 sm:w-[301px] lg:text-2xl"
          to="/"
        >
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </>
  )
}

export default NotFoundCom
