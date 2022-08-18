import React, { useState, useEffect } from "react";
import Link from "next/link";
// Import react scroll
import { Link as LinkScroll } from "react-scroll";
import Image from "next/image";
import SideImage from '../public/img/Group-161.png';
import Circle from '../public/img/check_circle.png';

const ResetSucessful = () => {
  return (
    <div>
      <NavBar />
      <div className="flex items-center bg-white-500">
        <div className="flex-1 h-full w-full mx-auto bg-white-500 rounded-lg shadow-xl">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:h-auto md:w-1/2 lg:w-6/12 xl:w-6/12 mx-auto side-img">
              <div className="ml-0 img-div">
                <Image className="object-cover w-full h-full ml-0 lg:ml-30" src={SideImage}
                  alt="img" />
              </div>
            </div>
            <div className="flex items-center justify-center p-6 mt-0 lg:-mt-10 sm:p-12 md:w-1/2">
              <div className="w-full mt-0 xl:mt-40 md:mt-20 lg:mt-40">
                <div className="text-center flex justify-center items-center align-center h-45 w-50 lg:w-full lg:h-full">
                 <Image className="circle-image" src={Circle} alt='reset-success' />
                </div>
                <h1 className="mb-2 text-2xl md:text-2xl lg:text-3xl font-bold text-center text-[#2D2D2D] H3">
                  Password Reset Successful!
                </h1>
                <p className="text-center text-lg text-[#2D2D2D] ict-email">
                  Go to your Email to reset your password
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResetSucessful






const NavBar = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  return (
    <>
      <header
        className={
          "top-0 w-full  z-30 bg-white-500 transition-all border shadow shadow-xl " +
          (scrollActive ? " shadow-md pt-0" : " pt-4")
        }
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4 container relative flex flex-wrap items-center justify-between mx-auto lg:justify-between">
          <div className="col-start-1 col-end-2 flex items-center">
            <Link href="/">
              <a>
                <img
                  src="/img/predact_logo.png"
                  alt="Logo"
                  className="w-40 cursor-pointer"
                />
              </a>
            </Link>


          </div>
          <ul className="hidden lg:flex col-start-6 col-end-9 text-[#0190FF] font-bold text-xl items-center ul">
            <LinkScroll
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("home");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "home"
                  ? " text-primary-500 animation-active "
                  : " text-black-500 hover:text-primary-500 a")
              }
            >
              Home
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="testimonials"
              spy={true}
              offset={-150}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("testimonials");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "testimonials"
                  ? " text-orange-500 animation-active "
                  : " text-black-500 hover:text-primary-500 ")
              }
            >
              Testimonials
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="faq"
              spy={true}
              offset={-150}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("faq");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "faq"
                  ? " text-orange-500 animation-active "
                  : " text-black-500 hover:text-primary-500 ")
              }
            >
              FAQ
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="/"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("/");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "/"
                  ? " text-orange-500 animation-active "
                  : " text-black-500 hover:text-primary-500 ")
              }
            >
              Contact Us
            </LinkScroll>
          </ul>
          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            <Link href="/signin">
              <a className="px-6 py-2 text-white bg-[#0099D1] rounded-md md:ml-5 buttons">
                Get Started
              </a>
            </Link>

          </div>
        </nav>
      </header>
      {/* Mobile Navigation */}

      <nav className="fixed bg-white-500 lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t ">
        <div className="bg-white-500 sm:px-3">
          <ul className="flex w-full justify-between items-center text-black-500">
            <LinkScroll
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("home");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex font-bold flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "home"
                  ? "  border-orange-500 text-orange-500"
                  : " border-transparent")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10v11h6v-7h6v7h6v-11L12,3z"
                />
              </svg>
              Home
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="testimonials"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("testimonials");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col font-bold items-center text-xs border-t-2 transition-all " +
                (activeLink === "testimonials"
                  ? "  border-orange-500 text-orange-500"
                  : " border-transparent ")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              Testimonials
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="faq"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("faq");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs font-bold border-t-2 transition-all " +
                (activeLink === "faq"
                  ? "  border-orange-500 text-orange-500"
                  : " border-transparent ")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18,6 L6,12 L18,18"
                />
              </svg>
              <circle cx="18" cy="6" r="3" fill="#212b36" />
              <circle cx="6" cy="12" r="3" fill="#212b36" />
              <circle cx="18" cy="18" r="3" fill="#212b36" />
              FAQ
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="/"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("/");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col font-bold items-center text-xs border-t-2 transition-all " +
                (activeLink === "/"
                  ? "  border-orange-500 text-orange-500"
                  : " border-transparent ")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              Contact Us
            </LinkScroll>
          </ul>
        </div>
      </nav>
      {/* End Mobile Navigation */}
    </>
  );
}