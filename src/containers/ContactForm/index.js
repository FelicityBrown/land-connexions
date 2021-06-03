import React from "react";

function ContactForm() {
  return (
    <div className="text-grey-700 max-w-screen-md p-8 text-lg">
      <h2 className="uppercase pb-4">Contact Us</h2>
      <div className="mb-8 text-blue-300 font-semibold">
        <p className="mb-4">
          If you have any questions or would like to discuss your own situation,
          we would be delighted to talk to you.
        </p>
        <p>
          Please fill out our contact form below and we will get back in touch
          with you shortly.
        </p>
      </div>
      <form
        className="flex flex-col text-blue-600"
        method="post"
        action="/submit"
      >
        <label for="name" className="mb-2">
          Name:
        </label>
        <input
          required
          type="text"
          name="name"
          id="name"
          className="text-blue-600 mb-4 p-1 border border-grey-200 rounded"
        />
        <label for="emailAddress" className="mb-2">
          Email Address:
        </label>
        <input
          required
          type="email"
          name="emailAddress"
          id="emailAddress"
          className="text-blue-600 mb-4 p-1 border border-grey-200 rounded"
        />
        <label for="phoneNumber" className="mb-2">
          Phone Number:
        </label>
        <input
          type="number"
          name="phoneNumber"
          id="phoneNumber"
          className="text-blue-600 mb-4 p-1 border border-grey-200 rounded"
        />
        <label for="message" className="mb-2">
          Type your message here...
        </label>
        <textarea
          required
          id="message"
          rows="5"
          cols="60"
          name="text"
          placeholder="Enter your message here..."
          className="text-blue-600 mb-6 md:mb-8 p-1 border border-grey-200 rounded form-textarea mt-1 block w-full "
        ></textarea>
        <div className="flex justify-center">
          <input
            type="submit"
            className="cursor:pointer uppercase border border-green-400 rounded-full text-white bg-green-400 py-2 px-8 text-xl mb-6 md:mb-8"
          />
        </div>
      </form>
      {/* <Button
        label="Sumbit"
        onClick={() => alert("clicked")}
        className="mb-6 md:mb-8"
        size="large"
      /> */}
      <div className="text-blue-300 font-semibold border-t-2 border-grey-50">
        <p className="mt-6 mb:mt-8 pb-4">Alternatively you can contact: </p>
        <p className="pb-2">John Moore</p>
        <div className="flex flex-row pb-2">
          <p>Mobile: </p>
          <a className="text-blue-link ml-2" href="tel:+447544715013">
            07544 715013
          </a>
        </div>
        <div className="flex flex-row">
          <p>Email: </p>
          <a
            className="text-blue-link ml-2"
            href="mailto:john@landconnexions.co.uk"
          >
            john@landconnexions.co.uk
          </a>
        </div>
      </div>
    </div>
  );
}

ContactForm.propTypes = {};

export { ContactForm };
