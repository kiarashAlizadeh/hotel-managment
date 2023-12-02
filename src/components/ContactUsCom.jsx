import { Link } from "react-router-dom"

import blue from "../assets/images/contactus/blue.svg"
import phone from "../assets/icons/contactus/phone.svg"
import location from "../assets/icons/contactus/location.svg"
import mail from "../assets/icons/contactus/mail.svg"

function ContactUsCom() {
  return (
    <>
      <div className="rounded-3xl bg-[#D9EFDE]">
        <section className="relative mb-8 hidden h-[350px] bg-[#3c4d41] pb-28 pt-20 md:flex md:flex-col md:items-center">
          <span className="mb-4 text-6xl font-bold text-white">
            {" "}
            با ما در ارتباط باشید{" "}
          </span>
          <span className="text-lg font-bold text-white">
            از طریق فرم ذیل میتوانید در هر ساعت از شبانه روز پیام خود را به دست
            ما برسانید
          </span>
          <img src={blue} alt="" className="absolute right-0 top-0" />
        </section>

        <main>
          {/* contact info */}
          <section className="mb-11 flex flex-row flex-wrap justify-center gap-x-4 gap-y-2 sm:gap-x-20 md:mb-16">
            <Link to="tel:+989120000000" className="contact text-[#232E26]">
              <img
                src={phone}
                alt="phone"
                className="sm:w-[72px]"
                draggable="false"
              />
              <span className="text-xs font-semibold sm:text-lg sm:font-bold">
                با ما تماس بگیرید
              </span>
              <bdo
                className="overflow-y-hidden text-[11px] font-normal sm:text-base sm:font-medium"
                dir="ltr"
              >
                (+98)9120803123
              </bdo>
            </Link>
            <Link
              to="https://www.google.com/maps/place/استان+تهران،+تهران،+میدان+آزادی،+برج+آزادی،+ایران%E2%80%AD/@35.6997331,51.3380361,17z/data=!4m6!3m5!1s0x3f8dfe05732c2e91:0xfcbec017befd15f4!8m2!3d35.6997331!4d51.3380361!16zL20vMDR4ZHMw"
              className="contact text-[#232E26]"
            >
              <img
                src={location}
                alt="location"
                className="sm:w-[72px]"
                draggable="false"
              />
              <span className="text-xs font-semibold sm:text-lg sm:font-bold">
                آدرس هتل
              </span>
              <span className="overflow-y-hidden text-[11px] font-normal sm:text-base sm:font-medium">
                Azadi Tower, Tehran
              </span>
            </Link>
            <Link
              to="mailto:Info@AlizadehHotel.com"
              className="contact text-[#232E26]"
            >
              <img
                src={mail}
                alt="email"
                className="sm:w-[72px]"
                draggable="false"
              />
              <span className="text-xs font-semibold sm:text-lg sm:font-bold">
                به ما ایمیل دهید
              </span>
              <span className="overflow-y-hidden text-[11px] font-normal sm:text-base sm:font-medium">
                Info@AlizadehHotel.com
              </span>
            </Link>
          </section>

          {/* massage */}
          <section className="shadow-c mx-auto mb-12 flex w-fit flex-col items-center rounded-xl bg-white p-6 hover:bg-blue-200 focus:bg-blue-200 sm:mb-20">
            <h1 className="mb-4 text-xl font-bold text-[#232E26] sm:text-4xl">
              How May We Help You!
            </h1>
            <form
              action=""
              className="flex flex-col items-center gap-y-2 sm:gap-6"
            >
              <div className="flex w-full flex-col flex-wrap justify-center gap-y-2 md:flex-row md:justify-between md:gap-x-2 md:gap-y-0">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="input hover:bg-slate-300 focus:bg-slate-200 md:w-[368px]"
                  placeholder="Name"
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="input hover:bg-slate-300 focus:bg-slate-200 md:w-[368px]"
                  placeholder="Email"
                />
              </div>
              <input
                type="text"
                id="subject"
                name="subject"
                className="input w-full hover:bg-slate-300 focus:bg-slate-200 lg:w-[784px]"
                placeholder="Subject"
              />
              <textarea
                name="comment"
                id="comment"
                cols="30"
                rows="10"
                placeholder="Write your problem ..."
                className="input h-20 w-full hover:bg-slate-300 focus:bg-slate-200 sm:h-[130px] sm:justify-start lg:w-[784px]"
              ></textarea>
              <input
                type="submit"
                value="ارسال پیام"
                className="w-full cursor-pointer rounded-3xl bg-[#4c7055] py-3 text-center text-white hover:opacity-75 sm:w-[301px] lg:text-2xl"
              />
            </form>
          </section>

          {/* google map */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.0764028253!2d51.34061102355269!3d35.6997374289561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8dfe05732c2e91%3A0xfcbec017befd15f4!2z2KjYsdisINii2LLYp9iv24w!5e0!3m2!1sfa!2snl!4v1695405133152!5m2!1sfa!2snl"
            className="h-60 w-full border-none"
            title="Google Map"
          ></iframe>
        </main>
      </div>
    </>
  )
}

export default ContactUsCom
