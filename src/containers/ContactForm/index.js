import React from "react";
// import PropTypes from "prop-types";
// import classnames from "classnames";

// Components
import { Button } from "../../components/Button";

function ContactForm() {
  return (
    <div className="text-grey-700 p-4">
      <h2 className="uppercase pb-4 text-lg">Contact Us</h2>
      <p className="mb-4 text-blue-300">
        If you have any questions or would like to discuss your own situation,
        we would be delighted to talk to you.
      </p>
      <form className="flex flex-col">
        <label for="name" className="mb-2">
          Name:
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="text-blue-600 mb-2 p-1 border border-grey-200 rounded"
        />
        <label for="emailAddress" className="mb-2">
          Email Address:
        </label>
        <input
          type="email"
          name="emailAddress"
          id="emailAddress"
          className="text-blue-600 mb-2 p-1 border border-grey-200 rounded"
        />
        <label for="phoneNumber" className="mb-2">
          Phone Number:
        </label>
        <input
          type="number"
          name="phoneNumber"
          id="phoneNumber"
          className="text-blue-600 mb-2 p-1 border border-grey-200 rounded"
        />
        <label for="message" className="mb-2">
          Type your message here...
        </label>
        <textarea
          id="message"
          rows="5"
          cols="60"
          name="text"
          placeholder="Enter your message here..."
          className="text-blue-600 mb-2 p-1 border border-grey-200 rounded "
        ></textarea>
      </form>
      <Button label="Sumbit" onClick={() => alert("clicked")} />
    </div>
  );
}

ContactForm.propTypes = {};

export { ContactForm };
