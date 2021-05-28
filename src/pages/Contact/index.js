// React
import React from "react";

// Components
import { PageHeader } from "../../containers/PageHeader";
import { Footer } from "../../components/Footer";
import { ContactForm } from "../../containers/ContactForm";

function Contact() {
  return (
    <>
      <div>
        <PageHeader />
        <div className=" md:mx-12 md:mt-4 md:pb-2 flex flex-col">
          <div className="md:pl-72 md:pr-8">
            <ContactForm />
          </div>
        </div>
        {/* <div className="sm:p-8 sm:mx-12 mt-8 md:mt-4 text-blue-600 items-center flex flex-col text-left text-lg">
        <div className="max-w-screen-xl md:pl-64 md:pr-8 px-8 md:ml-8"></div> */}
        <Footer />
      </div>
    </>
  );
}

export { Contact };
