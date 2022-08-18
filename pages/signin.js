import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";
import Image from "next/image";
import SideImage from '../public/img/Group-32.png';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useFormik } from 'formik';
import * as Yup from 'yup';





const Signin = () => {

    const [showPassword, setShowPassword] = useState(false);

    const toggleShownPassword = () => {
        setShowPassword(showPassword ? false : true)

    }

    const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,50}$/;
    // min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

    const SignupSchema = Yup.object().shape({
        user: Yup.string()
            .min(6, 'Too Short!')
            .max(12, 'Too Long!')
            .required('User Id is Required'),
        password: Yup.string()
            .min(6, 'Too Short!')
            .max(50, 'Too Long!')
            .matches(passwordRules, { message: "password must contain at least 1 upper case letter, 1 lower case letter, 1 numeric digit" })
            .required('Password is Required'),

    });
    
    const onSubmit = async ( {values, actions} ) => {
        console.log(values);
        console.log(actions);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        actions.resetForm();
        
        
        
    };

    const formik = useFormik({
        initialValues: {
            user: "",
            password: ""
        },
        validationSchema: SignupSchema,
        onSubmit

    });

    console.log(formik)
  


    return (
        <div>
            <NavBar />
            <div class="flex items-center bg-white-500">
                <div class="flex-1 h-full w-full mx-auto bg-white-500 rounded-lg shadow-xl">
                    <div class="flex flex-col md:flex-row">
                        <div class="w-full md:h-auto md:w-1/2 lg:w-6/12 xl:w-6/12 mx-auto side-img">

                            <div className="ml-0 img-div">
                                <Image class="object-cover w-full h-full ml-0 lg:ml-30" src={SideImage}
                                    alt="img" />
                            </div>
                        </div>
                        <div class="flex items-center justify-center p-6 mt-0 lg:-mt-10 sm:p-12 md:w-1/2">
                            <div class="w-full mt-0 xl:mt-10">
                                <h1 class="mb-2 text-2xl lg:text-3xl font-bold text-left text-[#2D2D2D] H1">
                                    Sign In to Predact
                                </h1>
                                <p className="text-left text-lg text-[#2D2D2D] ict">
                                    To sign in, use the password given to you by your ICT  department
                                </p>
                                <form onSubmit={formik.handleSubmit}>
                                    <div className="id-label mt-0 lg:mt-10 xl:mt-10 md:mt-5">
                                        <label class="block text-md text-[#0000] id">
                                            User ID
                                        </label>
                                        <input type="text" value={formik.values.user} onChange={formik.handleChange} onBlur={formik.handleBlur}
                                            class={`w-full lg:w-50 px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600 input-field ${formik.errors.user && formik.touched.user ? "input-error" : ""}`}
                                            placeholder="" name="user"
                                        />
                                        {formik.errors.user && formik.touched.user && <p className="error">{formik.errors.user}</p>}
                                    </div>
                                    <div>
                                        <label class="block mt-4 text-md text-[#0000] id">
                                            Enter Password
                                        </label>
                                        <div className="flex relative">
                                            <input value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}
                                                class={`w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600 input-field ${formik.errors.password && formik.touched.password ? "input-error" : ""}`}
                                                placeholder="" type={showPassword ? "text" : "password"} name="password"

                                            />
                                            <i className="eyelash" onClick={toggleShownPassword}>{showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}</i>
                                        </div>
                                        {formik.errors.password && formik.touched.password && <p className="error">{formik.errors.password}</p>}
                                    </div>
                                    <div className="flex items-center justify-between mt-5 remember-width">
                                        <div className="flex items-center">
                                            <input
                                                id="remember-me"
                                                name="remember-me"
                                                type="checkbox"
                                                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded cursor-pointer"
                                            />
                                            <label htmlFor="remember-me" className="ml-2 block text-md remember">
                                                Remember me
                                            </label>
                                        </div>

                                        <div className="text-sm forget-password">
                                            <Link href="/forgot-password">
                                                <a className="font-medium">
                                                    Forgot your password?
                                                </a>
                                            </Link>
                                        </div>
                                    </div>



                                    <div className="flex justify-center mr-0 button-div mt-10">
                                        <button className="" type="submit" disabled={formik.isSubmitting}>
                                            <Link href="/dashboard/Dashboard">
                                                <a className="block px-4 py-2 mt-4 text-md font-medium leading-5 text-center text-white transition-colors duration-150 border border-transparent rounded-lg active:bg-[#0099D1] hover:bg-[#0099D1] focus:outline-none focus:shadow-outline-[#0099D1] sign-btn">
                                                    Sign In
                                                </a>
                                            </Link>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}




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
                            href="/register"
                            spy={true}
                            smooth={true}
                            duration={1000}
                            onSetActive={() => {
                                setActiveLink("/register");
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

export default Signin