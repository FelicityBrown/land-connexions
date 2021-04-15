import React from "react";
// import PropTypes from "prop-types";
// import classnames from "classnames";

// Components
import { Button } from "../../components/Button";

function ContactForm() {
  return (
    <>
      <h2 className="uppercase p-4 text-lg">Contact Us</h2>

      <form>
        <label>
          Your Name:
          <input type="text" name="name" />
        </label>
        <input />
      </form>
      <Button label="Sumbit" onClick={() => alert("clicked")} />
    </>
  );
}

ContactForm.propTypes = {};

export { ContactForm };
