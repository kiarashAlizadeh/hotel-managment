import hero from "../assets/images/home/hero-img.png"
import Mask from "../assets/images/home/MaskGroup.png"

function Header() {
  return (
    <>
      {/* className="bg-d-blue relative mx-auto mb-16 flex w-[1200px] items-center rounded-3xl bg" */}
      <div className="relative mb-16 flex items-center bg-d-blue">
        {/* <img src={Mask} alt="" className="-z-10" /> */}
        <img src={hero} alt="hero" className="w-1/2" />
        <div className="z-30 flex w-1/2 flex-col gap-y-3 bg-red-300">
          <span className="text-white lg:text-4xl lg:font-bold">
            هتل پارسیان آزادی
          </span>
          <span className="text-white lg:text-4xl lg:font-light">
            انتخاب نخست بلندپایگان
          </span>
        </div>
        <button className="absolute -bottom-5 right-[25%] w-[100px] rounded-3xl border-none bg-white py-6 text-d-blue shadow-2xl shadow-black/40 lg:w-[600px]">
          جهت رزرو اتاق کلیک کنید!
        </button>
      </div>
    </>
  )
}

export default Header
