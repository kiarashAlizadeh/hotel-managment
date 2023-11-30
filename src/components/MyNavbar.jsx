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
      <Navbar key={expand} expand={expand} className="w-color mb-3 bg-white">
        <Container>
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
                <img src={logo} alt="" className="w-10" />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-start flex-grow-1 pe-3">
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
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <NavLink to="/a" className="nav-link">
                  تاریخچه رزرو ها
                </NavLink>
                <NavLink to="/a" className="nav-link">
                  تماس با ما
                </NavLink>
                <NavLink to="/a" className="nav-link">
                  درباره ما
                </NavLink>
              </Nav>
              <Nav className="flex items-center gap-x-5">
                <Link
                  to="tel:0211234"
                  className="flex items-center gap-x-1 text-xl font-bold text-black"
                >
                  <img src={phone} alt="phone" />
                  021-1234
                </Link>
                {(function () {
                  if (isLogin) {
                    return (
                      <div className="mt-2 flex flex-col items-center gap-y-3 md:mx-3 md:mt-0 md:flex-row md:gap-x-2">
                        <span>
                          سلام <span className="font-bold">{whoisLogin}</span>{" "}
                          خوش آمدید!
                        </span>
                        <button
                          className="rounded-xl bg-red-600 px-3 py-2 text-white"
                          onClick={exitHandler}
                        >
                          خروج
                        </button>
                      </div>
                    )
                  } else {
                    return (
                      <Link
                        to="/SignIn"
                        className="flex items-center gap-x-1 text-black"
                      >
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
