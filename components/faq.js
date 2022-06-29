import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

export default function Faq() {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between font-bold w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronDownIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-gray-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-white bg-gray-50 dark:bg-trueGray-800 rounded-t-lg">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "How do i Register with Predact?",
    answer: <p>To Register with Predact, kindly follow these steps;<br/>
           1. Click on the Register button and you will see Contact Us. <br />
           2. You can either Call Us, send us an Email or Visit our offices. <br/>
           3. When you are registered, your database is now with Predact.
          </p>
        
      
    
  },
  {
    question: "Must a school be registered?",
    answer: "Yes a school must register in order for the admin to get access to the prediction dashboard."
  },
  {
    question: "What is the scope of prediction?",
    answer:
      "Information like Attendance, Class test, Seminar and Assignment marks were collected from the students management system, to predict the performance at the end of the session.",
  },
];

