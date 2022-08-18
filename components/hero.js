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
        <div className="max-w-screen-xl px-8 xl:px-16 mx-auto flex items-center w-full lg:w-1/2" id="home">
          <div className="max-w-4xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-[#2D2D2D] lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight dark:text-white predict">
              Predict your Students Academic Performance with Ease!!!
            </h1>
            <p className="py-5 text-xl leading-normal text-[#000000] lg:text-xl xl:text-tiny dark:text-gray-300 about">
              As a School Administrator, keep your students on top of their game by predicting their performance.
            </p>

            <div className="flex flex-col items-start space-x-3 space-y-3 sm:space-y-0 sm:items-center sm:flex-row">
              <Link href="/signin">
                <a className="px-5 w-40 py-3 text-lg font-medium text-center text-white bg-[#0099D1] rounded-md buttons">
                  Get Started
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
        <div className="">
          <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4 container relative flex flex-wrap items-center justify-between mx-auto lg:justify-between terminal">
            <div className="justify-between flex gap-9 py-3 px-6">
                <div className="w-full">
                  <h1 className="text-5xl h1 w-full feather">500+</h1>
                  <p className="text-xl text-[#2D2D2D] parethensis">Tertiary Institutions</p>
                </div>
                <div className="w-full">
                  <h1 className="text-5xl text-[#2D2D2D] h1 w-full bracket feather">30M+</h1>
                  <p className="text-xl text-[#2D2D2D] parethensis">Undergraduates & Post</p>
                </div>
              <div className="gap-9 flex w-full">
                <Image src={Photo} alt="AUN" />
                <Image src={Photos} alt="Nile" />
                <Image src={Img} alt="Coventant" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
