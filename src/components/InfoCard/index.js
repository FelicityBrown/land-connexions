import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

function InfoCard(props) {
  return (
    <span
      id={props.id}
      className={classnames(
        "flex flex-col md:flex-row justify-between  items-center text-blue-600 p-4 md:p-8  mb-4 md:mx-8 border-solid",
        props.photoPosition === "left" && "bg-grey-50 rounded"
      )}
    >
      {props.photoPosition === "left" && (
        <div className="pr-8 pb-0 sm:flex-1 hidden md:block">
          <img src={props.image} alt={props.alt} className="rounded" />
        </div>
      )}
      <div className="sm:flex-1">
        <h2 className="uppercase font-bold text-lg pb-6">{props.heading}</h2>
        <div className={classnames("md:text-left pb-4 md:pb-0")}>
          {props.children}
        </div>
      </div>
      {props.photoPosition === "right" && (
        <div className="md:pl-8 md:flex-1">
          <img src={props.image} alt={props.alt} className="rounded" />
        </div>
      )}
      {props.photoPosition === "left" && (
        <div className="md:pl-8 md:flex-1 block md:hidden">
          <img src={props.image} alt={props.alt} className="rounded" />
        </div>
      )}
    </span>
  );
}

InfoCard.propTypes = {
  id: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  /** Text to go to the left or right of the photo - element so that it works with lists, sub-headings etc. */
  children: PropTypes.element.isRequired,
  alt: PropTypes.string.isRequired,
  photoPosition: PropTypes.oneOf(["left", "right"]).isRequired,
  image: PropTypes.object.isRequired,
};

export { InfoCard };
