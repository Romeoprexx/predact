import Image from "next/image";
import React from "react";
import benefitOneImg from "../public/img/Group-130.png";
import benefitTwoImg from "../public/img/Group-131.png";
import  Link  from 'next/link'

export default function Benefits() {


  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="feature"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 py-8 my-12">
        <div className="flex w-full justify-end">
          <div className="h-full w-full p-4">
            <Image
              src={benefitOneImg}
              alt="VPN Illustrasi"
              layout="responsive"
              quality={100}
              height={482}
              width={521}
            />
          </div>
        </div>
        <div className="flex flex-col items-end justify-center ml-auto w-full lg:w-10/12">
          <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-[#2D2D2D] lg:leading-tight lg:text-4xl dark:text-white predict predicts">
            Predict and View your Students Academic performance
          </h3>
          <p className="max-w-2xl py-4 text-lg leading-normal text-[#000000] lg:text-xl xl:text-xl dark:text-gray-300 about">
            As a <span className="text-[#0190FF]">School Administrator</span>, you can view your students results, predict their academic scores and get prompt messages about them.
          </p>
          <div className="w-full mt-2 ml-0 sm:ml-0 md:ml-0 lg:-ml-5">
              <Link href="/signin">
                <a className="px-5 w-40 py-3 text-lg font-medium text-center text-white bg-[#0099D1] rounded-md buttons">
                  Get Started
                </a>
              </Link>
            </div>
        </div>
      </div>
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 py-8 my-12">
        <div className="flex flex-col items-start justify-center ml-auto w-full lg:w-12/12">
          <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-[#2D2D2D] lg:leading-tight lg:text-4xl dark:text-white predict predicts">
            Register your School
          </h3>
          <p className="max-w-2xl py-4 text-lg leading-normal text-[#000000] lg:text-xl xl:text-xl dark:text-gray-300 about">
            As a <span className="text-[#0190FF]">School</span>, Kindly Contact Us for your school to be registered and then your school adminstrators can have access.
          </p>
          <div className="w-full mt-2 ml-0 sm:ml-0 md:ml-0 lg:-ml-0">
              <Link href="/register">
                <a className="px-5 w-40 py-3 text-lg font-medium text-center text-white bg-[#0099D1] rounded-md buttons">
                  Contact Us
                </a>
              </Link>
          </div>
        </div>
        <div className="flex w-full justify-end">
          <div className="h-full w-full p-4">
            <Image
              src={benefitTwoImg}
              alt="VPN Illustrasi"
              layout="responsive"
              quality={100}
              height={482}
              width={521}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
