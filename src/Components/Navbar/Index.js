"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import "./navbar.scss"; // Import the CSS file
import DropDown from "../common/DropDown";
import Image from "next/image";
import { usePathname } from "next/navigation";

const servicesDrpDownOption = [

  { link: "/used-car-purchase-loan", name: "Used Car Purchase Loan" },
  { link: "/used-car-refinance-loan", name: "Used Car Refinance Loan" },
  { link: "/used-car-top-up-loan", name: "Used Car Top Up Loan" },
  { link: "/used-commercial-vehicle-loan", name: "Used Commercial Vehicle Loan" },
];

const moreDrpDownOption = [
  { link: "/blog", name: "Blogs" },
  { link: "/cities", name: "City wise" },
  { link: "/contact", name: "Contact Us" },
  { link: "/privacy-policy", name: "Privacy Policy" },
];

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [hamburger, setHamburger] = useState(false);
  const [servicesDrpDownOpen, setServicesDrpDownOpen] = useState(false);
  const [moreDrpDownOpen, setMoreDrpDownOpen] = useState(false);
  const pathName = usePathname();
  const isActive = (href) => {
    let check = false;
    href?.forEach(item => {
      if (pathName === item) {
        check = true;
      }
    });
    return check;
  };
  const navBarMoredropdownRef = useRef(null);
  const navBarServicesedropdownRef = useRef(null);
  const sideBarMoredropdownRef = useRef(null);
  const sideBarServicesedropdownRef = useRef(null);
  const sidebarRef = useRef(null);

  const toggleShow = () => {
    // console.log(show, "I am clicked");
    setShow(!show);
  };

  const handleHamburger = () => {
    // console.log("I am clicked hamburger");
    setHamburger(!hamburger);
    // console.log(hamburger, "hello");
  };
 
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        hamburger
      ) {
        setHamburger(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [hamburger]);
  useEffect(() => {
    // window.scrollTo(0, 0);
    if (hamburger) document.body.style.overflow = 'hidden';
  }, [hamburger]);
  return (
    <>
    <nav>
      <header
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          right: "0",
          background: "#fff",
          zIndex: "888",
        }}
        className="navbar"
        id="navbar"
      >
        <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
          <nav className="container ">
            <Link href="/">
              <Image
                loading="eager"
                width={144.48}
                height={57.78}
                className="img-wrapper"
                alt="car-pe-cash-logo"
                src="/logo.svg"
              />
            </Link>
            <div className="navbar-right-list">
              <ul className="navbar-list menu-items">
                <li className="navbar-itemm ">
                  <Link href="/" className={isActive(["/"]) ? "active" : ""}>Home</Link>
                </li>
                <li className="navbar-itemm">
                  <Link href="/about-us" className={isActive(["/about-us"]) ? "active" : ""}>About Us</Link>
                </li>
                <li
                  tabIndex={0}

                  ref={navBarServicesedropdownRef}
                  onBlur={(event) => {
                    if (
                      !navBarServicesedropdownRef?.current?.contains(
                        event.relatedTarget
                      )
                    ) {
                      setServicesDrpDownOpen(false);
                    }
                  }}
                  className="navbar-itemm "
                >
                  <div
                    onClick={() => setServicesDrpDownOpen((prev) => !prev)}
                    href="/contact"
                    // className={`dropdown-menuu services ${isActive(["/purchase-loan", "/refinance-loan", "/topup-loan", "/vehicle-loan"]) ? " active" : ""}`}
                    className={`dropdown-menuu services`}
                  >
                    Services
                    <Image
                      height={5}
                      width={12}
                      alt="dropdown-image"
                      className={`polygon ${servicesDrpDownOpen ? 'active' : ''}`}
                      src="/Polygon 2.svg"
                    />
                  </div>
                  <DropDown
                    handleDropdown={() => setServicesDrpDownOpen(false)}

                    options={servicesDrpDownOption}
                    show={servicesDrpDownOpen}
                  />
                </li>

                <li
                  ref={navBarMoredropdownRef}
                  tabIndex={0}
                  onBlur={(event) => {
                    if (
                      !navBarMoredropdownRef?.current?.contains(
                        event.relatedTarget
                      )
                    ) {
                      setMoreDrpDownOpen(false);
                    }
                  }}
                  className="navbar-itemm  "
                >
                  <div
                    onClick={() => setMoreDrpDownOpen((prev) => !prev)}
                    href="/contact"
                    // className={`dropdown-menuu home ${isActive(["/blogs", "/cities", "/contact-us", "/vehicle-loan"]) ? " active" : ""}`}
                    className={`dropdown-menuu home`}
                  >
                    More
                    <Image height={5} width={12} alt="dropdown-image" className={`polygon ${moreDrpDownOpen ? 'active' : ''}`} src="/Polygon 2.svg" />
                  </div>
                  <DropDown
                    handleDropdown={() => setMoreDrpDownOpen(false)}

                    options={moreDrpDownOption}
                    show={moreDrpDownOpen}
                  />
                </li>
              </ul>
              <ul className="social-container">
                <li>
                  <a href="tel:+917779070444">
                    <Image
                      loading="eager"
                      height={48}
                      width={48}
                      alt="telephone-icon"
                      className="small-icons"
                      src="/Group 1.svg"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:carpecash001@gmail.com"
                    rel="noopener noreferrer"
                  >
                    <Image
                      loading="eager"
                      height={48}
                      width={48}
                      alt="email-icon"
                      className="small-icons"
                      src="/Group 2.svg"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href=" https://m.facebook.com/carpecash.in"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      loading="eager"
                      height={48}
                      width={48}
                      alt="facebook-icon"
                      className="small-icons"
                      src="/Group 3.svg"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href=" https://www.instagram.com/carpecash.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      loading="eager"
                      height={48}
                      width={48}
                      alt="Instagram-icon"
                      className="small-icons"
                      src="/Group 4.svg"
                    />
                  </a>
                </li>
                <li onClick={handleHamburger} className="hamburger-main">
                  <Image
                    className="hamburger"
                    height={52}
                    width={52}
                    alt="hamburger-icon"
                    src="/Group 5.svg"
                  />
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </nav>
      {hamburger && (
        <>
          <div ref={sidebarRef} className="sidebar">
            <div className="list-wrap">
              <div className="close-btn-wrapper">
                <span className="close-btn">
                  <img
                    onClick={() => setHamburger(false)}
                    src="/Group 1000004971.svg"
                    alt="cancel-image"
                  />
                </span>
              </div>
              <ul className="sidebar-list">
                <div>
                  <Link onClick={() => setHamburger(false)} href="/">
                    <li className="sidebar-item">
                      Home
                    </li>
                  </Link>
                </div>

                <Link onClick={() => setHamburger(false)} href="/about-us">
                  <li className="sidebar-item">
                    About Us
                  </li>
                </Link>
                <li
                  ref={sideBarServicesedropdownRef}
                  tabIndex={0}
                  onBlur={(event) => {
                    if (
                      !sideBarServicesedropdownRef?.current?.contains(
                        event.relatedTarget
                      ) && !sideBarMoredropdownRef.current.contains(event.relatedTarget)
                    ) {
                      setServicesDrpDownOpen(false);
                    }
                  }}
                  className="sidebar-item"
                >
                  <div
                    onClick={() => {
                      setServicesDrpDownOpen((prev) => !prev);
                      if (!servicesDrpDownOpen) setMoreDrpDownOpen(false); // Ensure the "More" dropdown closes
                    }}
                    className="services img-flex"
                  >
                    Services
                    <img className={servicesDrpDownOpen ? " pollygonRotate" : "pollygonNoRotate"} src="/Polygon white.svg" />
                  </div>
                  <DropDown
                    handleDropdown={() => {

                      setServicesDrpDownOpen(false);
                      setHamburger(false);
                    }}

                    options={servicesDrpDownOption}
                    show={servicesDrpDownOpen}
                  />
                </li>
                <li
                  ref={sideBarMoredropdownRef}
                  tabIndex={0}
                  onBlur={(event) => {
                    if (
                      !sideBarMoredropdownRef?.current?.contains(
                        event.relatedTarget
                      )
                    ) {
                      setMoreDrpDownOpen(false);
                    }
                  }}
                  className="sidebar-item"
                >
                  <div
                    onClick={() => {
                      setMoreDrpDownOpen((prev) => !prev);
                      if (!moreDrpDownOpen) setServicesDrpDownOpen(false); // Ensure the "Services" dropdown closes
                    }}
                    className="services img-flex"
                  >
                    More
                    <img className={moreDrpDownOpen ? " pollygonRotate" : "pollygonNoRotate"} src="/Polygon white.svg" />
                  </div>
                  <DropDown
                    handleDropdown={() => {
                      setMoreDrpDownOpen(false);
                      setHamburger(false);
                    }}
                    options={moreDrpDownOption}
                    show={moreDrpDownOpen}
                  />
                </li>
              </ul>
            </div>
          </div>
        </>
      )}


    </>
  );
};

export default Navbar;
