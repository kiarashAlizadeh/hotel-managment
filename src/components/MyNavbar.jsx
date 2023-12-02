import { NavLink, Link } from "react-router-dom"
import Swal from "sweetalert2"

// bootstrap
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import Offcanvas from "react-bootstrap/Offcanvas"

// pics
import logo from "../assets/icons/navbar/logo.svg"
import person from "../assets/icons/navbar/person.png"
import phone from "../assets/icons/navbar/phone.svg"
import exit from "../assets/icons/navbar/exit.png"

function MyNavbar() {
  var isLogin = localStorage.getItem("is-Login")
  var whoisLogin = localStorage.getItem("user-Login")
  const exitHandler = () => {
    localStorage.setItem("is-Login", "")
    localStorage.setItem("user-Login", "")
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
      icon: "info",
      title: "از سایت خارج شدید!",
    })
    setTimeout(() => {
      window.location.assign("/SignIn")
    }, 2000)
  }
  const expand = "md"
  return (
    <>
      <Navbar
        key={expand}
        expand={expand}
        className="mx-3 mb-3 mt-3 rounded-full bg-[#c4d8c9] text-[#232E26]"
      >
        <Container className="px-60">
          <Navbar.Brand className="flex items-center gap-x-2">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <img src={logo} alt="" className="w-40" />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-start flex-grow-1 items-center pe-3">
                <NavLink to="/" className="nav-link">
                  صفحه اصلی
                </NavLink>
                <NavLink to="/Reservation" className="nav-link">
                  رزرو اتاق
                </NavLink>
                <NavDropdown
                  title="امکانات و خدمات"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <NavDropdown.Item href="/a">رستوران</NavDropdown.Item>
                  <NavDropdown.Item href="/a">امکانات تفریحی</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/a">مراسمات</NavDropdown.Item>
                </NavDropdown>
                <NavLink to="/History" className="nav-link">
                  تاریخچه رزرو ها
                </NavLink>
                <NavLink to="/ContactUs" className="nav-link">
                  تماس با ما
                </NavLink>
                <NavLink to="/AboutUs" className="nav-link">
                  درباره ما
                </NavLink>
              </Nav>
              <Nav className="flex items-center gap-x-5 gap-y-3 md:gap-y-0">
                {(function () {
                  if (isLogin) {
                    return (
                      <span>
                        سلام <span className="font-bold">{whoisLogin}</span> خوش
                        آمدید!
                      </span>
                    )
                  } else {
                    return (
                      <Link
                        to="tel:0211234"
                        className="flex items-center gap-x-1 rounded-full border-2 border-[#232E26] px-4 py-2 text-xl font-bold hover:bg-[#8fbe9b] hover:opacity-70"
                      >
                        <img src={phone} alt="phone" />
                        021-1234
                      </Link>
                    )
                  }
                })()}
                {(function () {
                  if (isLogin) {
                    return (
                      <button
                        className="flex items-center gap-x-2 rounded-full border-2 border-red-600 px-3 py-2 font-bold text-red-600 hover:bg-red-600 hover:text-white hover:opacity-80"
                        onClick={exitHandler}
                      >
                        خروج <img src={exit} alt="" className="w-8" />
                      </button>
                    )
                  } else {
                    return (
                      <Link to="/SignIn" id="SignIn">
                        <img src={person} alt="person" />
                        ورود/ثبت نام
                      </Link>
                    )
                  }
                })()}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  )
}

export default MyNavbar
