// React
import React from "react";

// Components
import { PageHeader } from "../../containers/PageHeader";
import { Footer } from "../../components/Footer";

function ThankYou() {
  return (
    <div>
      <PageHeader />
      <div className="p-8 pb-96 mx-12 mt-3 text-blue-300 items-center flex flex-col text-left text-lg">
        <div className="max-w-screen-xl md:pl-72 md:pr-8 px-2">
          <div className="p-9 border border-blue-300 rounded">
            Thank you for getting in contact with us, we will be back in touch
            with you shortly
          </div>
        </div>
      </div>
      <div className="items-end">
        <Footer />
      </div>
    </div>
  );
}

export { ThankYou };
