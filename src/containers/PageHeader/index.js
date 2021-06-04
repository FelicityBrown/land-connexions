import React from "react";

// 3rd Party
import { Link, useLocation } from "react-router-dom";

// Components
import logo from "../../assets/logo.svg";
import { Tabs } from "../../components/Tabs";

function PageHeader(props) {
  const location = useLocation();

  return (
    <div>
      <div className="bg-blue-600 flex flex-row justify-between py-6 px-2 md:px-0 md:pr-5">
        <div className="bg-blue-600 md:absolute">
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className="md:h-64 md:block md:z-10 bg-blue-600 md:px-8 md:pb-4 rounded-r-xl"
            />
          </Link>
          <div className="hidden md:block text-green-300 z-10 items-end pb-6 text-center">
            Independent Land Agents
          </div>
        </div>
        <div className="relative"></div>
        <div className="flex flex-row text-white items-end z-10 mr-2">
          <Tabs
            tabs={[
              {
                label: "Home",
                selected: location.pathname === "/",
                url: "/",
              },
              {
                label: "Contact Us",
                selected: location.pathname === "/contact",
                url: "/contact",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

PageHeader.propTypes = {};

export { PageHeader };
