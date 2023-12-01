import { Link } from "react-router-dom"

import bgFooter from "../assets/images/bg-footer.svg"
import phone from "../assets/icons/footer/phone.svg"
import mail from "../assets/icons/footer/mail.svg"
import facebook from "../assets/icons/footer/facebook.svg"
import linkdin from "../assets/icons/footer/linkdin.svg"
import twitter from "../assets/icons/footer/twitter.svg"
import pinterest from "../assets/icons/footer/pinterest.svg"
import logo from "../assets/icons/footer/logo.svg"

function Footer() {
  return (
    <>
      <footer
        style={{
          backgroundImage: `url(${bgFooter})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
          backgroundSize: "2500px",
        }}
        className="flex w-full select-none flex-col bg-[#232E26] pb-3 pt-5 text-white"
      >
        <div className="flex flex-col items-start px-5 ">
          <div className="flex w-full flex-col items-center gap-5 sm:flex-row sm:flex-wrap sm:justify-between">
            <span className="flex flex-col items-center md:items-start">
              <span className="flex max-w-[350px] flex-col gap-y-4 text-justify leading-7">
                <img src={logo} alt="logo" className="w-48" draggable="false" />
                هتل علیزاده، با تاریخ درخشان و خدمات بی‌نظیر، در قلب تهران واقع
                شده است. زیرساخت‌های مدرن، امکانات رفاهی و خدمات با کیفیت، تضمین
                کننده‌ی یک اقامت لذت‌بخش است. از طراحی شیک تا رستوران‌های متنوع،
                هر جزئیاتی در اینجا برای راحتی شما در نظر گرفته شده است.
              </span>
              <span className="mt-3 flex items-center gap-x-3">
                <Link to="https://www.facebook.com/">
                  <img
                    src={facebook}
                    alt="facebook"
                    draggable="false"
                    className="hover:opacity-60"
                  />
                </Link>
                <Link to="https://www.linkedin.com/">
                  <img
                    src={linkdin}
                    alt="linkdin"
                    draggable="false"
                    className="hover:opacity-60"
                  />
                </Link>
                <Link to="https://twitter.com/">
                  <img
                    src={twitter}
                    alt="twitter"
                    draggable="false"
                    className="hover:opacity-60"
                  />
                </Link>
                <Link to="https://www.pinterest.com/">
                  <img
                    src={pinterest}
                    alt="pinterest"
                    draggable="false"
                    className="hover:opacity-60"
                  />
                </Link>
              </span>
            </span>
            <div className="flex flex-wrap items-center justify-center gap-10">
              <ul className="flex flex-col items-center justify-center gap-1 pr-0 text-center">
                <li className="mb-2 text-2xl font-black">امکانات و خدمات</li>
                <li>
                  <Link to="/Courses">رستوران</Link>
                </li>
                <li>
                  <Link to="/Courses">امکانات تفریحی</Link>
                </li>
                <li>
                  <Link to="/Courses">مراسمات و مهمانی</Link>
                </li>
                <li>
                  <Link to="/Courses">ارتباط با مدیریت</Link>
                </li>
              </ul>
              <ul className="flex flex-col  items-center gap-1 pr-0">
                <li className="mb-2 text-2xl font-black">صفحات</li>
                <li>
                  <Link to="/">صفحه اصلی</Link>
                </li>
                <li>
                  <Link to="/Courses">رزرو اتاق</Link>
                </li>
                <li>
                  <Link to="/ContactUs">تماس با ما</Link>
                </li>
                <li>
                  <Link to="/AboutUs">درباره ما</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-center text-xl font-black">
                راه های ارتباطی
              </span>
              <span className="flex flex-col gap-3">
                <Link
                  to="tel:+989120803123"
                  className="flex flex-row-reverse gap-x-1 hover:opacity-60"
                >
                  <img src={phone} alt="phone" draggable="false" />
                  9120803123(98+)
                </Link>
                <Link
                  to="mailto:Info@parsianAzadi.com"
                  className="flex flex-row-reverse gap-x-1 hover:opacity-60"
                >
                  <img src={mail} alt="mail" draggable="false" />
                  Info@AlizadehHotel.com
                </Link>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.076402825294!2d51.33546117630501!3d35.69973742895626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8dfe05732c2e91%3A0xfcbec017befd15f4!2sAzadi%20Tower!5e0!3m2!1sen!2snl!4v1701183243562!5m2!1sen!2snl"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  title="azadi tower"
                  className="h-40 w-60 rounded-2xl border-none"
                ></iframe>
              </span>
            </div>
          </div>
        </div>
        <div className="max-w-full border-b-2 border-white text-white">
          <br />
        </div>
        <div
          dir="ltr"
          className="mt-3 flex flex-wrap gap-y-3 px-5 lg:justify-between"
        >
          <span>©2023 Alizadeh Hotel, Inc. All Rights Reserved.</span>
          <div className="flex gap-x-5">
            <Link to="" className="hover:opacity-60">
              قوانین
            </Link>
            <Link to="" className="hover:opacity-60">
              حریم خصوصی
            </Link>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
