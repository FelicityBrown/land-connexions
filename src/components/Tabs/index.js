import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

// 3rd Party
import { Link } from "react-router-dom";

function Tabs(props) {
  return (
    <ul className="flex flex-row m-0">
      <li />
      {props.tabs &&
        props.tabs.map((item, index) => {
          const Wrapper = item.url ? Link : "div";

          return (
            <li className="mb-0" key={index}>
              <Wrapper
                className={classnames(
                  "block mr-4 text-md font-bold cursor-pointer text-white",
                  !item.selected && "hover:text-grey-300",
                  item.selected && "text-green-300",
                  // Additional classes from props
                  props.className
                )}
                to={item.url}
                onClick={() => props.onTab(item)}
              >
                <span>{item.label}</span>
              </Wrapper>
            </li>
          );
        })}
    </ul>
  );
}

Tabs.defaultProps = {
  onTab: () => {},
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      selected: PropTypes.bool,
      url: PropTypes.string,
    })
  ).isRequired,
  /** If you want to add additional styling to the tabs */
  className: PropTypes.string,
  onTab: PropTypes.func,
};

export { Tabs };
