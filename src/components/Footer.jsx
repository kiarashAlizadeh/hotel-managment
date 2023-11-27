import { Link } from "react-router-dom"

import phone from "../assets/icons/footer/phone.svg"
import mail from "../assets/icons/footer/mail.svg"
import location from "../assets/icons/footer/location.svg"
import facebook from "../assets/icons/footer/facebook.svg"
import linkdin from "../assets/icons/footer/linkdin.svg"
import twitter from "../assets/icons/footer/twitter.svg"
import pinterest from "../assets/icons/footer/pinterest.svg"

function Footer() {
  return (
    <>
      <footer className="flex w-full select-none flex-col bg-[#14274A] py-5 text-white">
        <div className="flex flex-col items-start px-5 ">
          <div className="flex w-full flex-wrap items-center gap-5 sm:justify-between">
            <span className="hidden max-w-[258px] lg:inline">
              Fluency is nothing more than mastering the 100 most important
              real-life conversations
            </span>
            <div className="flex gap-10">
              <ul className="flex flex-col items-start gap-1 sm:items-center">
                <li className="mb-2 font-black">Speak up courses</li>
                <li>
                  <Link to="/Courses">Learn English</Link>
                </li>
                <li>
                  <Link to="/Courses">Learn Turkish</Link>
                </li>
                <li>
                  <Link to="/Courses">Learn Spanish</Link>
                </li>
                <li>
                  <Link to="/Courses">Learn German</Link>
                </li>
              </ul>
              <ul className="flex flex-col items-start gap-1 sm:items-center">
                <li className="mb-2 font-black">Pages</li>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/Courses">Courses</Link>
                </li>
                <li>
                  <Link to="/ContactUs">Contact us</Link>
                </li>
                <li>
                  <Link to="/AboutUs">About us</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <span className="mb-2 font-black">Contact information</span>
              <Link to="tel:+989120000000" className="flex gap-x-1">
                <img src={phone} alt="phone" draggable="false" />
                (+98)9120000000
              </Link>
              <Link to="mailto:Info@speakup.com" className="flex gap-x-1">
                <img src={mail} alt="mail" draggable="false" />
                Info@speakup.com
              </Link>

              <Link
                to="https://www.google.com/maps/place/استان+تهران،+تهران،+میدان+آزادی،+برج+آزادی،+ایران%E2%80%AD/@35.6997331,51.3380361,17z/data=!4m6!3m5!1s0x3f8dfe05732c2e91:0xfcbec017befd15f4!8m2!3d35.6997331!4d51.3380361!16zL20vMDR4ZHMw"
                className="flex gap-x-1"
              >
                <img src={location} alt="location" draggable="false" />
                Azadi Tower, Tehran
              </Link>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between gap-x-3">
            <Link to="https://www.facebook.com/">
              <img src={facebook} alt="facebook" draggable="false" />
            </Link>
            <Link to="https://www.linkedin.com/">
              <img src={linkdin} alt="linkdin" draggable="false" />
            </Link>
            <Link to="https://twitter.com/">
              <img src={twitter} alt="twitter" draggable="false" />
            </Link>
            <Link to="https://www.pinterest.com/">
              <img src={pinterest} alt="pinterest" draggable="false" />
            </Link>
          </div>
        </div>
        <div className="max-w-full border-b-2 border-white text-white">
          <br />
        </div>
        <div className="mt-5 flex flex-wrap gap-y-3 px-5 lg:justify-between">
          <span>©2023 SpeakUp Iran, Inc. All Rights Reserved.</span>
          <div className="flex gap-x-5">
            <Link to="">Terms & Conditions</Link>
            <Link to="">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
