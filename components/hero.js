import Image from "next/image";
import Link from "next/link";
import Container from "./container";
import heroImg from "../public/img/Hero-Img.png";
import Photo from "../public/img/Group-1.png";
import Photos from "../public/img/Group-2.png";
import Img from "../public/img/Group-3.png";

export default function Hero() {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-[#2D2D2D] lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white predict">
              Predict your Students Academic Performance with Ease!!!
            </h1>
            <p className="py-5 text-xl leading-normal text-[#000000] lg:text-xl xl:text-2xl dark:text-gray-300 about">
              As a School Administrator, keep your students on top of their game by predicting their performance.
            </p>

            <div className="flex flex-col items-start space-x-3 space-y-3 sm:space-y-0 sm:items-center sm:flex-row">
              
              
              <Link href="/"> 
               <a className="px-5 w-40 py-3 text-lg font-medium text-center text-white bg-[#0190FF] rounded-md ">
                  Sign In
               </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className=" flex lg:block">
            <Image
              src={heroImg}
              alt="Hero Illustration"
              layout="intrinsic"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-[#000000] dark:text-white">
            Trusted by <span className="text-[#0190FF] font-bold">500+</span> Tertiary Institutions
            worldwide
          </div>

          <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
            <div className="pt-2 text-gray-400 dark:text-gray-400">
              <AmericanUniversityLogo />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <NileUniversityLogo />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <CoventantUniversityLogo />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <CoventantUniversityLogo />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

function AmericanUniversityLogo() {
  return (
    
    <>
      <Image src={Photo} alt='' />    
    </>
  );
}

function NileUniversityLogo() {
  return (
    <>
      <Image src={Photos} alt='' />    
    </>

  );
}

function CoventantUniversityLogo() {
  return (
    <>
      <Image src={Img} alt='' />    
    </>
  );
}


