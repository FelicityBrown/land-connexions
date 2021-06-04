// React
import React from "react";

// Components
import { PageHeader } from "../../containers/PageHeader";
import { Footer } from "../../components/Footer";
import { ContactForm } from "../../containers/ContactForm";

function Contact() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-between">
        <PageHeader />
        <div className=" md:mx-12 md:mt-4 md:pb-2 flex flex-col">
          <div className="md:pl-72 md:pr-8">
            <ContactForm />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export { Contact };
