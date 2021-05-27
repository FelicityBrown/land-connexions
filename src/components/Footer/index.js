import React from "react";

// Components
import logo from "../../assets/logo.svg";

function Footer(props) {
  return (
    <div className="block text-xs text-white bg-blue-600 flex flex-row justify-between md:p-4 p-3">
      <img
        src={logo}
        alt="logo"
        className="md:h-20 h-16 md:block bg-blue-600"
      />
      <div className="self-end">© Copyright by Land Connexions</div>
      <div className="self-end">Contact Us</div>
    </div>
  );
}

Footer.propTypes = {};

export { Footer };
