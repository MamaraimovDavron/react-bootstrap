import React, { useContext } from "react";
import "./Navbar.scss";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import ThemeContext from "../context/context";

const MyNavbar = ({ darkBtn, ...props }) => {
  const theme = useContext(ThemeContext);

  return (
    <div
      className={`container d-flex p-4 ${theme === "light" ? "dark" : "light"}`}
    >
      <div className="col-4">
        <img
          src="https://blogzine.webestica.com/assets/images/logo.svg"
          alt=""
        />
      </div>
      <div className="col-8">
        <Navbar expand="lg" className="bg-body-tertiary" id="Navbar">
          <Container fluid id="containerFluid">
            <Navbar.Toggle
              aria-controls="navbarScroll"
              className="NavbarToggle"
            />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="Nav me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <NavDropdown
                  title="Home"
                  id="navbarScrollingDropdown"
                  className="NavDropdown"
                >
                  <NavDropdown.Item href="#action3" className="Item">
                    Home Default
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4" className="Item">
                    Home Lazy Load
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4" className="Item">
                    Magazine Classic
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4" className="Item">
                    Magazine
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4" className="Item">
                    Home Cards
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4" className="Item">
                    Blog Classic
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4" className="Item">
                    Blog Personal
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4" className="Item">
                    Blog Vintage
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4" className="Item">
                    Blog Tech
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4" className="Item">
                    Blog Fashion
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4" className="Item">
                    Blog Podcast
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4" className="Item">
                    Home Shop
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  title="Pages"
                  id="navbarScrollingDropdown"
                  className="NavDropdown"
                >
                  <NavDropdown.Item href="#action3" className="Item">
                    About
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4" className="Item">
                    Contact
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4" className="Item">
                    Shop
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4" className="Item">
                    Other Archives
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4" className="Item">
                    Error 404
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4" className="Item">
                    Sign in
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4" className="Item">
                    Sign up
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4" className="Item">
                    Offline
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  title="Post"
                  id="navbarScrollingDropdown"
                  className="NavDropdown"
                >
                  <NavDropdown.Item href="#action3" className="Item">
                    Post Grid
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4" className="Item">
                    Post List
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4" className="Item">
                    Post List2
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4" className="Item">
                    Post Card
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4" className="Item">
                    Post Overlay
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4" className="Item">
                    Post Types
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4" className="Item">
                    Post Single Magazine
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4" className="Item">
                    Post Single Classic
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4" className="Item">
                    Post Single Minimal
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4" className="Item">
                    Post Single Card
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4" className="Item">
                    Post Single Review
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4" className="Item">
                    Post Single Video
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4" className="Item">
                    Post Single Single
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  title="Lifestyle"
                  id="navbarScrollingDropdown"
                  className="NavDropdown"
                >
                  <NavDropdown.Item href="#action3" className="Item">
                    Post Grid
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4" className="Item">
                    Post List
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4" className="Item">
                    Post List2
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4" className="Item">
                    Post Card
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4" className="Item">
                    Post Overlay
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4" className="Item">
                    Post Types
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4" className="Item">
                    Post Single Magazine
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4" className="Item">
                    Post Single Classic
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4" className="Item">
                    Post Single Minimal
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4" className="Item">
                    Post Single Card
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4" className="Item">
                    Post Single Review
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4" className="Item">
                    Post Single Video
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4" className="Item">
                    Post Single Single
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  title="Dashboard"
                  id="navbarScrollingDropdown"
                  className="NavDropdown"
                ></NavDropdown>
              </Nav>

              <Form className="d-flex" id="Form">
                <Button variant="warning" id="moon" onClick={darkBtn}>
                  <i class="bi bi-moon-stars-fill"></i>
                  {/* <i class="bi bi-brightness-high"></i> */}
                </Button>

                {/* <Button variant="warning" id="sun" onClick={darkBtn}>
                  <i class="bi bi-brightness-high"></i>
                </Button> */}
                <Button variant="light" id="dots">
                  <i class="bi bi-three-dots"></i>
                </Button>
                <Button variant="danger" id="subscribe">
                  Subscribe!
                </Button>
                <Button variant="light" id="search">
                  <i class="bi bi-search"></i>
                </Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default MyNavbar;
