import Image from "next/image";
import React, { useState } from "react";
import Container from "./container";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import userOneImg from "../public/img/Tayo.png";
import userTwoImg from "../public/img/Ensign.png";
import userThreeImg from "../public/img/Baze.png";
import Vector from "../public/img/Vectors.png";
import ArrowBack from "../public/img/arrow_forward_ios.png";
import ArrowNext from "../public/img/arrow_forward_ios.png";

export default function Testimonials() {

  const settings = {
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: 'slick-dots',
    centerPadding: '0px',
    arrows: false,
    adaptiveHeight: true

  };
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <div className="testimony-section" id="testimonials" style={{ display: "flex", justifyContent: "center" }}>
      <Container className="">
        <div className="sliders" style={{ width: "50%", margin: 'auto' }}>
          <Slider {...settings} ref={setSliderRef}>
            <div className="">
              <a href="#" className="flex flex-col items-center justify-center bg-[#1AB5E3] rounded-tl-lg rounded-tr-lg border-none shadow-md md:flex-row md:max-w-xl hover:bg-[#1AB5E3] dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 cards">
                <Image className="object-cover w-full h-96 rounded-tl-lg sm:w-full h-96 md:h-96 md:w-auto md:rounded-none md:rounded-tl-lg picture" src={userOneImg} alt="" id="pic" />
                <div className="flex flex-col justify-between p-5 w-full leading-normal">
                  <h5 className="mb-2 text-sm font-bold tracking-tight text-white dark:text-white"><Image width={'15px'} height={'15px'} src={Vector} alt="" /></h5>
                  <p className="mb-3 font-normal text-white text-lg dark:text-white body">The Predact App has enabled the overall success of our Institution. Our Students are graduating with the best results and Our Lecturers have the best tool of managing the students.</p>
                  <p className="text-md text-[#C2E4FF]">Ademola Tayo</p>
                  <p className="text-sm text-[#C2E4FF]">VC Babcock University</p>
                </div>
              </a>
            </div>
            <div>
              <a href="#" className="flex flex-col items-center justify-center bg-[#1AB5E3] rounded-tl-lg rounded-tr-lg border-none shadow-md md:flex-row md:max-w-xl hover:bg-[#1AB5E3] dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 cards">
                <Image className="object-cover w-full h-96 rounded-tl-lg sm:w-full h-96 md:h-96 md:w-auto md:rounded-none md:rounded-tl-lg picture" src={userTwoImg} alt="" id="pic" />
                <div className="flex flex-col justify-between p-5 w-full leading-normal">
                  <h5 className="mb-2 text-sm font-bold tracking-tight text-white dark:text-white"><Image width={'15px'} height={'15px'} src={Vector} alt="" /></h5>
                  <p className="mb-3 font-normal text-white text-lg dark:text-white body">Predact App is one of the best tools in AUN.</p>
                  <p className="text-md text-[#C2E4FF]">Dr Margee Ensign</p>
                  <p className="text-sm text-[#C2E4FF]">VC American Univeristy Nigeria</p>
                </div>
              </a>
            </div>
            <div>
              <a href="#" className="flex flex-col items-center justify-center bg-[#1AB5E3] rounded-tl-lg rounded-tr-lg border-none shadow-md md:flex-row md:max-w-xl hover:bg-[#1AB5E3] dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 cards">
                <Image className="object-cover w-full h-96 rounded-tl-lg sm:w-full h-96 md:h-96 md:w-auto md:rounded-none md:rounded-tl-lg picture" src={userThreeImg} alt="" id="pic" />
                <div className="flex flex-col justify-between p-5 w-full leading-normal">
                  <h5 className="mb-2 text-sm font-bold tracking-tight text-white dark:text-white"><Image width={'15px'} height={'15px'} src={Vector} alt="" /></h5>
                  <p className="mb-3 font-normal text-white text-lg dark:text-white body">Predact is a great milestone to be celebrated in Education.</p>
                  <p className="text-md text-[#C2E4FF]">Prof Tahir Mamman</p>
                  <p className="text-sm text-[#C2E4FF]">VC Baze University</p>
                </div>
              </a>
            </div>
          </Slider>
          <div className="flex w-full items-center justify-center move-up">
            <div className="flex flex-none justify-between w-auto mt-14">
              <div
                className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-[#1AB5E3] hover:bg-[#1AB5E3] hover:text-white-500 transition-all text-orange-500 cursor-pointer"
                onClick={sliderRef?.slickPrev}
              >
                <Image src={ArrowBack} alt="back" className="h-6 w-6 backArrow " />
              </div>
              <div
                className="flex items-center justify-center h-14 w-14 rounded-full bg-[#1AB5E3] hover:bg-[#1AB5E3] hover:text-white-500 transition-all text-orange-500 cursor-pointer"
                onClick={sliderRef?.slickNext}
              >
                 <Image src={ArrowNext} alt="next" className="h-6 w-6 " />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
