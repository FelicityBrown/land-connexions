import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

function Button(props) {
  return (
    <button
      className={classnames(
        "uppercase text-sm border border-green-400 rounded-full text-white bg-green-400 py-1 px-3 cursor:pointer focus:outline-none",
        props.disabled &&
          "cursor-not-allowed border-grey-150 rounded-full text-white bg-grey-150"
      )}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
}

Button.propTypes = {
  /** Text to show in the button */
  label: PropTypes.string,
  /** Grey out the button and prevent click events from firing. */
  disabled: PropTypes.bool,
  /** Function to fire on clicking the button */
  onClick: PropTypes.func.isRequired,
};

export { Button };
