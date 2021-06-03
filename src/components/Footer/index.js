import React from "react";

// 3rd Party
import { Link } from "react-router-dom";

// Components
import logo from "../../assets/logo.svg";

function Footer(props) {
  return (
    <div className="block text-xs text-white bg-blue-600 flex flex-row justify-between md:p-4 p-3">
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          className="md:h-20 h-16 md:block bg-blue-600"
        />
      </Link>
      <div className="self-end">© Copyright by Land Connexions</div>
      <Link to="/contact" className="self-end">
        <div>Contact Us</div>
      </Link>
    </div>
  );
}

Footer.propTypes = {};

export { Footer };
