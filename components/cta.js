import React from "react";
import Image from "next/image";
import Container from "./container";
import Coursera from '../public/img/Coursera.png'
import IBM from '../public/img/IBM.png'
import Udemy from '../public/img/Udemy.png'

export default function Cta() {
  return (
    <Container className="!p-0">
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl try -mt-10">
        <div className="flex w-full flex-wrap items-center justify-between gap-10 mt-1 md:justify-around partners">
          <div className="text-gray-400 dark:text-gray-400">
            <UdemyLogo  />
          </div>
          <div className="text-gray-400 dark:text-gray-400">
            <CouseraLogo className="image" />
          </div>
          <div className="text-gray-400 dark:text-gray-400">
           <IbmLogo className="image" />
          </div>
        </div>
      </div>
    </Container>
  );
}


function UdemyLogo() {
  return (

    <>
      <Image src={Udemy} alt='Udemy Logo'/>
    </>
  );
}


function CouseraLogo() {
  return (

    <>
      <Image src={Coursera} alt='Coursera Logo' />
    </>
  );
}


function IbmLogo() {
  return (

    <>
      <Image src={IBM} alt='IBM Logo' />
    </>
  );
}