import { NavLink, Link } from "react-router-dom"

// bootstrap
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import Offcanvas from "react-bootstrap/Offcanvas"

// pics
import logo from "../assets/icons/navbar/logo.svg"
import person from "../assets/icons/navbar/person.png"
import phone from "../assets/icons/navbar/phone.svg"

function MyNavbar() {
  const expand = "lg"
  return (
    <>
      <Navbar key={expand} expand={expand} className="w-color mb-3">
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
                  رویداد ها
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
                <Link
                  to="/SignIn"
                  className="flex items-center gap-x-1 text-black"
                >
                  <img src={person} alt="person" />
                  ورود/ثبت نام
                </Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  )
}

export default MyNavbar
