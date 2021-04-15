import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

function InfoCard(props) {
  return (
    <span
      id={props.id}
      className="sm:flex sm:flex-row sm:justify-between sm:border-2 sm:border-blue-300 border border-blue-300 rounded p-8 flex flex-col items-center text-grey-700"
    >
      {props.photoPosition === "left" && (
        <div className="sm:pr-8 pb-8 sm:pb-0">
          <img
            src={props.image}
            alt="By Tom Thain on Unsplash"
            className="rounded"
          />
        </div>
      )}
      <div>
        <h2 className="uppercase font-bold text-lg text-center pb-8">
          {props.heading}
        </h2>
        <div
          className={classnames(
            "text-justify sm:pb-0",
            props.photoPosition === `right` && "pb-8"
          )}
        >
          {props.text}
        </div>
      </div>
      {props.photoPosition === "right" && (
        <div className="sm:pl-8">
          <img
            src={props.image}
            alt="By Tom Thain on Unsplash"
            className="rounded"
          />
        </div>
      )}
    </span>
  );
}

InfoCard.propTypes = {
  id: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  photoPosition: PropTypes.oneOf(["left", "right"]).isRequired,
  image: PropTypes.object.isRequired,
};

export { InfoCard };
