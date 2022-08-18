
import benefitOneImg from "../public/img/Group-130.png";
import benefitTwoImg from "../public/img/Group-131.png";
import Link from "next/link";

const benefitOne = {
  title: "Predict and View your Students Academic performance",
  desc: <p>As a <span className="text-[#0190FF]">School Administrator</span>, you can view your students results, predict their academic scores and get prompt messages about them.</p>,
  image: benefitOneImg,
  bullets: [
    
    {
      icon:{
        input: <Link href="/">
        <a className="w-full px-6 py-2 mt-3 text-center text-white bg-[#0099D1] rounded-md lg:ml-5">
          Get Started
        </a>
      </Link>
      },
    },
    
  ],
};

const benefitTwo = {
  title: "Register your School",
  desc: <p>As a <span className="text-[#0190FF]">School</span>, Kindly Contact Us for your school to be registered and then your school adminstrators can have access.</p>,
  image: benefitTwoImg,
  bullets: [
  
    {
      icon:{
        input: <Link href="/">
        <a className="w-full px-6 py-2 mt-3 text-center text-white bg-[#0099D1] rounded-md lg:ml-5">
          Contact Us
        </a>
      </Link>
      },
    },
  ],
};


export { benefitOne, benefitTwo };
