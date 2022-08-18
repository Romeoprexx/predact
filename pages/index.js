import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

//import dynamic from "next/dynamic";

// const Video = dynamic(() => import("../components/video"));

// const Benefits = dynamic(() => import("../components/benefits"));
// const Footer = dynamic(() => import("../components/footer"));
// const Testimonials = dynamic(() => import("../components/testimonials"));
// const Cta = dynamic(() => import("../components/cta"));
// const Faq = dynamic(() => import("../components/faq"));

// const PopupWidget = dynamic(() => import("../components/popupWidget"));

export default function Home() {
  return (
    <>
      <Head>
        <title>Predact App</title>
        <meta
          name="description"
          content="Predact is used for predicting students academic performance"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-welcome dark:bg-none">
       <Navbar />
       <Hero />
      </div>
      <SectionTitle
        pretitle="Predact Benefits"
        title=" Why should you use this app">
        Prediction of students' performance provides support in selecting courses and designing appropriate future study plans for students.
      </SectionTitle>
      <Benefits />
      
      <div className="testimony dark:bg-none">
      <SectionTitle className="remove-sm"
        pretitle="Testimonials"
        title="Don't take our word for it">
      </SectionTitle>
      <Testimonials />
      </div>
      <div style={{marginTop:'70px'}}>
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions"/>
      <Faq />
      </div>
      <div className="cta dark:bg-none" style={{marginTop:'70px'}}>
      <SectionTitle pretitle="" title="Our Partners"/>
      <Cta />
      </div>
      <div className="footer dark:bg-none dark:border-b-solid dark:border-2 dark:border-trueGray-700">
      <Footer />
      </div>
      <PopupWidget />
    </>
  );
}
